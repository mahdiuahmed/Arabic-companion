// Import AsyncStorage for persistent data storage
import AsyncStorage from "@react-native-async-storage/async-storage";
// Import necessary Firebase modules
import { initializeApp } from "firebase/app";
import {
  getReactNativePersistence,
  initializeAuth,
} from "firebase/auth/react-native";
import { getFirestore } from "firebase/firestore";

// Set the configuration object for Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBPEVMHsDsR-XoTJ4HGxjfwc4rb5yYbt5s",
  authDomain: "arabic-companion.firebaseapp.com",
  projectId: "arabic-companion",
  storageBucket: "arabic-companion.appspot.com",
  messagingSenderId: "774111269658",
  appId: "1:774111269658:web:9dcb11bab9adaacf60d2a3",
  measurementId: "G-BNDBQGEF94",
};

// Initialize Firebase app with the given configuration
const firebaseApp = initializeApp(firebaseConfig);

// Initialize Firebase auth with the initialized Firebase app and AsyncStorage persistence
const auth = initializeAuth(firebaseApp, {
  persistence: getReactNativePersistence(AsyncStorage),
});

// Get the Firestore instance for the initialized Firebase app
const db = getFirestore(firebaseApp);

// Export the Firebase auth and Firestore instances for use in other parts of the app
export { auth, db };
