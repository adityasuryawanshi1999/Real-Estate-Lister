// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-2be2d.firebaseapp.com",
  projectId: "mern-estate-2be2d",
  storageBucket: "mern-estate-2be2d.appspot.com",
  messagingSenderId: "486713652130",
  appId: "1:486713652130:web:d41fca8872cc1f876fb8fb",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
