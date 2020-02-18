import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import user from './modules/user'
import app from './modules/app'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    locale: 0,
    cartList: [],
  },
  mutations: mutations,
  actions: {
    //
  },
  modules: {
    user,
    app
  }
})
