import { createStore } from 'vuex'

export default createStore({
  state: {
    user: {
      first_name: 'Jhon',
      last_name: 'snow',
      email: 'jhonsnow@email.com'
    },
    products: [
      {
        id: 1,
        name: 'Bola',
        price: 100
      },
      {
        id: 2,
        name: 'Chuteira',
        price: 200
      },
      {
        id: 3,
        name: 'Meião',
        price: 50
      }
    ],
    cart: []
  },
  getters: {
  },
  mutations: {
    storeUser(state, data) {
      state.user = data
      console.log('storeUser', data)
    },
    addProduct(state, data) {
      state.cart.push(data)
    },
    removeProduct(state, id){
      const index = state.cart.findIndex(obj => obj.id === id)
      state.cart.splice(index, 1)
    }
  },
  actions: {
  }
})
