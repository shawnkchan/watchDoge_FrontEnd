// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore ,addDoc, collection} from '@firebase/firestore'
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
} from "firebase/auth"



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCFl9BIub3a-YzntpCiKnPS2vc5AwU3_CM",
  authDomain: "watchdoge-a8feb.firebaseapp.com",
  projectId: "watchdoge-a8feb",
  storageBucket: "watchdoge-a8feb.appspot.com",
  messagingSenderId: "404865536131",
  appId: "1:404865536131:web:0a10bf22569f2c50a1cbb6",
  measurementId: "G-R0CE0JG417"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore()

export const firestore = getFirestore(app)
export const auth = getAuth(app)
export default app


