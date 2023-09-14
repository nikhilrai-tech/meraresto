<template>
    <headerS/>
        <h1>Hello user Welcome to Update Resturant Page</h1>
    <form >
        <input type="text" placeholder="Enter Name" v-model="resturant.name" name="name">
        <input type="text" placeholder="Enter address" v-model="resturant.address" name="name">
        <input type="text" placeholder="Enter contact number" v-model="resturant.contact" name="name">
        <button type="button" v-on:click="updateresturant">Update Resturant</button>
    </form>
</template>

<script>
import HeaderS from './Header.vue';
import axios from 'axios';
    export default{
        name: "HelloO",
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
            async updateresturant(){
                const result=await axios.put("http://localhost:3000/resturant/"+this.$route.params.id,{
                    name:this.resturant.name,
                    address:this.resturant.address,
                    contact:this.resturant.contact,
                });
                if (result.status==200){
                    this.$router.push({name:"Home"})
                }
            }
        },
        async mounted(){
            let user =localStorage.getItem("user-info");
            if (!user)
            {
                this.$router.push({name: 'Login'})
            }
            const result=await axios.get("http://localhost:3000/resturant/"+this.$route.params.id);
            // console .warn(result.data)
            this.resturant=result.data
        }
    }
</script>
