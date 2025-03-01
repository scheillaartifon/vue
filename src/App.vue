<template>
  <TheHeader v-show="showHeader" />

  <AulaQuatro v-if="aula4"/>
  <AulaCinco v-if="aula5"/>

  <img
    alt="Vue logo" 
    src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import TheHeader from './components/TheHeader'
import AulaQuatro from './components/AulaQuatro';
import AulaCinco from './components/AulaCinco';

export default {
  name: 'App',
  components: {
    HelloWorld,
    TheHeader,
    AulaQuatro,
    AulaCinco
  },
  data() {
    return {
      showHeader: true,
      aula4: false,
      aula5: true
    }
  } 
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
