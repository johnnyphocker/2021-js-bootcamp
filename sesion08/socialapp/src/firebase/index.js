import firebase from "firebase/app";

import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA2lT_pLSPhu07isAKe1wSP_aASe292GRM",
  authDomain: "certificatic2021.firebaseapp.com",
  projectId: "certificatic2021",
  storageBucket: "certificatic2021.appspot.com",
  messagingSenderId: "45903600657",
  appId: "1:45903600657:web:d85bfff4bd4e5316a325b0"
}

firebase.initializeApp(firebaseConfig);
// firebase.auth();

// firestore
export const db = firebase.firestore();




export default firebase;