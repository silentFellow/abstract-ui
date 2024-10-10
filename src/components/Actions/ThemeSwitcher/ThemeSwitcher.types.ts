export interface ThemeSwitcherProps {
  defaultTheme?: "light" | "dark" | "system";
  showSystem?: boolean;

  /**
    -- This is of type ThemeSwitcherStyles
  */
  styles?: {
    container?: string;
    tabs?: string;
    button?: string;
    icons?: string;
  };
}

export type ThemeSwitcherStyles = {
  container?: string;
  tabs?: string;
  button?: string;
  icons?: string;
}
