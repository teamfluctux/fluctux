import React from "react";
import "@fluctux/ui/styles/global.css";

import { ThemeProvider } from "next-themes";
import { StoryContext } from "@storybook/react";
export const ThemeWrapper = (
  Story: React.ComponentType,
  context: StoryContext
) => {
  const isDarkMode = context.globals?.theme === "dark";
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme={isDarkMode ? "dark" : "light"}
      forcedTheme={isDarkMode ? "dark" : "light"}
    >
      <Story />
    </ThemeProvider>
  );
};
