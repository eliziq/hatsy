import "./SignIn.scss";
import React from "react";
import { signInWitnGooglePopup } from "../../util/firebase";

const SignIn = () => {
  const logGoogleUer = async () => {
    const response = await signInWitnGooglePopup();
    console.log(response);
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUer}>Sign in with Google Popup</button>
    </div>
  );
};

export default SignIn;
