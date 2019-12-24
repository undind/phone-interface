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
    GET_CONTACT_BY_ID: (state, contactId) => {
      state.contacts = state.contacts.filter(item => {
        return item.contact_id === contactId
      })
    }
  },
  actions: {
    async fecthContacts({ commit }) {
      try {
        const response = await this.$axios.get('/contacts');
        commit('SET_CONTACTS', response.data);
        return response;
      } catch (e) {
        throw new Error(e)
      }
    },
    async fetchContactById({ commit }, contactId) {
      try {
        const response = await this.$axios.get(`/contacts/${contactId}`);
        commit('GET_CONTACT_BY_ID', response.data.contact_id);
        return response.data;
      } catch (e) {
        throw new Error(e)
      }
    },
    async updateContact({ commit }, { contact_id, date_birth, first_name, last_name, phone_number }) {
      if (typeof phone_number === 'string') phone_number = Number(phone_number);

      try {
        const response = await this.$axios.put(`/contacts/${contact_id}`, { date_birth, first_name, last_name, phone_number });
        commit('EDIT_CONTACT', response.data);
        return response;
      } catch (e) {
        throw new Error(e)
      }
    }
  }
}