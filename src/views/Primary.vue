<template lang="pug">
  .background
    .header-container
      app-header
      .header__buttons
        button.header__button-back
          icon(name="back").header__button-icon
        button.header__button-back
          icon(name="save").header__button-icon.header__button-icon--save
    router-view
</template>

<script>
export default {
  components: {
    AppHeader: () => import('components/AppHeader.vue'),
    Icon: () => import('components/Icon.vue'),
  }
}
</script>

<style lang="postcss">
@import '../styles/main.pcss';

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
</style>