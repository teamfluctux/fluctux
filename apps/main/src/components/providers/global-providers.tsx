"use client";
import React, { useEffect } from "react";
import { useTheme } from "next-themes";
import { Toaster, ToasterProps } from "sonner";
import { apolloClient } from "@/lib/apollo-client";
import { ApolloProvider } from "@apollo/client";
import { TopLoading } from "@fluctux/ui";
import { observer } from "mobx-react";
import { reaction } from "mobx";
import { workspaceStore } from "@/services/stores";

interface GlobalProvidersPropsType {
  children: React.ReactNode;
}

const TopLoadingObeserver = observer(() => {
  if (workspaceStore.isTopLoading) return <TopLoading />;
});

export const GlobalProviders = ({ children }: GlobalProvidersPropsType) => {
  const { theme = "system" } = useTheme();
  return (
    <>
      <TopLoadingObeserver />
      <ApolloProvider client={apolloClient}>
        {children}
        <Toaster
          richColors
          position="bottom-center"
          theme={theme as ToasterProps["theme"]}
          closeButton
        />
      </ApolloProvider>
    </>
  );
};
