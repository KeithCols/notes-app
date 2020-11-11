import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import firebase from "firebase"


Vue.config.productionTip = false

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAt87rtvxkXX5jSa6J5edhYo01-yf62kqw",
  authDomain: "notetakingapp-35771.firebaseapp.com",
  databaseURL: "https://notetakingapp-35771.firebaseio.com",
  projectId: "notetakingapp-35771",
  storageBucket: "notetakingapp-35771.appspot.com",
  messagingSenderId: "144458097744",
  appId: "1:144458097744:web:4b56e77bfc5190c7a9dd55"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')