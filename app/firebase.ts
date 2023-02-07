// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAkTOUhzLM8ldJwADyirSmxV-BJBeU8sV8",
  authDomain: "bank-app-d70d8.firebaseapp.com",
  projectId: "bank-app-d70d8",
  storageBucket: "bank-app-d70d8.appspot.com",
  messagingSenderId: "201609320164",
  appId: "1:201609320164:web:257e09197ac114ee027ef1",
  measurementId: "G-WY6B598PM9"
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const auth = getAuth();

export const register = (email: string, password: string) => {
  createUserWithEmailAndPassword(auth, email, password)
}

export const login = (email: string, password: string) => {
  signInWithEmailAndPassword(auth, email, password)
}

export const logout = () => signOut(auth)

export const db = getFirestore ()