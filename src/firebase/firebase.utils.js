import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB7SSEqLSgXRJmqzQCheV_tx5Vo--ztkzQ",
  authDomain: "crwn-db-35335.firebaseapp.com",
  databaseURL: "https://crwn-db-35335.firebaseio.com",
  projectId: "crwn-db-35335",
  storageBucket: "",
  messagingSenderId: "291246189962",
  appId: "1:291246189962:web:5f2b9e20f231bdc5552c73"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
