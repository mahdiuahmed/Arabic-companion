// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/compat/app";
import { getAnalytics } from "firebase/compat/analytics";
import { getFirestore } from "firebase/compat/firestore";
import { getAuth } from "firebase/compat/auth";
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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const getFirestore = getFirestore(app);
const getAuth = getAuth(app);