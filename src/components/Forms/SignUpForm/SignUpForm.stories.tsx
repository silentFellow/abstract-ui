import { useState } from "react";

import SignupForm from "./SignUpForm";

export default {
  title: "Signup Form",
  component: SignupForm,
};

export const SignInWithEmail = () => {
  return (
    <SignupForm
      withEmail={true}
      signinRedirect="/sign-in"
      onSubmit={value => console.log(value)}
    />
  );
};

export const SignInWithoutEmail = () => {
  return <SignupForm signinRedirect="/sign-in" onSubmit={value => console.log(value)} />;
};

export const SignInWithoutSignIn = () => {
  return <SignupForm onSubmit={value => console.log(value)} />;
};
