<template lang="pug">
  .background
    .header-container
      app-header
      .header__buttons
        router-link(
          to="/"
        ).header__button-back
          icon(name="back").header__button-icon
        button(
          @click="updateOrCreateContact(contact)"
        ).header__button-back
          icon(name="save").header__button-icon.header__button-icon--save
    profile-edit(
      :contact="contact"
      :key="contact.contact_id"
      :loading="loading"
    )
    .history__charts
      canvas(
        ref="canvas"
      )
</template>

<script>
import { mapActions, mapState } from 'vuex';
import { Bar } from "vue-chartjs";

export default {
  components: {
    AppHeader: () => import('components/AppHeader.vue'),
    Icon: () => import('components/Icon.vue'),
    ProfileEdit: () => import('components/ProfileEdit.vue'),
  },
  extends: Bar,
  data() {
    return {
      contact: {
        type: Object,
        default: () => ({})
      },
      loading: false
    }
  },
  watch: {
    
  },
  methods: {
    ...mapActions('contacts', ['fetchContactById', 'updateContact', 'createContact']),
    async updateOrCreateContact(contact) {
      if (contact.contact_id) {
        return await this.updateContact(contact);
      }
      this.contact = await this.createContact(contact);
    }
  },
  async mounted() {
    const id = this.$route.params.id;
    if (id !== undefined) {
      try {
        this.contact = await this.fetchContactById(id);
      } catch (e) {
        throw new Error(e)
      } finally {
        this.loading = true;
      }
    } else {
      this.contact = this.$route.params.contact;
    }

    this.renderChart(
      {
        labels: this.contact.histories.map(item => item.created_at.slice(0, 10)),
        datasets: [
          {
            label: "",
            backgroundColor: "#000",
            data: []
          }
        ]
      },
      { responsive: true, maintainAspectRatio: false }
    );
  },
}
</script>

<style lang="postcss" scoped>
.background {
  width: 425px;
  height: 850px;
  margin: 50px auto;
  border-radius: 65px;
  overflow: hidden;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    background: url('../images/content/background.png') center center / cover no-repeat;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
}

.header__buttons {
  position: relative;
  z-index: 1;
  padding: 0 38px 15px 46px;
  display: flex;
  justify-content: space-between;
}

.header__button-back {
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  border: none;
  outline: none;
  padding: 0;
}

.header__button-icon {
  width: 30px;
  height: 30px;
}

.header__button-icon--save {
  width: 40px;
  height: 40px;
}

.history__charts {
  position: absolute;
  bottom: 85px;
  width: 85%;
  height: 220px;
  left: 50%;
  transform: translateX(-50%);
}
</style>