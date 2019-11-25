<template lang="pug">
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
    Icon: () => import('components/Icon.vue'),
  }
}
</script>

<style lang="postcss" scoped>
.phone__display {
  display: flex;
  justify-content: space-between;
  padding: 33px 38px 33px 46px;
}

.phone__date {
  font-size: 14px;
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