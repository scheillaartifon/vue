<template>
    <TheHeader v-show="showHeader" />
  
    <div class="card-class">
      <LessonFour v-if="lesson4"/>
      <LessonFive v-if="lesson5"/>
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
      <LessonTwentyFour v-if="lesson24"/>
    </div>  
  </template>
  
  <script>
  import TheHeader from './../components/TheHeader.vue'
  import LessonFour from './../components/LessonFour.vue';
  import LessonFive from './../components/LessonFive.vue';
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
  import LessonTwentyFour from './../components/LessonTwentyFour.vue';
  
  export default {
    name: 'App',
    components: {
        TheHeader,
        LessonFour,
        LessonFive,
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
        LessonSixteen,
        LessonTwentyFour
    },
    data() {
      return {
        showHeader: true,
        helloWorld: false,
        lesson4: false,
        lesson5: false,
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
        lesson17: false,
        lesson24: true
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
  