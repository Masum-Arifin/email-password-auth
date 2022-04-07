// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2Sb8zlttWScxN2bw0oqvCDi0GSiR-3q0",
  authDomain: "email-password-auth-e31b8.firebaseapp.com",
  projectId: "email-password-auth-e31b8",
  storageBucket: "email-password-auth-e31b8.appspot.com",
  messagingSenderId: "701183097820",
  appId: "1:701183097820:web:4e6f42ec12148add466d19"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;