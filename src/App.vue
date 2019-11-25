<template lang="pug">
  .container
    .background
      .phone__display
        .phone__date 4:51 PM
        .phone__icons
          icon(name="signal").phone__icon
          icon(name="wifi").phone__icon
          icon(name="battery").phone__icon
</template>

<script>
export default {
  components: {
    Icon: () => import('components/Icon.vue')
  }
}
</script>

<style lang="postcss">
@import './styles/main.pcss';

.background {
  background: url('./images/content/background.png') center center / cover no-repeat;
  width: 425px;
  height: 850px;
  margin: 50px auto;
  border-radius: 65px;
  overflow: hidden;
}

.phone__display {
  display: flex;
  justify-content: space-between;
  padding: 33px 42px;
}

.phone__date {
  font-weight: 700;
}

.phone__icons {
  display: flex;
  align-items: center;
}

.phone__icon {
  width: 17px;
  height: 17px;
  margin-left: 7px;
}
</style>