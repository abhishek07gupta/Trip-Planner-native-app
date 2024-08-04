
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const apiKey = process.env.EXPO_FIREBASE_API_KEY
const firebaseConfig = {
  apiKey: apiKey,
  authDomain: "react-native-travel-planner.firebaseapp.com",
  projectId: "react-native-travel-planner",
  storageBucket: "react-native-travel-planner.appspot.com",
  messagingSenderId: "347127949552",
  appId: "1:347127949552:web:86e577b622526fd46c3a35",
  measurementId: "G-2F83WGN4K7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth =  getAuth(app)

export const db = getFirestore(app);