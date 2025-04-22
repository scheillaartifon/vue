<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>

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
  import HelloWorld from '@/components/HelloWorld.vue'
  import AppProducts from './../components/Products/AppProducts.vue';

  export default {
    name: 'HomeView',
    components: {
      HelloWorld,
      AppProducts
    },
    methods: {
      updateUser() {
        const newUser = {
          first_name: 'Daenerys',
          last_name: 'Targaryen',
          email: 'daenerys@email.com'
        }
        // this.$store.commit('storeUser', newUser)
        this.$store.dispatch('storeUser', newUser).then(()=>{
          console.log('Terminou com sucesso')
        })
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
