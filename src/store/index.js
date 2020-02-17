import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    locale: 0,
    cartList: [],
  },
  mutations: mutations,
})

export default store;

// import Vue from 'vue'
// import Vuex from 'vuex'

// import user from './module/user'
// import app from './module/app'

// Vue.use(Vuex)

// export default new Vuex.Store({
//   state: {
//     //
//   },
//   mutations: {
//     //
//   },
//   actions: {
//     //
//   },
//   modules: {
//     user,
//     app
//   }
// })
