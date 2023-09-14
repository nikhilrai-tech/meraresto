<template>
    <HeaderS/>
    <h1>Hello {{name }} Welcome to HomePage</h1>
    <table border="1">
        <tr class="my">
        <td>Id</td>
        <td>Name</td>
        <td>Address</td>
        <td>Contact No</td>
        <td>Actions</td>
        </tr>
        <tr v-for="item in resturant" :key="item.id">
            <td>{{item.id }}</td>
            <td>{{item.name }}</td>
            <td>{{item.address }}</td>
            <td>{{item.contact }}</td>
            <td>
                <button><router-link :to='"/update/"+item.id' style="text-decoration: none; color: white;">Update</router-link></button>
                <button type="button" v-on:click="deleteresturant(item.id)">Delete</button>
            </td>
        </tr>
    </table>
</template>

<script>
import axios from 'axios';
import HeaderS from './Header.vue';
    export  default{
        name: "HomeP",
        data(){
            return{
                name: "",
                resturant:[],
            }
        },
        components:{
            HeaderS
        },
        methods:{
            async deleteresturant(id){
                let result=await axios.delete("http://localhost:3000/resturant/"+id);
                if(result.status==200){
                    this.loaddata()
                }
            },
            async loaddata(){
            let user =localStorage.getItem("user-info");
            this.name = JSON.parse(user).name
            if (!user)
            {
                this.$router.push({name: 'Login'})
            }
            let result=await axios.get("http://localhost:3000/resturant")
            this.resturant=result.data
            }
        },
        mounted(){
            this.loaddata()
        }
    };
</script>

<style>
td{
    width: 160px;
    height: 40px;
    /* background-color: black;
    color: white; */
}
table {
    margin-left: 250px;
}
.my{
    background-color: black;
    color: white;
}
</style>