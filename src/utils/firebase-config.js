
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
 
const firebaseConfig = {
  apiKey: "AIzaSyA1QCN5f8fz_F6ZZzafCQTjJ7a2b7fHKwQ",
  authDomain: "streaming-app-8a8ae.firebaseapp.com",
  projectId: "streaming-app-8a8ae",
  storageBucket: "streaming-app-8a8ae.appspot.com",
  messagingSenderId: "940856870361",
  appId: "1:940856870361:web:64f4f5693ad54866ce05c8",
  measurementId: "G-RPP5HNXNNM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth=getAuth(app)