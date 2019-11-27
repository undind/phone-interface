<template lang="pug">
  .contacts
    .contacts__search(v-if="$route.path === '/'")
      input.contacts-input(v-model="search")
    table.contacts__table
      tr.table__tr(
        v-for="(user, index) in filteredUsers"
        :key="index"
      )
        td.table__avatar
          icon(name="user").avatar__icon
        td.table__user
          .user__name {{user.name}}
          .user__number {{user.number}}
        td.table__info
          icon(name="info").info__icon
</template>

<script>
class User {
  constructor(name, number) {
    this.name = name;
    this.number = number;
  }
}

export default {
  components: {
    Icon: () => import('components/Icon.vue'),
    AppHeader: () => import('components/AppHeader.vue'),
    AppMenu: () => import('components/AppMenu.vue'),
  },
  data() {
    return {
      users: [
        new User(
          'Sergey Antonov',
          '+7(978)000 65 72'
        ),
        new User(
          'Ivan Petrov',
          '+7(978)000 65 72'
        ),
        new User(
          'Egor Ivanov',
          '+7(978)000 65 72'
        ),
        new User(
          'Victor Nezhin',
          '+7(978)000 65 72'
        ),
        new User(
          'Tom Holland',
          '+7(978)000 65 72'
        ),
      ],
      search: ''
    }
  },
  computed: {
    filteredUsers() {
      return this.users.filter(user => {
        return user.name.toLowerCase().includes(this.search.toLowerCase())
      })
    }
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