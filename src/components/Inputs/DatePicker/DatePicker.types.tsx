export interface DatePickerProps {
  withTime?: boolean;
  disableFuture?: boolean;
  onSelectClose?: boolean;
  onChange: (date: Date | null) => void;
  placeholder?: string;
  fromYear?: number;
  toYear?: number;

  /** This is of type DatePickerStyles */
  styles?: {
    container?: string;
    button?: string;
  };
}

export interface DatePickerStyles {
  container?: string;
  button?: string;
}
