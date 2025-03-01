<template>
    <h5 class="mb-0">AULA 4 - Diretivas</h5>
    <div v-show="showName">
        Nome: {{ firstName }} <br>
        Sobrenome: {{ lastName }}
    </div>

    <div v-if="accessLevel === 'admin'">Usuário Admin</div>
    <div v-else-if="accessLevel === 'marketing'">Usuário Marketing</div>
    <div v-else>Usuário Normal</div>
</template>

<script>

export default {
    data() {
        return {
            firstName: 'Jhon',
            lastName: 'Snow',
            showName: true,
            accessLevel: 'admin'
        }
    }
}

</script>

<style></style>