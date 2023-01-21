import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "hatsey-5e8cb.firebaseapp.com",
  projectId: "hatsey-5e8cb",
  storageBucket: "hatsey-5e8cb.appspot.com",
  messagingSenderId: "449715008295",
  appId: "1:449715008295:web:c9ab37125624128c8fef02",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider()
provider.setCustomParameters({
    prompt: 'select_account'
})

export const auth = getAuth()
export const signInWitnGooglePopup = () => signInWithPopup(auth, provider)