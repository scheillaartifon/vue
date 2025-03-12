<template>
    <h5>AULA 15 - Enviando dados para o componente filho (props)</h5>
    <div :class="baseClass">
        {{ defaultValue }}
        <slot/>
    </div>
</template>

<script>
export default{
    data() {
        return{
        }
    },
    // Jeito mais simples
    // props: ['variant'],

    // Com valor default
    props: {
        variant: {
            type: String,
            default: ''
        },
        defaultValue: {
            type: String,
            default: 'Teste - '
        }
    },
    computed: {
        baseClass() {
            return [
                'alert', 
                this.variant ? `alert-${this.variant}` : ''
            ]
        }
    }
}
</script>

<style scoped>
.alert{
    padding: 16px;
    border-radius: 4px;
    color: gray;
    background-color: #ddd;
}
.alert-success{
    background: green;
    color: #fff;
}
.alert-danger{
    background: darkred;
    color: #fff;
}
</style>