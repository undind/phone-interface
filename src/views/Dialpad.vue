<template lang="pug">
  .dialpad
    .dialpad__history
      table.dialpad__table(v-if="!isTrue")
        tr.dialpad__tr
          td.dialpad__info
            .info__name Sergey Antonov
            .info__number +7(978)731-72-54
          td.dialpad__date
            .date 2019-08-08
        tr.dialpad__tr
          td.dialpad__info
            .info__name Sergey Antonov
            .info__number +7(978)731-72-54
          td.dialpad__date
            .date 2019-08-08
        tr.dialpad__tr
          td.dialpad__info
            .info__name Sergey Antonov
            .info__number +7(978)731-72-54
          td.dialpad__date
            .date 2019-08-08
        tr.dialpad__tr
          td.dialpad__info
            .info__name Sergey Antonov
            .info__number +7(978)731-72-54
          td.dialpad__date
            .date 2019-08-08
    .dialpad__input
      input.input__number
    ul.dialpad__buttons
      li.dialpad__btn
        button.dialpad__btn-num 1
      li.dialpad__btn
        button.dialpad__btn-num 2
      li.dialpad__btn
        button.dialpad__btn-num 3
      li.dialpad__btn
        button.dialpad__btn-num 4
      li.dialpad__btn
        button.dialpad__btn-num 5
      li.dialpad__btn
        button.dialpad__btn-num 6
      li.dialpad__btn
        button.dialpad__btn-num 7
      li.dialpad__btn
        button.dialpad__btn-num 8
      li.dialpad__btn
        button.dialpad__btn-num 9
      li.dialpad__btn
        button.dialpad__btn-num *
      li.dialpad__btn
        button.dialpad__btn-num 0
      li.dialpad__btn
        button.dialpad__btn-num #
    button.dialpad__call
      icon(name="call").dialpad__call-icon
</template>

<script>
export default {
  components: {
    Icon: () => import('components/Icon.vue'),
  },
  data() {
    return {
      isTrue: false
    }
  },
}
</script>

<style lang="postcss" scoped>
.dialpad {
  padding: 10px 50px;
  position: relative;
  z-index: 1;
  height: 100%;
}

.dialpad__history {
  margin-bottom: 20px;
  height: 97px;
  overflow: auto;
}

.dialpad__table {
  border-collapse: collapse;
  border: 1px solid #000;
  width: 100%;
}

.dialpad__tr {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #000;

  &:last-child {
    border-bottom: none;
  }
}

.input__number {
  width: 100%;
  border: 0;
  border-bottom: 2px solid #000;
  padding: 10px 15px;
  outline: none;
  font-size: 30px;
}

.dialpad__buttons {
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.dialpad__btn {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 33.333333%;
  border-radius: 50%;
  border: none;
  margin-bottom: 20px;
}

.dialpad__btn-num {
  border-radius: 50%;
  background-color: aquamarine;
  width: 70px;
  height: 70px;
  font-size: 25px;
  color: #000;
}

.dialpad__call {
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

.dialpad__call-icon {
  width: 30px;
  height: 30px;
}
</style>