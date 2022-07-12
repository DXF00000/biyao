import { createStore } from 'vuex'

export default createStore({
  state: {
    token: sessionStorage.token || "",
    name: sessionStorage.name ? "欢迎" + sessionStorage.name :  "",
  },
  getters: {
  },
  mutations: {
    settoken(a, b) {
      a.token = b
    },
    setname(a, b) {
      a.name = "欢迎" + b
    },
  },
  actions: {
  },
  modules: {
  }
})
