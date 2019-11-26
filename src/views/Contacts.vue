<template lang="pug">
  .contacts
    table.contacts__table
      tr.table__tr(
        v-for="(user, index) in users"
        :key="index"
      )
        td.table__avatar
          icon(name="user").avatar__icon
        td.table__user
          .user__name {{user.name}}
          .user__number {{user.info}}
        td.table__info
          icon(name="info").info__icon
</template>

<script>
export default {
  components: {
    Icon: () => import('components/Icon.vue'),
  },
  data() {
    return {
      users: [
        {
          name: 'Sergey Antonov',
          info: '+7(978)000 65 72'
        },
        {
          name: 'Ivan Petrov',
          info: '+7(978)000 65 72'
        },
        {
          name: 'Egor Ivanov',
          info: '+7(978)000 65 72'
        },
        {
          name: 'Victor Nezhin',
          info: '+7(978)000 65 72'
        },
        {
          name: 'Tom Holland',
          info: '+7(978)000 65 72'
        },
      ]
    }
  },
}
</script>

<style lang="postcss" scoped>
.contacts {
  padding: 10px 42px;
}

.contacts__table {
  position: relative;
  z-index: 1;
  border-collapse: collapse;
  width: 100%;
  font-weight: 600;
}

.table__tr {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid $border-color;
  padding: 10px 0;
  cursor: pointer;
  transition: opacity 0.25s ease;

  &:hover {
    opacity: 0.87;
  }
}

.table__user {
  flex: 1;
  margin-left: 20px;
}

.table__avatar {
  background: #e4e4e4;
  width: 50px;
  height: 50px;
  overflow: hidden;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.avatar__icon {
  width: 30px;
  height: 30px;
  fill: #767676;
}

.info__icon {
  width: 40px;
  height: 40px;
  fill: $blue-color;
}
</style>