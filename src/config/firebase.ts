// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider} from "firebase/auth"
import { getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwea9gdhxaKqLq5iKtcuMO1hQMgMtbVoc",
  authDomain: "social-media-96c52.firebaseapp.com",
  projectId: "social-media-96c52",
  storageBucket: "social-media-96c52.firebasestorage.app",
  messagingSenderId: "325938223841",
  appId: "1:325938223841:web:480c8e2bded0e76b3275a0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app)
