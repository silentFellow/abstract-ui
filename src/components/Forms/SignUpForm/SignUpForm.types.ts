export interface SignUpProps {
  signinRedirect?: string;
  credentialsState: React.Dispatch<React.SetStateAction<Record<string, string>>>;
  withEmail?: boolean;
  placeholder?: {
    username?: string;
    password?: string;
    confirmPassword?: string;
    email?: string;
  };

  /**
    -- This is of type SignUpStyles
  */
  styles?: {
    input?: string;
    button?: string;
    container?: string;
    text?: string;
    linkText?: string;
    message?: string;
  };
}

export type SignUpStyles = {
  input?: string;
  button?: string;
  container?: string;
  text?: string;
  linkText?: string;
  message?: string;
};
