<template>
    <TheHeader v-show="showHeader" />
  
    <div class="card-class">
      <AulaQuatro v-if="aula4"/>
      <AulaCinco v-if="aula5"/>
      <LessonSix v-if="lesson6"/>
      <LessonSeven v-if="lesson7"/>
      <LessonEight v-if="lesson8"/>
      <LessonNine v-if="lesson9"/>
      <LessonTen v-if="lesson10"/>
      <LessonEleven v-if="lesson11"/>
      <LessonTwelve v-if="lesson12"/>
      <LessonThirteen v-if="lesson13"/>
      <LessonFourteen v-if="lesson14"/>
      <LessonFifteen v-if="lesson15" variant="danger">
        {{ "Seu formulário foi enviado com sucesso" }}
      </LessonFifteen>
      <LessonSixteen v-if="lesson16" variant="success" @close="onClose">
        {{ "Seu formulário foi enviado com sucesso" }}
      </LessonSixteen>
      <LessonSeventeen v-if="lesson17"/>
    </div>  
  </template>
  
  <script>
  import TheHeader from './../components/TheHeader'
  import AulaQuatro from './../components/AulaQuatro';
  import AulaCinco from './../components/AulaCinco';
  import LessonSix from './../components/LessonSix.vue';
  import LessonSeven from './../components/LessonSeven.vue';
  import LessonEight from './../components/LessonEight.vue';
  import LessonNine from './../components/LessonNine.vue';
  import LessonTen from './../components/LessonTen.vue';
  import LessonEleven from './../components/LessonEleven.vue';
  import LessonTwelve from './../components/LessonTwelve.vue';
  import LessonThirteen from './../components/LessonThirteen.vue';
  import LessonFourteen from './../components/LessonFourteen.vue';
  import LessonFifteen from './../components/LessonFifteen.vue';
  import LessonSixteen from './../components/LessonSixteen.vue';
  
  export default {
    name: 'App',
    components: {
        TheHeader,
        AulaQuatro,
        AulaCinco,
        LessonSix,
        LessonSeven,
        LessonEight,
        LessonNine,
        LessonTen,
        LessonEleven,
        LessonTwelve,
        LessonThirteen,
        LessonFourteen,
        LessonFifteen,
        LessonSixteen
    },
    data() {
      return {
        showHeader: true,
        helloWorld: true,
        aula4: false,
        aula5: false,
        lesson6: false,
        lesson7: false,
        lesson8: false,
        lesson9: false,
        lesson10: false,
        lesson11: false,
        lesson12: false,
        lesson13: false,
        lesson14: false,
        lesson15: false,
        lesson16: false,
        lesson17: true,
      }
    },
    methods: {
      onClose() {
        this.lesson16 = false
        console.log('on close')
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
  