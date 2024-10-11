export interface DropDownProps {
  label?: string;
  styles?: DropDownStyles;
  withSearch?: boolean;

  /**
    -- This is of type Options[]
  */
  options: {
    label: string;
    value: string;
  }[];

  inputPlaceHolder?: string;
  radio?: boolean;
  onChange?: (value: string | string[]) => void;
}

export type DropDownStyles = {
  button?: string;
  dropdown?: string;
  input?: string;
  text?: string;
  noResult?: string;
}

export type DropDownOptions = {
  label: string;
  value: string;
}
