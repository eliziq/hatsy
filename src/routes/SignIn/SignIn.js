import "./SignIn.scss";
import {
  signInWitnGooglePopup,
  createUserDocFromAuth,
} from "../../util/firebase";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import Button from "../../components/Button/Button";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWitnGooglePopup();
    const userDocRef = await createUserDocFromAuth(user);
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <Button btn_type='inverted' onClick={logGoogleUser}>Sign in with Google</Button>
      <SignUpForm />
    </div>
  );
};

export default SignIn;
