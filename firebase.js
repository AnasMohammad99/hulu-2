import * as firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCbZrXsFlSRUSLOYcPkv00ZDkwkVAFIgoc",
  authDomain: "whatsapp-2-e6c19.firebaseapp.com",
  projectId: "whatsapp-2-e6c19",
  storageBucket: "whatsapp-2-e6c19.appspot.com",
  messagingSenderId: "873275958928",
  appId: "1:873275958928:web:181be270fa5eb35c3bda15",
};
const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
