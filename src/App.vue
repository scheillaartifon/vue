<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <!-- <router-link to="/usuarios/10">Usuário</router-link> | -->
    <router-link to="/lessons">Aulas</router-link>
  </nav>
  <router-view/>

  {{ $store.state.user.first_name }}
</template>

<script>
  export default {
    data() { },
    created() {
      console.log(this.$store.state.user)
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
