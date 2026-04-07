import React, { useContext, useEffect, useState } from "react";
import { createContext } from "react";

type CompWrapperContextType = {
  actionSlot: React.ReactNode;
  setActionSlot: (slot: React.ReactNode) => void;
};
const CompWrapperContext = createContext<CompWrapperContextType | null>(null);

const useCompWrapperContext = () => {
  const context = useContext(CompWrapperContext);
  if (!context) {
    throw new Error(
      "useCompWrapperContext must be used within CompWrapperContext.Provider"
    );
  }

  return context;
};

export const CompWrapperAction = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { setActionSlot } = useCompWrapperContext();
  useEffect(() => {
    setActionSlot(children);
    return () => setActionSlot(null);
  }, []);
  return null
};

type CompWrapperHeaderType = {
  title?: string;
};

const CompWrapperHeader = ({ title }: CompWrapperHeaderType) => {
  const { actionSlot } = useCompWrapperContext();
  return (
    <div className="flex w-full h-fit justify-between items-center mb-5">
      <h1 className="text-text-color_1 text-read_20 font-semibold  w-full one-line-ellipsis">
        {title ?? "Untitled"}
      </h1>
      <div className="shrink-0 w-fit">{actionSlot}</div>
    </div>
  );
};

type CompWrapperPropsType = {
  title: string;
  children: React.ReactNode;
  fullWidth?: boolean;
};

export const CompWrapper = ({
  title,
  fullWidth = false,
  children,
}: CompWrapperPropsType) => {
  const [actionSlot, setActionSlot] = useState<React.ReactNode>(null);
  return (
    <CompWrapperContext.Provider value={{ actionSlot, setActionSlot }}>
      {fullWidth ? (
        <div className="w-full p-10 h-full">
          <CompWrapperHeader title={title} />
          {children}
        </div>
      ) : (
        <div className="max-w-[400px] w-full ml-10 mt-10 ">
          <CompWrapperHeader title={title} />

          {children}
        </div>
      )}
    </CompWrapperContext.Provider>
  );
};
