import ThemeSwitcher from "./ThemeSwitcher";

export default {
  title: "Theme switcher",
  component: ThemeSwitcher,
};

export const ThemeSwitcherWithSystem = () => {
  return <ThemeSwitcher showSystem />;
};

export const ThemeSwitcherWithoutSystem = () => {
  return <ThemeSwitcher />;
};
