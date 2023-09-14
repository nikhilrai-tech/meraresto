<template>
    <headerS/>
        <h1>Hello user Welcome to Add Resturant Page</h1>
    <form >
        <input type="text" placeholder="Enter Name" v-model="this.resturant.name" name="name">
        <input type="text" placeholder="Enter address" v-model="this.resturant.address" name="name">
        <input type="text" placeholder="Enter contact number" v-model="this.resturant.contact" name="name">
        <button type="button" v-on:click="addresturant">Add New Resturant</button>
    </form>
</template>

<script>
import HeaderS from './Header.vue';
import axios from 'axios';
    export default{
        name: "AddD",
        components:{
            HeaderS
        },
        data(){
            return{
                resturant:{
                    name: "",
                    address: "",
                    contact: "",
                }
            }
        },
        methods:{
            async addresturant()
            {
                console.warn(this.resturant)
                const result=await axios.post("http://localhost:3000/resturant",{
                    name:this.resturant.name,
                    address:this.resturant.address,
                    contact:this.resturant.contact,
                });
                if (result.status==201){
                    this.$router.push({name:"Home"})
                }
                console.warn("result",result)
            }
        }
    }
</script>