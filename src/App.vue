<template lang="pug">
    .background
      .header-container
        app-header
        app-menu
        .header__search(v-if="$route.path === '/'")
          input.header-input
      router-view
      button.phone__button
        icon(name="dial").button__dial
</template>

<script>
export default {
  components: {
    AppHeader: () => import('components/AppHeader.vue'),
    AppMenu: () => import('components/AppMenu.vue'),
    Contacts: () => import('@/views/Contacts.vue'),
    Icon: () => import('components/Icon.vue'),
  },
}
</script>

<style lang="postcss">
@import './styles/main.pcss';

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
    background: url('./images/content/background.png') center center / cover no-repeat;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
}

.header__search  {
  padding: 0 42px 20px;
  position: relative;
  z-index: 1;
}

.header-input {
  width: 100%;
  padding: 5px 10px;
  border: 2px solid $border-color;
  outline: none;
  border-radius: 10px;
}

.phone__button {
  position: absolute;
  z-index: 1;
  width: 70px;
  height: 70px;
  bottom: 75px;
  right: 75px;
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

.button__dial {
  width: 30px;
  height: 30px;
  fill: aliceblue;
}
</style>