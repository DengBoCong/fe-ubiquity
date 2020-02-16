import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    locale: 0,
    cartList: [],
  },
  mutations: {
    addCart(state, data) {
      state.cartList.push(data);
    }
  }
})

export default store;