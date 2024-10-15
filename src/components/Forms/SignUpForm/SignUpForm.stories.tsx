import { useState } from "react";

import SignupForm from "./SignUpForm";

export default {
  title: "Signup Form",
  component: SignupForm,
};

export const SignInWithEmail = () => {
  const [val, setVal] = useState({});
  console.log(val);

  return <SignupForm withEmail={true} signinRedirect="/sign-in" credentialsState={setVal} />;
};

export const SignInWithoutEmail = () => {
  const [val, setVal] = useState({});
  console.log(val);

  return <SignupForm signinRedirect="/sign-in" credentialsState={setVal} />;
};

export const SignInWithoutSignIn = () => {
  const [val, setVal] = useState({});
  console.log(val);

  return <SignupForm credentialsState={setVal} />;
};
