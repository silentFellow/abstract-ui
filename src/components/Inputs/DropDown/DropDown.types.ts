export interface DropDownProps {
  label?: string;
  withSearch?: boolean;

  /** This is of type DropDownStyles */
  styles?: {
    button?: string;
    dropdown?: string;
    input?: string;
    noResult?: string;
    options?: string;
  };

  /** label: value */
  options: { [label: string]: string };

  /** def values */
  value?: string[] | string;

  inputPlaceHolder?: string;
  noResult?: string;
  radio?: boolean;
  onChange?: (value: string | string[]) => void;
}

export type DropDownStyles = {
  button?: string;
  dropdown?: string;
  input?: string;
  noResult?: string;
  options?: string;
};
