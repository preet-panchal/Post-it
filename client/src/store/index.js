import { createStore } from 'vuex'

export default createStore({
  state() {
    return {isLoggedIn: false};
  },
  getters: {
    getisLoggedIn(state) {
      return state.isLoggedIn;
    }
  },
  mutations: {
    change (state) {
      state.isLoggedIn = !state.isLoggedIn;
    }
  },
  actions: {
  },
  modules: {
  }
})
