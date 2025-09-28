// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDNezPMKQJwF6hSGv1SNvaZrKPonjvrzDA",
    authDomain: "intelliprep-c79eb.firebaseapp.com",
    projectId: "intelliprep-c79eb",
    storageBucket: "intelliprep-c79eb.firebasestorage.app",
    messagingSenderId: "860909341181",
    appId: "1:860909341181:web:c5b67001fb309d5f5a7194",
    measurementId: "G-PZ58BMCB1R"
};

// Initialize Firebase
const app =!getApps().length ? initializeApp(firebaseConfig): getApp();
export const auth = getAuth(app);
export const db = getFirestore(app);