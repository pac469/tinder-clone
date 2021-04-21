import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNYGefdMM-f8ei5ZI02CKOwl2Q9wisqNw",
  authDomain: "tinder-clone-890c3.firebaseapp.com",
  databaseURL: "https://tinder-clone-890c3.firebaseio.com",
  projectId: "tinder-clone-890c3",
  storageBucket: "tinder-clone-890c3.appspot.com",
  messagingSenderId: "480441373974",
  appId: "1:480441373974:web:972a453e48aa09a3cf6c37",
  measurementId: "G-DD37NGBJPN"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const database = firebaseApp.firestore();

export default database; 