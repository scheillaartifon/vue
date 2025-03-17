import { createStore } from 'vuex'

export default createStore({
  state: {
    user: {
      first_name: 'Jhon',
      last_name: 'snow',
      email: 'jhonsnow@email.com'
    },
    products: [],
    cart: []
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  }
})
