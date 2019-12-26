export default {
  namespaced: true,
  state: {
    histories: []
  },
  mutations: {
    SET_HISTORIES: (state, histories) => state.histories = histories
  },
  actions: {
    async fethcHistories({ commit }) {
      try {
        const response = await this.$axios.get('/histories');
        commit('SET_HISTORIES', response.data)
        return response;
      } catch (e) {
        throw new Error(e);
      }
    },
    async createHistory({ commit }, contact_id){
      const tzoffset = (new Date()).getTimezoneOffset() * 60000;
      const localISOTime = (new Date(Date.now() - tzoffset)).toISOString().slice(0, -1);

      try {
        const response = await this.$axios.post(`/contacts/${contact_id}/histories`, { created_at: localISOTime })
        return response;
      } catch (e) {
        throw new Error(e);
      }
    }
  }
}