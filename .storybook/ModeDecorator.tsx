// .storybook/modeDecorator.tsx
import React from "react";
import ThemeSwitcher from "../src/components/Actions/ThemeSwitcher/ThemeSwitcher"

export const ModeDecorator = (Story: any) => {
  return (
    <>
      <div className="flex justify-end mb-2">
        <ThemeSwitcher />
      </div>

      <Story />
    </>
  );
};
