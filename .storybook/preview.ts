import type { Preview } from "@storybook/react";
import { ModeDecorator } from "./ModeDecorator";
import "@/index.css"

const preview: Preview = {
  decorators: [ModeDecorator],
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
