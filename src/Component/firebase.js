import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBYnZIJknb1rsqQH7xRffx2f5mP38ZYULs",
  authDomain: "clone-8c385.firebaseapp.com",
  databaseURL: "https://clone-8c385.firebaseio.com",
  projectId: "clone-8c385",
  storageBucket: "clone-8c385.appspot.com",
  messagingSenderId: "1019565789865",
  appId: "1:1019565789865:web:bbbe2ed9652b0c4ded4fb8",
  measurementId: "G-3HTGD23YEZ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
