import React from "react";

export interface ExpandableTextAreaProps {
  minRows?: number;
  maxCharLimit?: number;
  placeholder?: string;

  /**
    -- This is of type ExpandableTextAreaStyles
  */
  styles?: {
    input?: string;
    charLimit?: string;
  };

  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export type ExpandableTextAreaStyles = {
  input?: string;
  charLimit?: string;
}
