<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <!-- <router-link to="/usuarios/10">Usuário</router-link> | -->
    <router-link to="/lessons">Aulas</router-link>
  </nav>

  {{ $store.getters.total }}
  
  <AppProducts />
  <br><br><br><br>
  
  <pre>{{ $store.state.cart }}</pre>

  <br><br><br><br>
  <button @click="updateUser">Atualizar Perfil</button> <br>
  {{ $store.state.user.first_name }} <br>
  {{ $store.state.user.last_name }} <br>
  {{ $store.state.user.email }}
</template>

<script>
import AppProducts from './components/Products/AppProducts.vue';

  export default {
    components: {
      AppProducts
    },
    methods: {
      updateUser() {
        const newUser = {
          first_name: 'Daenerys',
          last_name: 'Targaryen',
          email: 'daenerys@email.com'
        }
        this.$store.commit('storeUser', newUser)
      }
    }
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
