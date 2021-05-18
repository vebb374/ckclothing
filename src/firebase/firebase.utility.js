import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBWbP_J-hAqvTNnYn8Az-_WrHLOnT_EhoQ",
  authDomain: "ckclothing-6b700.firebaseapp.com",
  databaseURL: "https://ckclothing-6b700.firebaseio.com",
  projectId: "ckclothing-6b700",
  storageBucket: "ckclothing-6b700.appspot.com",
  messagingSenderId: "505537511772",
  appId: "1:505537511772:web:62b4580a8ae409e4b34199",
  measurementId: "G-T3QVZHNLRJ",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
export const GoogleSignIn = () => auth.signInWithPopup(provider);
export default firebase;
