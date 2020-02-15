<template lang="pug">
  preloader(v-if="isLoading")
  .history(v-else)
    table.history__table
      tr.table__tr(
        v-for="(story, i) in histories"
        :key="i"
        draggable="true"
        @dragstart="dragStart(i, $event)"
        @dragover.prevent 
        @drop="dragFinish(i, $event)"
      )
        td.table__hamburger
          .hamburger.hamburger--stand
            .hamburger-box
              .hamburger-inner
        td.table__user
          .user__name {{story.contacts.first_name}} {{story.contacts.last_name}}
          .user__number {{story.contacts.phone_number}}
        td.table__time {{story.created_at | date('date')}}
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  components: {
    AppHeader: () => import('components/AppHeader.vue'),
    AppMenu: () => import('components/AppMenu.vue'),
    Preloader: () => import("components/Preloader.vue")
  },
  data() {
    return {
      dragging: -1,
      isLoading: false
    }
  },
  computed: {
    ...mapState('histories', { histories: state => state.histories })
  },
  methods: {
    ...mapActions('histories', ['fethcHistories']),
    async fetchData() {
      this.isLoading = true;
      try {
        await this.fethcHistories();
      } catch (e) {
        console.log(e)
      } finally {
        this.isLoading = false;
      }
    },
    removeItemAt(index) {
      this.histories.splice(index, 1);
    },
    dragStart(which, ev) {
      ev.dataTransfer.setData('Text', this.id);
      ev.dataTransfer.dropEffect = 'move'
      this.dragging = which;
    },
    dragFinish(to, ev) {
      this.moveItem(this.dragging, to);
    },
    moveItem(from, to) {
      if (to === -1) {
        this.removeItemAt(from);
      } else {
        this.histories.splice(to, 0, this.histories.splice(from, 1)[0]);
      }
    }
  },
  async mounted() {
    this.fetchData();
  }
}
</script>

<style lang="postcss" scoped>
.history {
  padding: 10px 42px;
  overflow: auto;
  height: 567px;
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