export interface ContentCopyProps {
  /**
    -- This is of type ContentCopyStyles
  */
  styles?: {
    content?: string;
    button?: string;
    container?: string;
    seperator?: string;
    heading?: string;
  };
  heading?: string;
  content: string;
}

export type ContentCopyStyles = {
  content?: string;
  button?: string;
  container?: string;
  seperator?: string;
  heading?: string;
};
