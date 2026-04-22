// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxdQmcRtjeMvH1URLkm1McF7ntnPuxilM",
  authDomain: "clone-twitter-79931.firebaseapp.com",
  projectId: "clone-twitter-79931",
  storageBucket: "clone-twitter-79931.firebasestorage.app",
  messagingSenderId: "304700116500",
  appId: "1:304700116500:web:e3a66451cc1d4fb7662101",
};

// Initialize Firebase
const APP = initializeApp(firebaseConfig);

// Get Authentication
const AUTH = getAuth(APP);

export { APP, AUTH };
