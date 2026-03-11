"use client";
import { ADMIN_SETTINGS_SIDEBAR, SETTINGS_TITLE_DESC } from "@/constants";
import { createContext, useContext, useState } from "react";
type PaginationItemType = { label: string; slug: string };
type SettingsStoreContextType = {
  metaData: {
    title?: string;
    desc?: string;
  };
  setMetaData: ({ title, desc }: { title?: string; desc?: string }) => void;
  pagination: {
    next: PaginationItemType | null;
    prev: PaginationItemType | null;
  };
  setPagination: (slug: string) => void;
};

const FLATTENED_SETTINGS_LIST = Object.values(ADMIN_SETTINGS_SIDEBAR)
  .flatMap((group) => group.items)
  .filter((item) => item.slug) as PaginationItemType[];

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
  const [pagination, setPaginationState] = useState<
    SettingsStoreContextType["pagination"]
  >({
    prev: null,
    next: null,
  });

  const setPagination = (slug: string) => {
    const index = FLATTENED_SETTINGS_LIST.findIndex(
      (item) => item.slug === slug
    );
    setPaginationState({
      prev: index > 0 ? FLATTENED_SETTINGS_LIST[index - 1]! : null,
      next:
        index < FLATTENED_SETTINGS_LIST.length - 1
          ? FLATTENED_SETTINGS_LIST[index + 1]!
          : null,
    });
  };

  return (
    <SettingsStoreContext.Provider
      value={{ metaData, setMetaData, pagination, setPagination }}
    >
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
