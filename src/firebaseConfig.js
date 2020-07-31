// src/firebaseConfig.js
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDtMA40mZtGwjj4vpzOgZMFd7QmXyitNi4",
    authDomain: "magic-memoir.firebaseapp.com",
    databaseURL: "https://magic-memoir.firebaseio.com",
    projectId: "magic-memoir",
    storageBucket: "magic-memoir.appspot.com",
    messagingSenderId: "635504644493",
    appId: "1:635504644493:web:1a0695f24b3516bf47edc4"
  };

  // Initialize Firebase
export default firebase.initializeApp(firebaseConfig);