<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <!-- <router-link to="/usuarios/10">Usuário</router-link> | -->
    <router-link to="/lessons">Aulas</router-link>
  </nav>
  <router-view/>

  <button @click="updateUser">Atualizar Perfil</button> <br>
  {{ $store.state.user.first_name }} <br>
  {{ $store.state.user.last_name }} <br>
  {{ $store.state.user.email }}
</template>

<script>
  export default {
    data() { },
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
