<!-- Site que peguei o JSON -->
<!-- https://jsonplaceholder.typicode.com -->

<template>
    <h5>AULA 9 - Eventos</h5>
    
    <!-- Executa só uma vez @click.once="onClick" -->
    <button @click="onClick">Click Button</button><br>

    <div @mouseover="onMouseOver" @mouseout="onMouseOut">Mouse Over</div>

    <!-- Não direcionar para o google @submit.prevent -->
    <form action="https://google.com" @submit="onSubmit">
        <!-- Só envia o que foi digitado no teclado quando apertado enter @keyup.enter -->
        <input type="text" @keyup="onKeyUp">
        <button type="submit">Enviar</button>
    </form>
</template>

<script>
export default{
    data() {
        return{
        }
    },
    methods: {
        onClick($evt) {
            console.log('Click', $evt)
        },
        onMouseOver($evt){
            console.log("Mouse Over", $evt)
        },
        onMouseOut($evt){
            console.log("Mouse Out", $evt)
        },
        onSubmit($evt){
            console.log("submit", $evt)
        },
        onKeyUp($evt){
            console.log("onKeyUp", $evt)
        }
    }
}
</script>

<style></style>