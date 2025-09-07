// src/lib/firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// IMPORTANT: Replace this with your own Firebase project configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBM-hRHxjqqDQEq-3ztm_esQgCW_VJJChU",
  authDomain: "dream2skill.firebaseapp.com",
  projectId: "dream2skill",
  storageBucket: "dream2skill.firebasestorage.app",
  messagingSenderId: "454832812580",
  appId: "1:454832812580:web:0c66dd8b517549e4895eb1",
  measurementId: "G-L15H7JCXTK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
