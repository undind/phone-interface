<template lang="pug">
  .background
    .header-container
      app-header
      app-menu
    router-view
    numpad-button
</template>

<script>
export default {
  components: {
    AppHeader: () => import('components/AppHeader.vue'),
    AppMenu: () => import('components/AppMenu.vue'),
    Icon: () => import('components/Icon.vue'),
    NumpadButton: () => import('components/NumpadButton.vue'),
  },
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
</style>