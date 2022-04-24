import { createStore } from 'vuex'

export default createStore({
  state() {
    return {isLoggedIn: false, testing: 0 };
  },
  getters: {
    getisLoggedIn(state) {
      return state.isLoggedIn;
    }
  },
  mutations: {
    change (state) {
      state.isLoggedIn = !state.isLoggedIn;
    },
    upDate() {
      this.testing++;
      console.log("HEHEH")
    }
  },
  actions: {
  },
  modules: {
  }
})
