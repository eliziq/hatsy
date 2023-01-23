import "./SignUpForm.scss";
import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocFromAuth,
} from "../../util/firebase";
import FormInput from "../FormInput/FormInput";
import Button from "../Button/Button";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

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
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      await createUserDocFromAuth(user, { displayName });
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
    <div className="sign-up-container">
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
    </div>
  );
};

export default SignUpForm;
