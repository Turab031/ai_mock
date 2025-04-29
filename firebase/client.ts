// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDDJKe3C0D0xd8eS2LXd18FABJlZKJ5PSU",
  authDomain: "prepwise-8e12a.firebaseapp.com",
  projectId: "prepwise-8e12a",
  storageBucket: "prepwise-8e12a.firebasestorage.app",
  messagingSenderId: "335624673729",
  appId: "1:335624673729:web:f342d96f06eca2eb9cf740",
  measurementId: "G-6SM0L1QXVM",
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const db = getFirestore(app);
