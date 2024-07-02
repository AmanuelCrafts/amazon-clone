// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBYW9DsAMddS6Uc4LnWtPsU3al3o35ZIcE",
  authDomain: "clone-e2028.firebaseapp.com",
  projectId: "clone-e2028",
  storageBucket: "clone-e2028.appspot.com",
  messagingSenderId: "38093792206",
  appId: "1:38093792206:web:eee557c028eeaadcd5819f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore and Auth
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
