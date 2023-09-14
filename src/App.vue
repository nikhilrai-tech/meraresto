<template>
<router-view />
</template>


<script>

export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 40px; */
}
.logo{
    width: 100px;
}
body{
  padding: 0;
  margin: 0;
}
.register .ADD .login, input{
    width: 300px;
    height: 40px;
    padding-left: 20px;
    display: block;
    margin-bottom: 30px;
    margin-left: auto;
    margin-right: auto;
    border: 1px solid skyblue;
}
.register .login, button{
    width: 320px;
    padding: 10px;
    border: 1px solid skyblue;
    background-color: rgb(89, 137, 242);
    color: antiquewhite;

}

</style>
