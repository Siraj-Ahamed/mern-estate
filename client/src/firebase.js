// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-e0d9c.firebaseapp.com",
  projectId: "mern-estate-e0d9c",
  storageBucket: "mern-estate-e0d9c.appspot.com",
  messagingSenderId: "686314737293",
  appId: "1:686314737293:web:c661f68edf2cbed44c1cc4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);