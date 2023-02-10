import { useState, FormEvent, ChangeEvent } from "react";
import { useDispatch } from "react-redux";
import { AuthErrorCodes, AuthError } from "firebase/auth";

import {
  googleSignInStart,
  emailSignInStart,
} from "../../store/user/userAction";

import { SignInContainer, ButtonsContainer } from "./SignInFormStyle";
import FormInput from "../FormInput/FormInput";
import Button, { BUTTON_TYPE_CLASSES } from "../Button/Button";

const SignInForm = () => {
  const dispatch = useDispatch();

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
    dispatch(googleSignInStart());
  };

  const signInWithCredentials = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      dispatch(emailSignInStart(email, password));
      resetFormFields();
    } catch (error) {
      switch ((error as AuthError).code) {
        case AuthErrorCodes.INVALID_PASSWORD:
          alert("Incorrect password");
          break;
        case AuthErrorCodes.USER_DELETED:
          alert("Seems like you are not registered yet. Wanna sign up?");
          break;
        default:
          console.log(error);
      }
    }
  };

  const inputChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
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
          <Button type="submit" btn_type={BUTTON_TYPE_CLASSES.default}>
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
