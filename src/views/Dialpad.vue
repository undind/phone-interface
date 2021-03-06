<template lang="pug">
  .background
    .header-container
      app-header
      .header__buttons
        button(
          @click="goBack(contact.contact_id)"
        ).header__button-back
          icon(name="back").header__button-icon
        button(
          @click="createNewContact(contact)"
        ).header__button-back
          icon(name="save").header__button-icon.header__button-icon--save
    preloader(v-if="isLoading")
    .dialpad(v-else)
      .dialpad__history
        table.dialpad__table(v-if="isTrue")
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
        BasicInput(
          v-model="contact.phone_number"
          size="large"
          @keypress="isNumber($event)"
        )
      ul.dialpad__buttons
        li.dialpad__btn
          button(
            value="1"
            @click="press"
          ).dialpad__btn-num 1
        li.dialpad__btn
          button(
            value="2"
            @click="press"
          ).dialpad__btn-num 2
        li.dialpad__btn
          button(
            value="3"
            @click="press"
          ).dialpad__btn-num 3
        li.dialpad__btn
          button(
            value="4"
            @click="press"
          ).dialpad__btn-num 4
        li.dialpad__btn
          button(
            value="5"
            @click="press"
          ).dialpad__btn-num 5
        li.dialpad__btn
          button(
            value="6"
            @click="press"
          ).dialpad__btn-num 6
        li.dialpad__btn
          button(
            value="7"
            @click="press"
          ).dialpad__btn-num 7
        li.dialpad__btn
          button(
            value="8"
            @click="press"
          ).dialpad__btn-num 8
        li.dialpad__btn
          button(
            value="9"
            @click="press"
          ).dialpad__btn-num 9
        li.dialpad__btn
          button(
            value="*"
            @click="press"
          ).dialpad__btn-num *
        li.dialpad__btn
          button(
            value="0"
            @dblclick="press"
            @click="press"
          ).dialpad__btn-num 0
        li.dialpad__btn
          button(
            value="#"
            @click="press"
          ).dialpad__btn-num #
      button(
        @click="createNewStory(contact)"
      ).dialpad__call
        icon(name="call").dialpad__call-icon
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  components: {
    Icon: () => import("components/Icon.vue"),
    AppHeader: () => import("components/AppHeader.vue"),
    BasicInput: () => import("components/BasicInput.vue"),
    Preloader: () => import("components/Preloader.vue")
  },
  data() {
    return {
      contact: {
        type: Object,
        default: () => ({}),
        phone_number: ""
      },
      isTrue: false,
      value: "",
      isLoading: false
    };
  },
  computed: {
    ...mapState("histories", { histories: state => state.histories })
  },
  methods: {
    ...mapActions("histories", ["createHistory", "fethcHistories"]),
    goBack(id) {
      let lastView = localStorage.getItem("LAST_PAGE");
      if (lastView === "null" && id === undefined) {
        return this.$router.replace("/");
      }
      this.$router.replace({ name: `${lastView}`, params: { id: id } });
    },
    createNewContact(contact) {
      this.$router.replace({ name: "profile", params: { contact: contact } });
    },
    async createNewStory(contact) {
      const id = contact.contact_id;
      if (!id) return this.$router.replace({ name: "profile", params: { contact: contact } });

      this.isLoading = true;
      try {
        await this.createHistory(id);
      } catch (e) {
        console.log("Need id");
        throw new Error(e);
      } finally {
        this.isLoading = false;
      }
    },
    async fethcAllHistories() {
      this.isLoading = true;
      try {
        await this.fethcHistories();
      } catch (e) {
        throw new Error(e);
      } finally {
        this.isLoading = false;
      }
    },
    press(event) {
      event.preventDefault()
      this.contact.phone_number += event.target.value;
    },
    isNumber(evt) {
      evt = evt ? evt : window.event;
      let charCode = evt.which ? evt.which : evt.keyCode;
      if (charCode > 31 && (charCode < 48 || charCode > 57) && charCode !== 46) {
        evt.preventDefault();
      } else {
        return true;
      }
    }
  },
  async mounted() {
    await this.fethcAllHistories();
    if (this.$route.params.contact !== undefined) {
      this.contact = this.$route.params.contact;
    }
  }
};
</script>

<style lang="postcss" scoped>
.background {
  width: 425px;
  height: 850px;
  margin: 50px auto;
  border-radius: 65px;
  overflow: hidden;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    background: url("../images/content/background.png") center center / cover no-repeat;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
}

.header__buttons {
  position: relative;
  z-index: 1;
  padding: 0 38px 15px 46px;
  display: flex;
  justify-content: space-between;
}

.header__button-back {
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  border: none;
  outline: none;
  padding: 0;
}

.header__button-icon {
  width: 30px;
  height: 30px;
}

.header__button-icon--save {
  width: 40px;
  height: 40px;
}

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
