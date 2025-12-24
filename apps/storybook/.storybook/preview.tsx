import type { Preview } from "@storybook/react";
import { themes } from "@storybook/theming";
import "@fluctux/ui/styles/global.css";
import { ThemeWrapper } from "./ThemeWrapper";

export const decorators = [ThemeWrapper];

const preview: Preview = {
  parameters: {
    darkMode: {
      current: "dark", // default mode
      darkClass: "dark",
      lightClass: "light",
      stylePreview: true,
      // Override the default dark theme
      dark: { ...themes.dark, appBg: "#09090b" },
      // Override the default light theme
      light: { ...themes.normal, appBg: "#fafafa" },
    },
  },
  // for custom themeprovider
  globalTypes: {
    theme: {
      name: "Theme",
      description: "Global theme for components",
      defaultValue: "light",
      toolbar: {
        icon: "circlehollow",
        items: [
          { value: "light", title: "Light Theme" },
          { value: "dark", title: "Dark Theme" },
        ],
      },
    },
  },
};

export default preview;
