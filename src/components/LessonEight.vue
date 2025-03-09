<!-- Site que peguei o JSON -->
<!-- https://jsonplaceholder.typicode.com -->

<template>
    <h5>AULA 8 - Ligação de dados bidirecional (diretiva v-model)</h5>
    <div>
        One-way data binding <br>
        Two-way data binding <br>
        v-model -> formulários
    </div>

    <br><br>

    <div>
        <label>Nome</label> <br>
        <input v-model="name" type="text"> <br>
        {{ name }}
    </div>

    <br><br>

    <div>
        <label>Esportes</label><br>
        <select v-model="sports">
            <option value="futebol">Futebol</option>
            <option value="skate">Skate</option>
            <option value="tenis">Tenis</option>
        </select> <br>
        {{ sports }}
    </div>

    <br><br>

    <div>
        <label>Newsletter</label> <br>
        <input v-model="newsletter" type="radio" value="sim">Sim
        <input v-model="newsletter" type="radio" value="nao">Não <br>
        {{ newsletter }}
    </div>

    <br><br>

    <div>
        <label>Contrato</label> <br>
        <input v-model="contract" type="checkbox">Aceita nossos termos... <br>
        {{ contract }}
    </div>

    <br><br>

    <div>
        <label>Cores que você mais gosta</label> <br>
        <input v-model="colors" type="checkbox" value="azul">Azul
        <input v-model="colors" type="checkbox" value="amarelo">Amarelo <br>
        {{ colors }}
    </div>
</template>

<script>
export default{
    data() {
        return{
            name: 'Jhon Snow',
            sports: 'futebol',
            newsletter: 'sim',
            contract: false,
            colors: []
        }
    }
}
</script>

<style>
</style>