"use client";
import React, { useEffect } from "react";
import { useTheme } from "next-themes";
import { Toaster, type ToasterProps } from "sonner";
import { settingsStore } from "stores";
// import { apolloClient } from "@/lib/apollo-client";

interface GlobalProvidersPropsType {
  children: React.ReactNode;
}

export const GlobalProviders = ({ children }: GlobalProvidersPropsType) => {
  const { theme = "system" } = useTheme();

  // -- This effect is for only intialize settings from database call
  useEffect(() => {
    // -- Just an example
    settingsStore.setIsInstalledOneOfScraper(false);
  }, []);

  return (
    <>
      {children}
      <Toaster
        richColors
        position="top-center"
        theme={theme as ToasterProps["theme"]}
        closeButton
      />
    </>
  );
};
