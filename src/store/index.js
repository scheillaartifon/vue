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
    storeUser(state, data) {
      state.user = data
      console.log('storeUser', data)
    }
  },
  actions: {
  }
})
