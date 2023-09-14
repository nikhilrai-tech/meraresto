<template>
    <div class="nav text-center ">
        <router-link to="/">Home</router-link>
        <router-link to="/add">Add Resturant</router-link>
    <a v-on:click="logout" href="#">Logout</a>
    </div>
  

</template>
<script>
    export default{
        name: "HeaderS",
        methods:{
            logout(){
                localStorage.clear();
                this.$router.push({name:"Login"})
            }
        }
    }
</script>
<style>
.nav{
    background-color: #333;
    overflow: hidden;
    padding: 20px;

}
.nav a{
    /* float: left; */
    color: #f2f2f2;
    text-align: center;
    padding: 20px 34px;
    text-decoration: none;
    font-size: 16px;
    margin-right: 4px;
}
.nav a:hover{
    background-color: white;
    color: black;
}
</style>