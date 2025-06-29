"use client";
import React from "react";
import { store } from "@/redux/store";
import { Provider } from "react-redux";
import { useTheme } from "next-themes";
import { Toaster, ToasterProps } from "sonner";
import { apolloClient } from "@/lib/apollo-client";
import { ApolloProvider } from "@apollo/client";

interface GlobalProvidersPropsType {
  children: React.ReactNode;
}

export const GlobalProviders = ({ children }: GlobalProvidersPropsType) => {
  const { theme = "system" } = useTheme();
  return (

      <ApolloProvider client={apolloClient}>
        <Provider store={store}>
          {children}
          <Toaster
            richColors
            position="bottom-center"
            theme={theme as ToasterProps["theme"]}
            closeButton
          />
        </Provider>
      </ApolloProvider>
 
  );
}
