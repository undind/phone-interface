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
        console.log(e)
      }
    }
  }
}