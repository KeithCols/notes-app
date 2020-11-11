<template>
  <div>
    <div class="error" v-if="error">{{error.message}}</div>
    <form @submit.prevent="pressed">
      <h1 class="top">Login</h1>
      <div class="login">
        <input type="text" placeholder="email" v-model="email" />
      </div>
      <div class="password">
        <input type="password" placeholder="password" v-model="password" />
      </div>
      <button type="submit">Login</button>
    </form>
    
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  data() {
    return {
      email: "",
      password: "",
      error: ""
    };
  },
  methods: {
    pressed() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(data => {
          console.log(data);
          this.$router.replace({ name: "Secret" });
        })
        .catch(error => {
          this.error = error;
        });
    }
  }
};
</script>

<style lang="scss" scoped>
form h1{
  font-family: Arial;
  padding-top: 5%;
}
form{
  position: relative;
  top: 80px;
  left: 20vw;
  width: 33vw ;
  height: 400px;
  padding-left: 50px;
  padding-right: 50px;
  background-color:#333;
  color: white;
  border-radius: 10px;
}
.top{
  padding-left:35%;
  padding-top: 40px;
}

.error {
  color: white;
  background-color: red;
  font-size: 18px;
  width: 75vw;
  padding: 5px;
  text-align: center;
}
input {
  width: 75%;
  padding: 15px;
  margin: 15px;
  font-size: 20px;
}
button {
    width:50%;
  height: 13%;
  font-size: 25px;
  color: black;
  margin-left: 25%;
  margin-top: 7%;
  
}

</style>