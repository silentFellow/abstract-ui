// styles?: { [k in keyof CommandPaletteStyles]?: CommandPaletteStyles[k] }

import { ReactNode } from "react";

export interface CommandPaletteProps {
  show?: boolean;
  placeholder?: string;
  triggerKeys?: {
    leaders: ("metaKey" | "ctrlKey" | "shiftKey" | "altKey")[];
    keys: string[];
  };

  /**
    -- This is of type CommandPaletteOption[]
  */
  options: {
    heading?: string;
    contents: {
      icon?: ReactNode;
      label: string;
      onSelect: (...args: unknown[]) => void;
    }[];
  }[];

  /**
    -- This is of type CommandPaletteStyles
  */
  styles?: {
    input?: string;
    options?: string; // to modify style of currently selected use data-[selected=true]: pseudo class
    heading?: string;
  };
}

export type CommandPaletteOption = {
  heading?: string;

  /**
    -- This is of type CommandPaletteItem[]
  */
  contents: {
    icon?: ReactNode;
    label: string;
    onSelect: (...args: unknown[]) => void;
  }[];
};

export type CommandPaletteItem = {
  icon?: ReactNode;
  label: string;
  onSelect: (...args: unknown[]) => void;
};

export type CommandPaletteStyles = {
  input?: string;
  options?: string; // to modify style of currently selected use data-[selected=true]: pseudo class
  heading?: string;
};
