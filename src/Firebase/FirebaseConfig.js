// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAMNuO0U6I14X1FJmUNJAg-P-qh4uX3pwk",
    authDomain: "dashboardtable-2ff2a.firebaseapp.com",
    projectId: "dashboardtable-2ff2a",
    storageBucket: "dashboardtable-2ff2a.appspot.com",
    messagingSenderId: "160612629727",
    appId: "1:160612629727:web:7d42a16f9990d707793d6a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);