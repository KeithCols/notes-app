<template>
  <div id="app">
    <navigation id="nav"/>
    <div class="view-container">
      <router-link to="/" class="na">Home</router-link> <br><br>
      <router-link to="/login" class="na">Login</router-link> <br><br>
      <router-link to="/register" class="na">Register</router-link> <br><br>
      <router-link to="/about" class="na">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>

</script>

<style scoped>


.view-container{
  width:25%;
  height: 100%;
  padding: 1.5cm;
  box-sizing: border-box;
  min-height: 100vh;
  left: 0px;
  background-color: #ff8c1a;
  color: white;
  
}
div .na{
  color: white;
  font-size: 25px;
  text-decoration: none;
}
</style>