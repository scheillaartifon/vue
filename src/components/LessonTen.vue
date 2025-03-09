<!-- Site que peguei o JSON -->
<!-- https://jsonplaceholder.typicode.com -->

<template>
    <h5>AULA 10 - Propriedade computada (computed)</h5>
    
    <div>{{ fullName }}</div> <hr>

    <h5>Todos como false</h5>
    <div v-for="todo in todosFalse" :key="todo.id">
        {{ todo.title }}
    </div>

    <hr>

    <h5>Todos como true</h5>
    <div v-for="todo in todosTrue" :key="todo.id">
        {{ todo.title }}
    </div>

    <hr>

    <h5>Todos os itens da lista</h5>
    <div v-for="todo in todos" :key="todo.id">
        <input v-model="todo.completed" type="checkbox">
        {{ todo.title }}
    </div>
</template>

<script>
export default{
    data() {
        return{
            user: {
                first_name: 'Jhon',
                last_name: 'Snow'
            },
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
    },
    computed: {
        fullName(){
            return `${this.user.first_name} ${this.user.last_name}`
        },
        todosFalse(){
            // Retorna as todos nao completadas
            return this.todos.filter(todo => !todo.completed)
        },
        todosTrue(){
            return this.todos.filter(todo => todo.completed)
        }
    },
    methods: { }
}
</script>

<style></style>
