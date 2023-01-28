import { SignInContainer, ButtonsContainer } from "./SignInFormStyle";

import { useState } from "react";
import {
  signInWitnGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from "../../util/firebase";

import FormInput from "../FormInput/FormInput";
import Button, { BUTTON_TYPE_CLASSES } from "../Button/Button";

const SignInForm = () => {
  const defaultFormFields = {
    email: "",
    password: "",
  };

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    await signInWitnGooglePopup();
  };

  const signInWithCredentials = async (event) => {
    event.preventDefault();
    try {
      const { user } = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("Incorect password");
          break;
        case "auth/user-not-found":
          alert("Seems like you are not registered yet. Wanna sign up?");
          break;
        default:
          console.log(error);
      }
    }
  };

  const inputChangeHandler = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <SignInContainer>
      <h2>Log into your account.</h2>
      <form action="" onSubmit={signInWithCredentials}>
        <FormInput
          name="email"
          type="email"
          onChange={inputChangeHandler}
          value={email}
        >
          Email
        </FormInput>

        <FormInput
          name="password"
          type="password"
          onChange={inputChangeHandler}
          value={password}
        >
          Password
        </FormInput>

        <ButtonsContainer>
          <Button type="submit" btn_type="default">
            Sign In
          </Button>
          <Button
            type="button"
            btn_type={BUTTON_TYPE_CLASSES.inverted}
            onClick={signInWithGoogle}
          >
            Sign in with Google
          </Button>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
};

export default SignInForm;
