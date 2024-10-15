export interface ImageInputProps {
  showInput?: boolean;
  defaultImage?: string;

  /**
    -- This is of type ImageInputStyles
  */
  styles?: {
    container?: string;
    input?: string;
    image?: string;
    imageContainer?: string;
  };

  onChange?: (val: string) => void;
}

export type ImageInputStyles = {
  container?: string;
  input?: string;
  image?: string;
  imageContainer?: string;
};
