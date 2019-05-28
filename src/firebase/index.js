import firebase from 'firebase/app';
import 'firebase/storage';

  var firebaseConfig = {
    apiKey: "AIzaSyCFW1idD3qoz7CwLBJYEtD033mFTwwwvvk",
    authDomain: "efz3li-b3a7e.firebaseapp.com",
    databaseURL: "https://efz3li-b3a7e.firebaseio.com",
    projectId: "efz3li-b3a7e",
    storageBucket: "efz3li-b3a7e.appspot.com",
    messagingSenderId: "691992282868",
    appId: "1:691992282868:web:6d2f172dd27167c6"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const storage = firebase.storage();

  export {
      storage, firebase as default
  }