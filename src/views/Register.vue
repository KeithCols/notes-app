<template>
  <div>
    <div class="error" v-if="error">{{error.message}}</div>
    <form @submit.prevent="pressed">
      <h1 class="top">Register</h1>
      <div class="email">
        <input type="email" v-model="email" placeholder="email" />
      </div>
      <div class="password">
        <input type="password" v-model="password" placeholder="password" />
      </div>
      <button type="submit">Register</button>
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
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(() => {
          console.log("here");
          this.$router.replace({ name: "Secret" });
        })
        .catch(error => (this.error = error));
    }
  }
};
</script>

<style lang="scss" scoped>
form h1{
  font-family: Arial;
  padding-top: 5%;
  color: white;
  
}
.top{
  padding-left:30%;
  padding-top: 40px;
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
  border-radius: 10px;
}

div{
font-family: Arial;
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