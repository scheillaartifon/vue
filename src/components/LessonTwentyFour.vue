<template>
    <h5>AULA 24 - Introdução a composition API setup</h5>

    {{ name }}
</template>

<script>

export default{
    setup() {
        const name = 'Scheilla';

        return {
            name
        }
    }
}
</script>

<style></style>
