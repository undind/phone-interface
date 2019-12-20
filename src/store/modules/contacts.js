export default {
  namespaced: true,
  state: {
    contacts: []
  },
  mutations: {
    SET_CONTACTS: (state, contacts) => state.contacts = contacts,
    // GET_CONTACT_BY_ID: (state, contactId) => {
    //   state.contacts = state.contacts.find(item => {
    //     console.log(item)
    //     item.contact_id === contactId
    //   })
    // }
  },
  actions: {
    async fecthContacts({ commit }) {
      try {
        const response = await this.$axios.get('/contacts');
        commit('SET_CONTACTS', response.data);
        return response;
      } catch (e) {
        console.log(e)
      }
    },
    async fetchContactById({ commit }, contactId) {
      try {
        const response = await this.$axios.get(`/contacts/${contactId}`);
        return response.data;
      } catch (e) {
        throw new Error(e)
      }
    }
  }
}