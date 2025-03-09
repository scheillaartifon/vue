<template>
  <TheHeader v-show="showHeader" />

  <div class="card-class">
    <AulaQuatro v-if="aula4"/>
    <AulaCinco v-if="aula5"/>
    <LessonSix v-if="lesson6"/>
    <LessonSeven v-if="lesson7"/>
    <LessonEight v-if="lesson8"/>
    <LessonNine v-if="lesson9"/>
  </div>

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
import LessonSix from './components/LessonSix.vue';
import LessonSeven from './components/LessonSeven.vue';
import LessonEight from './components/LessonEight.vue';
import LessonNine from './components/LessonNine.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    TheHeader,
    AulaQuatro,
    AulaCinco,
    LessonSix,
    LessonSeven,
    LessonEight,
    LessonNine
  },
  data() {
    return {
      showHeader: false,
      aula4: false,
      aula5: false,
      lesson6: false,
      lesson7: false,
      lesson8: false,
      lesson9: true
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
  margin-top: 60px;
}
.card-class{
  text-align: start;
}
</style>
