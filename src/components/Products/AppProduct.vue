<template>
    <div class="card">
        {{ product.name }} - {{ product.price }} <br>
        <button @click="addProduct">
            Adicionar
        </button>

        <button @click="removeProduct">
            Remover
        </button>
    </div>
</template>

<script>
export default{
    props: {
        product: Object
    },
    methods: {
        addProduct(){
            this.$store.commit('addProduct', this.product)

        },
        removeProduct(){
            this.$store.commit('removeProduct', this.product.id)
        }
    }
}
</script>

<style scoped>
    .card{
        text-align: start;
        background-color: bisque;
        padding: 5px;
        margin-bottom: 5px;
    }
</style>