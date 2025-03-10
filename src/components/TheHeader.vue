<template>
    <header class="header">
        <h1 v-if="$slots.title">
            <slot name="title"/>
        </h1>

        <p class="description">
            <slot name="description"/>
        </p>

        <div class="content">
            <slot/>
        </div>
    </header>
</template>

<script>
    export default {
        // AULA 12
        // mounted(){
        //     window.addEventListener('resize', this.resize)
        // },
        // beforeUnmount(){
        //     // Destruir as nossas libs/eventos/listeners
        //     console.log('beforeUnmount')
        //     window.removeEventListener('resize', this.resize)
        // },
        // unmounted(){
        //     console.log('unmounted')
        // },
        // methods: {
        //     resize($evt){
        //         console.log($evt)
        //     }
        // }
    }
</script>

<style>
    .header{
        background: darkmagenta;
        color: white;
    }
</style>