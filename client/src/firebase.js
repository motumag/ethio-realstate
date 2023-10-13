// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "tokuma-realstate.firebaseapp.com",
  projectId: "tokuma-realstate",
  storageBucket: "tokuma-realstate.appspot.com",
  messagingSenderId: "751375468793",
  appId: "1:751375468793:web:1f7ea7b7f82063eedbfa28",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
