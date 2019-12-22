export default {
  namespaced: true,
  state: {
    contacts: []
  },
  mutations: {
    SET_CONTACTS: (state, contacts) => state.contacts = contacts,
    EDIT_CONTACT: (state, editContact) => {
      state.contacts = state.contacts.map(contact => {
        return contact.contact_id === editContact.contact_id ? editContact : contact;
      })
    },
    // GET_CONTACT_BY_ID: (state, contactId) => {
    //   state.contacts = state.contacts.find(item => {
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
    },
    async updateContact({ commit }, contact) {
      const data = Object.assign({}, contact);
      delete data.created_at;

      try {
        const response = await this.$axios.put(`/contacts/${contact.contact_id}`, data);
        commit('EDIT_CONTACT', response.data);
        return response;
      } catch (e) {
        throw new Error(e)
      }
    }
  }
}