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
  export const firestore = firebase.firestore();
 
  export const signInWithGoogle = ()=>{
      //Initialize google provider
      const googleProvider = new firebase.auth.GoogleAuthProvider();
      //use signInWithPopUp (Ask user to select gmail account in new pop up window)
      auth.signInWithPopup(googleProvider);
      
  }

  export const signOut = () =>{
      auth.signOut();
  }

  export const createOrGetUserProfileDocument = async(user)=>{
        if(!user) return;
        const userRef = firestore.doc(`users/${user.uid}`);
        const snapshot = await userRef.get();

        if(!snapshot.exists){
            const { displayName, email, photoURL} = user;
            try{
                const user ={
                    displayName_name:displayName,
                    email,
                    photo_url:photoURL,
                    created_at: new Date(),
                };
                await userRef.set(user);
            }catch(error){
                console.log('Error', error);
            }
        }
        return getUserDocument(user.uid);
  };

  async function getUserDocument(uid){
      if(!uid) return null;
      try{
        const userDocument = await firestore.collection('user').doc(uid);
        return userDocument;
      }catch(error){
            console.log('Error in getUserDocument', error.message);
      }
  }