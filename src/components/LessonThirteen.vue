<template>
    <h5>AULA 13 - Componentes slot</h5>
    <TheHeader v-if="showHeader">
        <template v-slot:title>
            Nome
        </template>

        <template v-slot:description>
            Descricao
        </template>

        Content
        <!-- <v-slot>Content</v-slot> -->
    </TheHeader>
    
</template>

<script>
import TheHeader from './../components/TheHeader'

export default{
    components: { TheHeader },
    data() {
        return{
            showHeader: true
        }
    },
    mounted(){
        console.log("entrou")
        console.log(this.$slots)
    },
    watch: { },
    computed: { },
    methods: { }
}
</script>

<style></style>
