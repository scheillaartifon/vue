<!-- Site que peguei o JSON -->
<!-- https://jsonplaceholder.typicode.com -->

<template>
    <h5 :class="{ 'title': true, 'title-home': isHome }">AULA 7 - Atributos Class e Style dinâmicos</h5>
    <p :class="pClass">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil ullam vitae esse blanditiis nulla similique corporis ut distinctio reprehenderit, doloremque beatae expedita, totam laborum possimus consectetur ad voluptas veniam. Dolorum!</p>
    <p :style="styleClass">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil ullam vitae esse blanditiis nulla similique corporis ut distinctio reprehenderit, doloremque beatae expedita, totam laborum possimus consectetur ad voluptas veniam. Dolorum!</p>
</template>

<script>
export default{
    data() {
        return{
            isHome: false,
            classVar: 'title',
            styleClass: {'color': 'purple', backgroundColor: 'lightgray', 'font-size': '20px'},
            pClass: ['text', 'text-home']
        }
    }
}
</script>

<style>
    .title{
        font-size: 20px;
        color: blue;
    }
    .title-home{
        font-size: 40px;
        color: green;
    }
    
    .text{
        color: darkblue;
    }
    .text-home{
        background: gold;
    }
</style>