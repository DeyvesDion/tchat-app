import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import * as firebase from 'firebase/app';
require('firebase/auth')

Vue.config.productionTip = false

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0vFwQ0qO3F3RRdseTYc94kaIjPMbTynA",
  authDomain: "tchat-app-c49af.firebaseapp.com",
  databaseURL: "https://tchat-app-c49af.firebaseio.com",
  projectId: "tchat-app-c49af",
  storageBucket: "tchat-app-c49af.appspot.com",
  messagingSenderId: "194431962820",
  appId: "1:194431962820:web:adf81924d8cb4f38c18391"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// var rootRef = firebase.database().ref();
window.firebase = firebase

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
