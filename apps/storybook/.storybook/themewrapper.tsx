import React from "react";
import "@fluctux/ui/styles/global.css";
import { ThemeProvider } from "next-themes";
export const ThemeWrapper = (Story: React.ComponentType) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" forcedTheme={"dark"}>
      <Story />
    </ThemeProvider>
  );
};