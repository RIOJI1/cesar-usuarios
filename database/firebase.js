import firebase from "firebase";
import "firebase/firestore";

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCrbEO7FnfXcUH7WgUitKgsAaBR_NyVOXc",
    authDomain: "sm41-4921f.firebaseapp.com",
    databaseURL: "https://sm41-4921f.firebaseio.com",
    projectId: "sm41-4921f",
    storageBucket: "sm41-4921f.appspot.com",
    messagingSenderId: "603504047861",
    appId: "1:603504047861:web:f6987a58d54d1fc6af37bc"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default {
  firebase,
  db
};
