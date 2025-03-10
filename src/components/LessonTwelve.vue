<!-- Fases do ciclo de vida dos componentes vue.js
1. Criação
2. Montagem
3. Atualização 
4. Desmontagem -->

<template>
    <h5>AULA 12 - Ciclo de Vida (life cycle)</h5>

    <TheHeader v-if="showHeader"/>
    <div>
        <h5>Hello World</h5>
        {{ name }} <br>

        <input v-model="name" type="text">

        <button @click="showHeader = !showHeader">
            Ativar e desativar Header
        </button>
    </div>
</template>

<script>
import TheHeader from './../components/TheHeader'

export default{
    components: { TheHeader },
    data() {
        return{
            name: 'Jhon Snow',
            showHeader: true
        }
    },
    // HOOKS

    // Usar para debugar
    // beforeUpdate(){
    //     console.log('beforeUpdate', this.name)
    // },
    // updated(){
    //     console.log('updated', this.name)
    // },

    // Outros
    // beforeCreate(){
    //     console.log('beforeCreate')
    //     console.log('Estado: ', this.name)
    //     console.log('DOM: ', this.$el)
    // },
    // created(){
    //     console.log('created')
    //     console.log('Estado: ', this.name)
    //     console.log('DOM: ', this.$el)
    // },
    // beforeMount(){
    //     console.log('beforeMount')
    //     console.log('Estado: ', this.name)
    //     console.log('DOM: ', this.$el)
    // },
    watch: { },
    computed: { },
    methods: { }
}
</script>

<style></style>
