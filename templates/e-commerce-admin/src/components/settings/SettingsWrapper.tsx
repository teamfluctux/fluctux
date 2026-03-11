"use client";
import { createContext, useContext, useState } from "react";

type SettingsStoreContextType = {
  metaData: {
    title?: string;
    desc?: string;
  };
  setMetaData: ({ title, desc }: { title?: string; desc?: string }) => void;
};

const SettingsStoreContext = createContext<SettingsStoreContextType | null>(
  null
);

export const SettingsWrapperProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [metaData, setMetaData] = useState<
    SettingsStoreContextType["metaData"]
  >({});

  return (
    <SettingsStoreContext.Provider value={{ metaData, setMetaData }}>
      {children}
    </SettingsStoreContext.Provider>
  );
};

export const useSettingsStore = () => {
  const store = useContext(SettingsStoreContext);
  if (!store)
    throw new Error(
      "useSettingsStore must be used within SettingsWrapperProvider"
    );
  return store;
};
