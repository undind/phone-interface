<template lang="pug">
  .edit
    .edit__avatar
      img(src="@/images/content/user.png").edit__img
    input(
      placeholder="First Name"
      ).edit__input
    input(
      placeholder="Last Name"
      ).edit__input
    input(
      placeholder="Phone Number"
      ).edit__input
    input(
      placeholder="Date of Birth"
      ).edit__input
    .edit__chars
    button.edit__button
      icon(name="call").edit__icon
</template>

<script>
import { mapActions } from 'vuex';

export default {
  components: {
    AppHeader: () => import('components/AppHeader.vue'),
    Icon: () => import('components/Icon.vue'),
  },
  data() {
    return {
      contact: () =>({})
    }
  },
  methods: {
    ...mapActions('contacts', ['fetchContactById'])
  },
  async mounted() {
    const id = this.$route.query.item.contact_id;
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
}

.edit__img {
  width: 30%;
}

.edit__input {
  width: 100%;
  margin-bottom: 20px;
  outline: none;
  padding: 7px;
  border: 2px solid #000;

  &:first-of-type {
    margin-top: 20px;
  }
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