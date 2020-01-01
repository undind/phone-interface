<template lang="pug">
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
      type="date"
    )
    .edit__chars
    button(
      @click="goToDialpad(contact)"
    ).edit__button
      icon(name="call").edit__icon
</template>

<script>
export default {
  components: {
    Icon: () => import('components/Icon.vue'),
    BasicInput: () => import('components/BasicInput.vue'),
  },
  props: {
    contact: {
      type: Object,
      default: () =>({})
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    goToDialpad(contact) {
      this.$router.push({name: 'dialpad', params: { contact }})
    }
  },
}
</script>

<style lang="postcss" scoped>
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