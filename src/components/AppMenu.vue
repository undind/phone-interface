<template lang="pug">
  .phone__nav
    ul.nav__links
      router-link(to="/" exact-active-class="nav__item-active").nav__item Contacts
      router-link(to="/history" exact-active-class="nav__item-active").nav__item History
</template>

<style lang="postcss" scoped>
  .phone__nav {
    padding: 0 42px 20px;
  }

  .nav__links {
    display: flex;
  }

  .nav__item {
    font-size: 24px;
    font-weight: 600;
    margin-right: 20px;
    cursor: pointer;
    position: relative;
    z-index: 1;

    &-active {
      text-decoration: underline;
    }

    &:hover {
      text-decoration: underline;
    }

    &:last-child {
      margin-right: 0;
    }
  }
</style>