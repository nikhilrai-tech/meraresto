<template>
    <img class="logo" src="../assets/logo.png" alt="hjjffjfd" >
    <div class="login">
        <!-- <input type="text" v-model="name" placeholder="Enter Name"> -->
        <input type="email" v-model="email" placeholder="Enter Email">
        <input type="password" v-model="password" placeholder="Enter Password">
        <button v-on:click="login">Login</button>
        <p>
        <router-link to="/signup"><button >New User</button></router-link>
    </p>
    </div>
</template>
<script>
import axios from 'axios';
    export default {
        name: "LoginView",
        data(){
            return {
                email:"",
                password:"",
            };
        },
        methods:{
            async login()
            {
                let result = await axios.get(
                    `http://localhost:3000/users?email=${this.email}&password=${this.password}`
                );
                console.warn(result);
                if (result.status == 200 && result.data.length > 0) 
                {
                    localStorage.setItem("user-info",JSON.stringify(result.data[0]))      
                    this.$router.push({name:'Home'})
                }      
            }
            
        },
        mounted(){
            let user =localStorage.getItem("user-info");
            if (user)
            {
                this.$router.push({name:"Home"})
            }
        }
        
    }
</script>