<template>
    <h5>AULA 11 - Observadores (watch)</h5>
    
    <div>
        <label>Name</label><br>
        <input v-model="name" type="text">
    </div><br>
    {{ name }}

    <hr>

    <select v-model="pageCount">
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="15">15</option>
    </select> <br>
    {{ pageCount }}

    <hr>

    <div>
        <label>First Name</label><br>
        <input v-model="user.first_name" placeholder="First Name" type="text">
    </div><br>
    <div>
        <label>Last Name</label><br>
        <input v-model="user.last_name" placeholder="First Name" type="text">
    </div>
    {{ user.first_name }} {{ user.last_name }}
</template>

<script>
export default{
    data() {
        return{
            name: '',
            pageCount: 5,
            user: {
                first_name: '',
                last_name: '',
            }
         }
    },
    watch: {
        name(value){
            if(value.length >= 3){
                this.saveUserName()
            }
        },
        pageCount(){
            this.changePage();
        },
        user: {
            handler() {
                console.log('User alterado')
            },
            deep: true
        }
    },
    computed: { },
    methods: { 
        saveUserName(){
            console.log('Ajax')
            console.log(this.name)
        },
        changePage(){
            console.log('Ajax changePage')
        }
     }
}
</script>

<style></style>
