<template lang="pug">
  table.contacts__table
    tr.table__tr(
      @click="$router.push( {name: 'profile', params: {id: contact.contact_id}} )"
    )
      td.table__avatar
        icon(name="user").avatar__icon
      td.table__user
        .user__name {{`${contact.first_name} ${contact.last_name}`}}
        .user__number {{contact.phone_number}}
      td.table__info
        icon(name="info").info__icon
</template>

<script>
export default {
  components: {
    Icon: () => import('components/Icon.vue'),
  },
  props: {
    contact: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>

<style lang="postcss" scoped>
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