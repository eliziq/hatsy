import "./SignIn.scss";
import React from "react";
import {
  signInWitnGooglePopup,
  createUserDocFromAuth,
} from "../../util/firebase";

const SignIn = () => {
  const logGoogleUer = async () => {
    const { user } = await signInWitnGooglePopup();
    const userDocRef = await createUserDocFromAuth(user);
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUer}>Sign in with Google Popup</button>
    </div>
  );
};

export default SignIn;
