const mutations = {
  addCart(state, data) {
    state.cartList.push(data);
  },
  setLocale(state, num) {
    state.locale = num;
  }
}

export default mutations 