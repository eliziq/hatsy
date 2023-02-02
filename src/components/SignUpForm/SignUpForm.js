import { useState } from "react";
import { useDispatch } from "react-redux";

import { signUpStart } from "../../store/user/userAction";
import FormInput from "../FormInput/FormInput";
import Button from "../Button/Button";
import { SignUpContainer } from "./SignUpFormStyle";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;
  const dispatch = useDispatch();

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const submitUserHandler = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("passwords do not match!");
      return;
    }

    try {
      dispatch(signUpStart(email, password, displayName));
      resetFormFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("User with this email already exists. Try signing in.");
      } else {
        console.log("user creation error", error);
      }
    }
  };

  const inputChangeHandler = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <SignUpContainer>
      <h2>Don't have an account?</h2>
      <span>Sign Up with your email and password.</span>
      <form action="" onSubmit={submitUserHandler}>
        <FormInput
          name="displayName"
          type="text"
          onChange={inputChangeHandler}
          value={displayName}
        >
          Display Name
        </FormInput>

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

        <FormInput
          name="confirmPassword"
          type="password"
          onChange={inputChangeHandler}
          value={confirmPassword}
        >
          Confirm Password
        </FormInput>
        <Button type="submit" btn_type="default">
          Sign Up
        </Button>
      </form>
    </SignUpContainer>
  );
};

export default SignUpForm;
