import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCgCJuF4G6z_ajD5j9kKAPhD4AjUnU4sM8",
    authDomain: "clone-march-92739.firebaseapp.com",
    projectId: "clone-march-92739",
    storageBucket: "clone-march-92739.appspot.com",
    messagingSenderId: "247475970126",
    appId: "1:247475970126:web:7f0326b3b483d9521c231f"
  });


  const db = firebase.firestore();

  export { db }