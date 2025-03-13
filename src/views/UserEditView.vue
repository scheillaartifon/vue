<template>
    <div>
        <pre style="text-align: start">
            <!-- {{ $route }} -->
            <!-- {{ $route.params.id }} -->
            {{ $route.query.page }}
        </pre>
        Usuario

        <button @click="login()">
            Login
        </button>
    </div>
</template>

<script>
export default {
    created(){
        console.log(this.$router)
    },
    methods: {
        login(){
            // Ajax do login

            // Redireciona
            // this.$router.push('/about')
            this.$router.push({ name: 'about'})
        }
    }
}
</script>