"use client";
import React from "react";
import { Provider } from "react-redux";
import { SessionProvider } from "next-auth/react";
import { useTheme } from "next-themes";
import { Toaster, ToasterProps } from "sonner";
import { ApolloProvider } from "@apollo/client";

interface GlobalWrapperPropsType {
  children: React.ReactNode;
}

export default function GlobalWrappers({ children }: GlobalWrapperPropsType) {
  const { theme = "system" } = useTheme();
  return (
    <SessionProvider>
          {children}
          <Toaster
            richColors
            position="bottom-center"
            theme={theme as ToasterProps["theme"]}
            closeButton
          />
    </SessionProvider>
  );
}
