// Import the functions you need from the SDKs you need
import AsyncStorage from "@react-native-async-storage/async-storage";
import { initializeApp } from "firebase/app";
import {
  getReactNativePersistence,
  initializeAuth,
} from "firebase/auth/react-native";
import {getFirestore} from 'firebase/firestore'

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


const firebaseApp = initializeApp(firebaseConfig);

// Use these for db & auth
const auth = initializeAuth( firebaseApp, {
  persistence: getReactNativePersistence(AsyncStorage)
});

const db = getFirestore(firebaseApp);

export { auth };