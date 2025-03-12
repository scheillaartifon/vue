<template>
    <h5>AULA 16 - Enviando dados do filho para o pai (emit)</h5>
    <div :class="baseClass">
        <slot/>
        
        <button @click="onClick">
            X
        </button>
    </div>
</template>

<script>
export default{
    data() { },
    props: {
        variant: {
            type: String,
            default: ''
        },
    },
    computed: {
        baseClass() {
            return [
                'alert', 
                this.variant ? `alert-${this.variant}` : ''
            ]
        }
    },
    methods: {
        onClick(){
            this.$emit('close')
        }
    }
}
</script>

<style scoped>
.alert{
    display: flex;
    justify-content: space-between;
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