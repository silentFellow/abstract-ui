import { useState } from "react";

import LoginForm from "./LoginForm";

export default {
  title: "Login Form",
  component: LoginForm,
};

export const LoginFormWithCredentials = () => {
  const [val, setVal] = useState({});
  console.log(val);

  return (
    <LoginForm
      authOptions={{
        withEmail: true,
        credentialsState: setVal,
        signupRedirect: "/signup",
        forgetPasswordTrigger: () => console.log("forgot password"),
        social: [
          {
            provider: "google",
            trigger: () => console.log("google"),
          },
          {
            provider: "github",
            trigger: () => console.log("github"),
          },
          {
            provider: "apple",
            trigger: () => console.log("apple"),
          },
          {
            provider: "facebook",
            trigger: () => console.log("facebook"),
          },
          {
            provider: "zoho",
            trigger: () => console.log("zoho"),
          },
          {
            provider: "gitlab",
            trigger: () => console.log("gitlab"),
          },
        ],
      }}
    />
  );
};

export const LoginFormWithoutCredentials = () => {
  return (
    <LoginForm
      authOptions={{
        withEmail: true,
        signupRedirect: "/signup",
        forgetPasswordTrigger: () => console.log("forgot password"),
        social: [
          {
            provider: "google",
            trigger: () => console.log("google"),
          },
          {
            provider: "facebook",
            trigger: () => console.log("facebook"),
          },
          {
            provider: "instagram",
            trigger: () => console.log("facebook"),
          },
        ],
      }}
    />
  );
};

export const LoginFormWithoutProviders = () => {
  const [val, setVal] = useState({});
  console.log(val);

  return (
    <LoginForm
      authOptions={{
        credentialsState: setVal,
        withEmail: true,
        signupRedirect: "/signup",
        forgetPasswordTrigger: () => console.log("forgot password"),
      }}
    />
  );
};

export const LoginFormWithoutSignup = () => {
  const [val, setVal] = useState({});
  console.log(val);

  return (
    <LoginForm
      authOptions={{
        credentialsState: setVal,
        withEmail: true,
        forgetPasswordTrigger: () => console.log("forgot password"),
      }}
    />
  );
};

export const LoginFormWithoutForgetPassword = () => {
  const [val, setVal] = useState({});
  console.log(val);

  return (
    <LoginForm
      authOptions={{
        credentialsState: setVal,
        withEmail: true,
        signupRedirect: "/signup",
      }}
    />
  );
};

export const LoginFormWithoutEmail = () => {
  const [val, setVal] = useState({});
  console.log(val);

  return (
    <LoginForm
      authOptions={{
        credentialsState: setVal,
        signupRedirect: "/signup",
        forgetPasswordTrigger: () => console.log("forgot password"),
      }}
    />
  );
};
