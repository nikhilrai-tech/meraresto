<template>
    <img class="logo" src="../assets/logo.png" alt="hjjffjfd" >
    <div class="register">
        <input type="text" v-model="name" placeholder="Enter Name">
        <input type="email" v-model="email" placeholder="Enter Email">
        <input type="password" v-model="password" placeholder="Enter Password">
        <button v-on:click="signup">Signup</button>
        <p>
        <router-link to="/login"><button >Already Register</button></router-link>
    </p>
    </div>
    

</template>

<script>
import axios from 'axios';
    export default{
        name:"SignUp",
        data(){
            return{
                name:"",
                email:"",
                password:"",
            }
        },
        methods:{
            async signup(){
                console.warn("signup",this.name,this.email,this.password)
                let result = await axios.post("http://localhost:3000/users",{
                    name:this.name,
                    email:this.email,
                    password:this.password
                })
                console.warn(result)
                if (result.status == 201)
                {
                    localStorage.setItem("user-info",JSON.stringify(result.data))      
                    this.$router.push({ name: 'Login' });
                }      
            }
        },
        mounted(){
            let user =localStorage.getItem("user-info");
            if (user)
            {
                this.$router.push({ name: 'Login' });
            }
        }
    }
</script>

<style>

</style>