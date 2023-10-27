// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCfzyJvEpT1-ZslYsTPCfAnED-1zWIg9ts",
  authDomain: "coder-firebase-enrique.firebaseapp.com",
  projectId: "coder-firebase-enrique",
  storageBucket: "coder-firebase-enrique.appspot.com",
  messagingSenderId: "181500151800",
  appId: "1:181500151800:web:ab87054ace9bd13144780d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore()