import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDjFLCQ7lUVZtthHmnNoWt5gIk08xQfsw4",
  authDomain: "react-clone-15847.firebaseapp.com",
  projectId: "react-clone-15847",
  storageBucket: "react-clone-15847.appspot.com",
  messagingSenderId: "389032708714",
  appId: "1:389032708714:web:ef1430b19b743035bf9813"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };
  