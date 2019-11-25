<template lang="pug">
  .phone__nav
    ul.nav__links
      li.nav__item Contacts
      li.nav__item History
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

    &:hover {
      text-decoration: underline;
    }

    &:last-child {
      margin-right: 0;
    }
  }
</style>