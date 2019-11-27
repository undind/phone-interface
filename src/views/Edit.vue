<template lang="pug">
  .edit
    .edit__avatar
      img.edit__img
    input.edit__input
    input.edit__input
    input.edit__input
    input.edit__input
    .edit__chars
    button.edit__button
      icon(name="call").edit__icon
</template>

<script>
export default {
  components: {
    Icon: () => import('components/Icon.vue'),
  }
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