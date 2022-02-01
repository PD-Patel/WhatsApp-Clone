import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAoaNFl57VViS-OSqJ7-E1SKQsNNIRioms",
  authDomain: "whatsapp-clone-997dd.firebaseapp.com",
  projectId: "whatsapp-clone-997dd",
  storageBucket: "whatsapp-clone-997dd.appspot.com",
  messagingSenderId: "503579530205",
  appId: "1:503579530205:web:a6712d7fe1eefb7b19dc34",
  measurementId: "G-F7JFVK9Q5S",
};

const app = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

const db = app.firestore();

const googleProvider = new firebase.auth.GoogleAuthProvider();

export { auth, googleProvider };

export default db;
