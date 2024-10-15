import type { StorybookConfig } from "@storybook/react-vite";
import path from "path";
import tsConfigPaths from "vite-tsconfig-paths";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  viteFinal: async config => {
    config.plugins?.push(
      /** @see https://github.com/aleclarson/vite-tsconfig-paths */
      tsConfigPaths({
        projects: [path.resolve(path.dirname(__dirname), "tsconfig.json")],
      }),
    );

    return config;
  },
};

export default config;
