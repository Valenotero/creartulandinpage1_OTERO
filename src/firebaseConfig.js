// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB4tjjw5Rj1QGA73tG1xXJicp3QpZQWY2A",
    authDomain: "techstore-d2f95.firebaseapp.com",
    projectId: "techstore-d2f95",
    storageBucket: "techstore-d2f95.appspot.com",
    messagingSenderId: "107233210547",
    appId: "1:107233210547:web:1a23456789abcde123456f"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
