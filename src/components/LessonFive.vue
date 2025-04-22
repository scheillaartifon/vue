<!-- Site que peguei o JSON -->
<!-- https://jsonplaceholder.typicode.com -->

<template>
    <h5>AULA 5 - Instruções de loops (diretiva v-for)</h5>
    <div 
        v-for="(obj, index) in todos"
        v-bind:key="obj.id">
        {{ index }} - {{ obj.title }}
    </div>
</template>

<script>
export default{
    data() {
        return{
            todos: [
                {
                    "userId": 1,
                    "id": 1,
                    "title": "delectus aut autem",
                    "completed": false
                },
                {
                    "userId": 1,
                    "id": 2,
                    "title": "quis ut nam facilis et officia qui",
                    "completed": false
                },
                {
                    "userId": 1,
                    "id": 3,
                    "title": "fugiat veniam minus",
                    "completed": false
                },
                {
                    "userId": 1,
                    "id": 4,
                    "title": "et porro tempora",
                    "completed": true
                },
                {
                    "userId": 1,
                    "id": 5,
                    "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
                    "completed": false
                }
            ]
        }
    }
}
</script>

<style>
</style>