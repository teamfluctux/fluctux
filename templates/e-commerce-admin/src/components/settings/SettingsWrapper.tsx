"use client";
import { createContext, useContext, useState } from "react";

type SettingsStoreContextType = {
  title: string;
  setTitle: (value: string) => void;
};

const SettingsStoreContext = createContext<SettingsStoreContextType | null>(null);

export const SettingsWrapperProvider = ({ children }: { children: React.ReactNode }) => {
  const [title, setTitle] = useState("");

  return (
    <SettingsStoreContext.Provider value={{ title, setTitle }}>
      {children}
    </SettingsStoreContext.Provider>
  );
};

export const useSettingsStore = () => {
  const store = useContext(SettingsStoreContext);
  if (!store) throw new Error("useSettingsStore must be used within SettingsWrapperProvider");
  return store;
};