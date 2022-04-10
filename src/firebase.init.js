// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDxGuvvwD7ZDutiDyMSXxsdzGpSczyrLZ4",
    authDomain: "ema-john-55c3f.firebaseapp.com",
    projectId: "ema-john-55c3f",
    storageBucket: "ema-john-55c3f.appspot.com",
    messagingSenderId: "428702624016",
    appId: "1:428702624016:web:3f26be3929fe73bcf35d95"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;