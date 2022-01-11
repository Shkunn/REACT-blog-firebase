// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCx856aKxGXgufU49J2P2Nf_9KJrRCveqs",
  authDomain: "react-blog-firebase-b6f35.firebaseapp.com",
  projectId: "react-blog-firebase-b6f35",
  storageBucket: "react-blog-firebase-b6f35.appspot.com",
  messagingSenderId: "753330524292",
  appId: "1:753330524292:web:4e6181ee6f151e97cdb2d1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();