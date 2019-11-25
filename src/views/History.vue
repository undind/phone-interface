<template lang="pug">
  .history
    table.history__table
      tr.table__tr
        td.table__hamburger
          .hamburger.hamburger--stand
            .hamburger-box
              .hamburger-inner
        td.table__user
          .user__name Sergey Antonov
          .user__number +7(978)000 65 72
        td.table__time Today at 10:45 PM
      tr.table__tr
        td.table__hamburger
          .hamburger.hamburger--stand
            .hamburger-box
              .hamburger-inner
        td.table__user
          .user__name Sergey Antonov
          .user__number +7(978)000 65 72
        td.table__time Today at 10:45 PM
      tr.table__tr
        td.table__hamburger
          .hamburger.hamburger--stand
            .hamburger-box
              .hamburger-inner
        td.table__user
          .user__name Sergey Antonov
          .user__number +7(978)000 65 72
        td.table__time 21 of April 2019
</template>

<style lang="postcss" scoped>
.history {
  padding: 10px 42px;
}

.history__table {
  position: relative;
  z-index: 1;
  width: 100%;
  border-collapse: collapse;
  font-weight: 600;
}

.table__tr {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid $border-color;
  cursor: pointer;
  transition: opacity 0.25s ease;
  padding: 10px 0;

  &:hover {
    opacity: 0.87;
  }
}

.hamburger {
  padding: 10px 10px;
  cursor: move;
  border: 0;
  margin: 0;
  overflow: visible;
  z-index: 99; 
}

.hamburger-box {
  width: 30px;
  height: 20px;
  display: inline-block;
  position: relative; 
}

.hamburger-inner {
  display: block;
  top: 50%;
  margin-top: -2px; 
}

.hamburger-inner, .hamburger-inner::before, .hamburger-inner::after {
  width: 30px;
  height: 4px;
  background-color: $text-color;
  border-radius: 4px;
  position: absolute;
  transition-property: transform;
  transition-duration: 0.15s;
  transition-timing-function: ease; 
}

.hamburger-inner::before, .hamburger-inner::after {
  content: "";
  display: block; 
}

.hamburger-inner::before {
  top: -8px; 
}

.hamburger-inner::after {
  bottom: -8px;
}

.table__user {
  width: 85%;
}

.table__time {
  text-align: right;
}
</style>