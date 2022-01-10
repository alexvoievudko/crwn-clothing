import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyAIlRp9PyyGAlrrVEIJiCj_2_HgEPEA1BA",
  authDomain: "crwn-db-ae419.firebaseapp.com",
  projectId: "crwn-db-ae419",
  storageBucket: "crwn-db-ae419.appspot.com",
  messagingSenderId: "1019737159249",
  appId: "1:1019737159249:web:8d0a808907e20cca19ea70",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
