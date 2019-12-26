<template lang="pug">
  button(
    @click="$router.replace('/dialpad')"
  ).phone__button
    icon(name="dial").button__dial
</template>

<script>
export default {
  components: {
    Icon: () => import('components/Icon.vue'),
  }
}
</script>

<style lang="postcss" scoped>
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