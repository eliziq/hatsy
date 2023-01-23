import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

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
//This might be also a diffrent provider (Facebook, GitHub, etc)
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
//Popup is Google because provider is Google. Diffrent Provider will call a different Popup
export const signInWitnGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocFromAuth = async (userAuth, additionalInfo = {}) => {
  if (!userAuth) return;
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists());

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      //if we are not getting display name it sets to null. Then the code comes to read the additional
      //info which contains the display name and overwrites null to actual name.
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInfo,
      });
    } catch (error) {
      console.log("error creating a user", error.message);
    }
  }
  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};
