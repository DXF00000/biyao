import { createStore } from 'vuex'

export default createStore({
  state: {
    token: "",
    name: ""
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
