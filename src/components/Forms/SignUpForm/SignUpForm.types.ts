export interface SignUpProps {
  signinRedirect?: string;

  /** This is of SidnUpSubmit */
  onSubmit?: (values: { username: string; password: string; email?: string }) => void;

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

export type SignUpSubmit = {
  username: string;
  password: string;
  email?: string;
};
