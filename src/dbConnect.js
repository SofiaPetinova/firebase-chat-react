import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDGTN8-QR9eI78Q5ZLFZM2Ub1grTYdDejY",
  authDomain: "chat-react-5f983.firebaseapp.com",
  projectId: "chat-react-5f983",
  storageBucket: "chat-react-5f983.appspot.com",
  messagingSenderId: "726480720212",
  appId: "1:726480720212:web:2cd8ea8a5fdac11b82f8c1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)