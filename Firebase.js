// Import the functions you need from the SDKs you need

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBPEVMHsDsR-XoTJ4HGxjfwc4rb5yYbt5s",
  authDomain: "arabic-companion.firebaseapp.com",
  projectId: "arabic-companion",
  storageBucket: "arabic-companion.appspot.com",
  messagingSenderId: "774111269658",
  appId: "1:774111269658:web:9dcb11bab9adaacf60d2a3",
  measurementId: "G-BNDBQGEF94"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;