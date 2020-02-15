<template lang="pug">
  preloader(v-if="isLoading")
  .contacts(v-else)
    .contacts__search(v-if="$route.path === '/'")
      input.contacts-input(v-model="search")
    contacts-table(
      v-for="item in filteredContacts"
      :key="item.contact_id"
      :contact="item"
    )
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
    components: {
        ContactsTable: () => import("components/ContactsTable.vue"),
        Preloader: () => import("components/Preloader.vue")
    },
    data() {
        return {
            search: "",
            isLoading: false
        };
    },
    computed: {
        ...mapState("contacts", { contacts: state => state.contacts }),
        filteredContacts() {
            return this.contacts.filter(contact => {
                if (!isNaN(this.search)) {
                    return String(contact.phone_number)
                        .trim()
                        .toLowerCase()
                        .includes(this.search.trim().toLowerCase());
                }

                return (contact.first_name + contact.last_name)
                    .trim()
                    .toLowerCase()
                    .includes(this.search.trim().toLowerCase());
            });
        }
    },
    watch: {
        $route: "fetchData"
    },
    methods: {
        ...mapActions("contacts", ["fecthContacts"]),
        async fetchData() {
            this.isLoading = true;
            try {
                await this.fecthContacts();
            } catch (e) {
                console.log(e);
            } finally {
                this.isLoading = false;
            }
        }
    },
    async mounted() {
        await this.fetchData();
    }
};
</script>

<style lang="postcss" scoped>
.contacts__search {
    position: relative;
    z-index: 1;
    padding-bottom: 10px;
    border-bottom: 1px solid $border-color;
}

.contacts-input {
    width: 100%;
    padding: 5px 10px;
    border: 2px solid $border-color;
    outline: none;
    border-radius: 10px;
}

.contacts {
    padding: 10px 42px;
}
</style>
