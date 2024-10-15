export interface ShowMoreProps {
  /**
    -- This is of type ShowMoreStyle
  */
  styles?: {
    line?: string;
    button?: string;
  };
  expanded?: boolean;
  onClick?: () => void;
}

export type ShowMoreStyle = {
  line?: string;
  button?: string;
};
