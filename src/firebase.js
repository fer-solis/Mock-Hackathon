  import firebase from 'firebase/app'
  import 'firebase/firestore'

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyACujPwtY6XZFBhWP3DR3eNtTPkYGq3PyU",
    authDomain: "mock-hackathon-cede6.firebaseapp.com",
    projectId: "mock-hackathon-cede6",
    storageBucket: "mock-hackathon-cede6.appspot.com",
    messagingSenderId: "267959218432",
    appId: "1:267959218432:web:51219aa37683ffe6ae83e5",
    measurementId: "G-W87BX758HT"
  };
  // Initialize Firebase
  const fb = firebase.initializeApp(firebaseConfig);
  // firebase.analytics();

export const db = fb.firestore();
// console.log(db);



