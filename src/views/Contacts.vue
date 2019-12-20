<template lang="pug">
  .contacts
    .contacts__search(v-if="$route.path === '/'")
      input.contacts-input(v-model="search")
    table.contacts__table
      tr.table__tr(
        v-for="item in contacts"
        :key="item.contact_id"
        @click="$router.replace(`/${item.contact_id}`)"
      )
        td.table__avatar
          icon(name="user").avatar__icon
        td.table__user
          .user__name {{`${item.first_name} ${item.last_name}`}}
          .user__number {{item.phone_number}}
        td.table__info
          icon(name="info").info__icon
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  components: {
    Icon: () => import('components/Icon.vue'),
    AppHeader: () => import('components/AppHeader.vue'),
    AppMenu: () => import('components/AppMenu.vue'),
  },
  data() {
    return {
      search: ''
    }
  },
  computed: {
    ...mapState('contacts', { contacts: state => state.contacts }),
    filteredContacts() {
      return this.contacts.filter(contact => {
        return contact.first_name.trim().toLowerCase().includes(this.search.trim().toLowerCase())
      })
    }
  },
  watch: {
    '$route': 'fetchData'
  },
  methods: {
    ...mapActions('contacts', ['fecthContacts']),
    async fetchData() {
      try {
        await this.fecthContacts();
      } catch (e) {
        console.log(e);
      }
    },
  },
  async mounted() {
    this.fetchData();
  }
}
</script>

<style lang="postcss" scoped>
.contacts__search  {
  position: relative;
  z-index: 1;
  padding-bottom: 10px;
  border-bottom: 1px solid $border-color;
}

.contacts-input {
  width: 100%;
  padding: 5px 10px;
  border: 2px solid $border-color;
  outline: none;
  border-radius: 10px;
}

.contacts {
  padding: 10px 42px;
}

.contacts__table {
  position: relative;
  z-index: 1;
  border-collapse: collapse;
  width: 100%;
  font-weight: 600;
}

.table__tr {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid $border-color;
  padding: 10px 0;
  cursor: pointer;
  transition: opacity 0.25s ease;

  &:hover {
    opacity: 0.87;
  }
}

.table__user {
  flex: 1;
  margin-left: 20px;
}

.table__avatar {
  background: #e4e4e4;
  width: 50px;
  height: 50px;
  overflow: hidden;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.avatar__icon {
  width: 30px;
  height: 30px;
  fill: #767676;
}

.info__icon {
  width: 40px;
  height: 40px;
  fill: $blue-color;
}
</style>