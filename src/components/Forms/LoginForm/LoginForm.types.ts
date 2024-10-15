// this file is used to declare types for the entire project.
import React from "react";

export interface LoginProps {
  /**
    -- This is of type LoginStyles
  */
  styles?: {
    input?: string;
    button?: string;
    container?: string;
    providerButton?: {
      icon?: string;
      withText?: string;
      withoutText?: string;
    };
    text?: string;
    linkText?: string;
    message?: string;
  };

  /**
    -- This is of type LoginAuthOptions
  */
  authOptions: {
    withEmail?: boolean;
    signupRedirect?: string;
    forgetPasswordTrigger?: (...args: unknown[]) => void;
    credentialsState?: React.Dispatch<React.SetStateAction<Record<string, string>>>;
    credentialsPlaceholder?: {
      username?: string;
      password?: string;
    };

    /**
      -- This is of type Social[]
    */
    social?: {
      /**
        -- This is of type LoginProvider
      */
      provider:
        | "apple"
        | "azure"
        | "discord"
        | "dribbble"
        | "dropbox"
        | "facebook"
        | "github"
        | "gitlab"
        | "google"
        | "instagram"
        | "line"
        | "linkedin"
        | "notion"
        | "pinterest"
        | "reddit"
        | "spotify"
        | "twitch"
        | "twitter"
        | "wordpress"
        | "zoho"
        | "zoom";
      trigger: (...args: unknown[]) => void;
    }[];
  };
}

export type LoginProvider =
  | "apple"
  | "azure"
  | "discord"
  | "dribbble"
  | "dropbox"
  | "facebook"
  | "github"
  | "gitlab"
  | "google"
  | "instagram"
  | "line"
  | "linkedin"
  | "notion"
  | "pinterest"
  | "reddit"
  | "spotify"
  | "twitch"
  | "twitter"
  | "wordpress"
  | "zoho"
  | "zoom";

export type LoginAuthOptions = {
  withEmail?: boolean;
  signupRedirect?: string;
  forgetPasswordTrigger?: (...args: unknown[]) => void;
  credentialsState?: React.Dispatch<React.SetStateAction<Record<string, string>>>;
  credentialsPlaceholder?: {
    username?: string;
    password?: string;
  };

  /**
    -- This is of type Social[]
  */
  social?: {
    /**
      -- This is of type LoginProvider
    */
    provider:
      | "apple"
      | "azure"
      | "discord"
      | "dribbble"
      | "dropbox"
      | "facebook"
      | "github"
      | "gitlab"
      | "google"
      | "instagram"
      | "line"
      | "linkedin"
      | "notion"
      | "pinterest"
      | "reddit"
      | "spotify"
      | "twitch"
      | "twitter"
      | "wordpress"
      | "zoho"
      | "zoom";
    trigger: (...args: unknown[]) => void;
  }[];
};

// text prop is just generic not change on everywhere
// use at top level some may override it
export type LoginStyles = {
  input?: string;
  button?: string;
  container?: string;
  providerButton?: {
    icon?: string;
    withText?: string;
    withoutText?: string;
  };
  text?: string;
  linkText?: string;
  message?: string;
};

export type LoginSocial = {
  provider: LoginProvider;
  trigger: (...args: unknown[]) => void;
};
