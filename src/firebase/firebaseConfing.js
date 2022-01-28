import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyChpuCfa1y-uOeMUSyTZXavKgmSvN9Bef4",
  authDomain: "react-app-journalapp-3354b.firebaseapp.com",
  projectId: "react-app-journalapp-3354b",
  storageBucket: "react-app-journalapp-3354b.appspot.com",
  messagingSenderId: "310583006005",
  appId: "1:310583006005:web:277460783b02d6edd6727c"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


const db = firebase.firestore();
//autenticacion con google
const googleAuthProvider =  new firebase.auth.GoogleAuthProvider();



export{
    db,
    googleAuthProvider,
    firebase
}