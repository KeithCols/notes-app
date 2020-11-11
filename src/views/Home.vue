<template>
<div>
  <div class="top">
    <a>Notetaking App</a>
  </div>
  <div class="bot">
    <form>
      <div class="home">
        <a class="upper">Welcome to Notetaking App</a>
      </div>
    </form>
    <div class="lower">
        <a>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed risus sem, tincidunt eu erat et, sodales volutpat erat. Phasellus sed tellus sagittis, gravida enim vel, pharetra massa. Suspendisse potenti. Ut ornare finibus pretium. Nam sem mi, hendrerit eu volutpat vitae, vehicula in orci. In hac habitasse platea dictumst. Suspendisse fringilla est tellus, sodales scelerisque velit rhoncus quis. Nunc faucibus blandit lacinia. Suspendisse potenti. Nulla non libero porta, hendrerit lectus a, sollicitudin felis.</a>

<a>Proin erat dolor, dictum lacinia quam sed, feugiat iaculis tellus. Suspendisse lectus tellus, lacinia id aliquam sed, egestas quis diam. Sed nisi enim, maximus in tortor et, iaculis vestibulum dui. Nullam vestibulum maximus ex non ultrices. Nunc id bibendum nibh. Integer purus nisi, volutpat nec ornare nec, rhoncus sed sem. Nam tincidunt eget odio non porta. Donec ac lobortis velit. Nunc hendrerit sagittis magna. Etiam sodales lobortis ornare. Curabitur porttitor commodo augue id finibus. Nullam turpis arcu, molestie in est vel, malesuada gravida odio. Praesent ultricies cursus finibus. Vivamus suscipit feugiat magna, nec viverra elit blandit non. Morbi ut nisl consectetur, semper enim et, malesuada nulla. Nunc tempus vulputate lectus ac facilisis.</a>
   </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Home',
  
}
</script>

<style scoped>
.upper{
  font-size: 3vw;
  color: whitesmoke;
}

.top{
  height: 10%;
  font-size: 50px;
  color: black;
  margin-top: 15px;
  margin-left: 20px ;
  margin-bottom: 15px;
}

.bot{
  height: 85.5%;
  width: 100%;
  background-color: #333;
}
form{
  height: 25%;
  background-color: gray;
  width: 100%;
  color: white; 
  text-align: center; 
}
.home{
  padding-top: 40px;
  
}
.lower{
  text-align: center;
  color: whitesmoke;
  margin: 50px;
  font-size: 15px;
}
</style>