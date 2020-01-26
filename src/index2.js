import firebase from "firebase/app";
import "firebase/storage";
import React, { Component } from "react";


  // Your web app's Firebase configuration
  export var firebaseConfig = {
    apiKey: "AIzaSyCesUfYddRMlowiefRvCfYiHEZ4N8b8eM8",
    authDomain: "upload-e31b4.firebaseapp.com",
    databaseURL: "https://upload-e31b4.firebaseio.com",
    projectId: "upload-e31b4",
    storageBucket: "upload-e31b4.appspot.com",
    messagingSenderId: "494789779486",
    appId: "1:494789779486:web:2cdb69a677b7afc1e28e0f",
  
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);



const storage = firebase.storage();

export { firebase, storage as default };