import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth, GoogleAuthProvider } from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDAPKmpGciZE62oDS_VZB41c8AoqtnfJtM",
  authDomain: "rj-51155-cb2c0.firebaseapp.com",
  projectId: "rj-51155-cb2c0",
  storageBucket: "rj-51155-cb2c0.appspot.com",
  messagingSenderId: "469767603639",
  appId: "1:469767603639:web:777d978149dd8e3b529432"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()