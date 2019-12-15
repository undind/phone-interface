export default {
  namespaced: true,
  state: {
    contacts: []
  },
  mutations: {
    SET_CONTACTS: (state, contacts) => state.contacts = contacts
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
    }
  }
}