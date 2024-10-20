import LoginForm from "./LoginForm";
import { LoginSubmit } from "./LoginForm.types";

export default {
  title: "Login Form",
  component: LoginForm,
};

export const LoginFormWithCredentials = () => {
  const onSubmit = (value: LoginSubmit) => {
    console.log(value);
  };

  return (
    <LoginForm
      authOptions={{
        withEmail: true,
        onSubmit: onSubmit,
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
  const onSubmit = (value: LoginSubmit) => {
    console.log(value);
  };

  return (
    <LoginForm
      authOptions={{
        onSubmit: onSubmit,
        withEmail: true,
        signupRedirect: "/signup",
        forgetPasswordTrigger: () => console.log("forgot password"),
      }}
    />
  );
};

export const LoginFormWithoutSignup = () => {
  const onSubmit = (value: LoginSubmit) => {
    console.log(value);
  };

  return (
    <LoginForm
      authOptions={{
        onSubmit: onSubmit,
        withEmail: true,
        forgetPasswordTrigger: () => console.log("forgot password"),
      }}
    />
  );
};

export const LoginFormWithoutForgetPassword = () => {
  const onSubmit = (value: LoginSubmit) => {
    console.log(value);
  };

  return (
    <LoginForm
      authOptions={{
        onSubmit: onSubmit,
        withEmail: true,
        signupRedirect: "/signup",
      }}
    />
  );
};

export const LoginFormWithoutEmail = () => {
  const onSubmit = (value: LoginSubmit) => {
    console.log(value);
  };

  return (
    <LoginForm
      authOptions={{
        onSubmit: onSubmit,
        signupRedirect: "/signup",
        forgetPasswordTrigger: () => console.log("forgot password"),
      }}
    />
  );
};
