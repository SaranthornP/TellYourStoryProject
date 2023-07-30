// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAz8Dr9eNBLgC-8YY7FC5kIlzkaHzyD5Y4",
    authDomain: "tell-your-story-f8ed9.firebaseapp.com",
    projectId: "tell-your-story-f8ed9",
    storageBucket: "tell-your-story-f8ed9.appspot.com",
    messagingSenderId: "502339984656",
    appId: "1:502339984656:web:82440b2d0c18dcbd991995",
    measurementId: "G-59203FH65M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);