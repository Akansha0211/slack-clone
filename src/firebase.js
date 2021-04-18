import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyCKJIIcYu5j_510gBLqaBxm4xp1rBHPEko",
    authDomain: "react-slack-e5f5b.firebaseapp.com",
    projectId: "react-slack-e5f5b",
    storageBucket: "react-slack-e5f5b.appspot.com",
    messagingSenderId: "894725937866",
    appId: "1:894725937866:web:8b861b672887ad0424b233",
    measurementId: "G-N0NM4155N8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  export const auth = firebase.auth();


  export const signInWithGoogle = ()=>{
      const googleProvider = new firebase.auth.GoogleAuthProvider();
      auth.signInWithPopup(googleProvider);
  }