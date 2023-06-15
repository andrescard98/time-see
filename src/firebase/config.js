// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAw0rdje2k_3IECbSVxEbbLxJvzgQ0PNNQ",
  authDomain: "time-see.firebaseapp.com",
  projectId: "time-see",
  storageBucket: "time-see.appspot.com",
  messagingSenderId: "361389636607",
  appId: "1:361389636607:web:46e28a7def3e95f07105ca"
};

// Initialize Firebase
export const FirebaseApp = initializeApp( firebaseConfig );

export const FirebaseAuth = getAuth( FirebaseApp );

export const FirebaseDB = getFirestore( FirebaseApp );