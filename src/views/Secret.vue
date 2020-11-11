<template>
<div>
    <div id="app">
      <a href="#" @click="logout()" class="logout">L<br><br>O<br><br>G<br><br>O<br><br>U<br><br>T</a>
      <Notebook @change-page="changePage" @new-page="newPage" :pages="pages" :activePage="index" />
      <Page @save-page="savePage" @delete-page="deletePage" :page="pages[index]" />
    </div>
    
</div>
</template>

<script>
import Page from '../components/Page'
import Notebook from '../components/Notebook'
import firebase from "firebase"

export default {
  name: 'app',
  components: {
  Notebook,
  Page
  },
  data: () => ({
    pages: [],
    index: 0
  }),
  methods: {
    logout(){
    firebase.auth().signOut()
    .then(()=>{
      this.$router.replace('/');
    })
    .catch((err)=>{
      console.log(err);
    })
  },
  newPage () {
    this.pages.push({
      title: '',
      content: ''
    })
    this.index = this.pages.length - 1
  },
  changePage (index) {
    this.index = index
  },
  savePage () {
    // nothing as of yet
  },
  deletePage () {
    this.pages.splice(this.index, 1)
    this.index = Math.max(this.index - 1, 0)
  }
  }
}
</script>

<style>    
*{
  font-family: Arial, Helvetica, sans-serif;
    }

    html, body, #app {
        height: 100%;
        width: 100%;
    }

    body {
        margin: 0;
    }

    #app {
        display: flex;
        flex-direction: row;
    }
    .logout{
      width: 5%;
      text-align: center;
      font-size: 20px;
      padding-top: 20%;
      background-color: red;
      color: whitesmoke;
      text-decoration: none;
    }
    </style>