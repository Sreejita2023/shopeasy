// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDq45V4np4onPtqFMwlXLmt46MO38OXkzg",
  authDomain: "tourlogin-393a9.firebaseapp.com",
  projectId: "tourlogin-393a9",
  storageBucket: "tourlogin-393a9.appspot.com",
  messagingSenderId: "382248946392",
  appId: "1:382248946392:web:ff3d39f0573155ebc765ad",
  measurementId: "G-S6RKX5309F"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
 export default app