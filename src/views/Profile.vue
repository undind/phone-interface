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
          @click="updateCurContact(contact)"
        ).header__button-back
          icon(name="save").header__button-icon.header__button-icon--save
    .edit
      .edit__avatar
        img(src="@/images/content/user.png").edit__img
      BasicInput(
        placeholder="First Name"
        v-model="contact.first_name"
      )
      BasicInput(
        placeholder="Last Name"
        v-model="contact.last_name"
      )
      BasicInput(
        placeholder="Phone Number"
        v-model="contact.phone_number"
      )
      BasicInput(
        placeholder="Date of Birth"
        v-model="contact.date_birth"
      )
      .edit__chars
      button.edit__button
        icon(name="call").edit__icon
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  components: {
    AppHeader: () => import('components/AppHeader.vue'),
    Icon: () => import('components/Icon.vue'),
    BasicInput: () => import('components/BasicInput.vue'),
  },
  data() {
    return {
      contact: () =>({})
    }
  },
  methods: {
    ...mapActions('contacts', ['fetchContactById', 'updateContact']),
    async updateCurContact(contact) {
      await this.updateContact(contact);
    }
  },
  async mounted() {
    const id = this.$route.params.id;
    this.contact = await this.fetchContactById(id);
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

.edit {
  position: relative;
  z-index: 1;
  padding: 20px 38px 15px 46px;
  height: 100%;
}

.edit__avatar {
  width: 100%;
  height: 170px;
  background: $border-color;
  border: 2px solid #000;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
}

.edit__img {
  width: 30%;
}

.edit__button {
  position: absolute;
  bottom: 180px;
  left: 50%;
  width: 70px;
  height: 70px;
  transform: translateX(-50%);
  border-radius: 50%;
  background: orange;
  outline: none;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  transition: all 0.25s ease;

  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
  }
}

.edit__icon {
  width: 30px;
  height: 30px;
}
</style>