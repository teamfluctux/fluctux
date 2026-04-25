// move it to packages/ui
"use client";
import { type LucideIcon } from "lucide-react";
import Image from "next/image";
import React, { createContext, useContext, useEffect, useState } from "react";

type EmptyContextType = {
  emptyTitle: React.ReactNode;
  setEmptyTitle: (slot: React.ReactNode) => void;
  emptyDesc: React.ReactNode;
  setEmptyDesc: (slot: React.ReactNode) => void;
  metaDesc: React.ReactNode;
  setMetaDesc: (slot: React.ReactNode) => void;
  emptyActions: React.ReactNode;
  setEmptyActions: (slot: React.ReactNode) => void;
};

const EmptyContext = createContext<EmptyContextType | null>(null);
const useEmptyContext = () => {
  const context = useContext(EmptyContext);
  if (!context)
    throw new Error(
      "EmptyContext Components must be used within EmptyContext.Provider"
    );

  return context;
};

/**
 * Component to define the title of the Empty state.
 * Must be used as a child of the `Empty` component.
 * @param props.children - The title content.
 */
export const EmptyTitle = ({ children }: { children: React.ReactNode }) => {
  const { setEmptyTitle } = useEmptyContext();
  useEffect(() => {
    setEmptyTitle(children);
    return () => setEmptyTitle(null);
  }, [children]);
  return null;
};

/**
 * Component to define the description of the Empty state.
 * Must be used as a child of the `Empty` component.
 * @param props.children - The description content.
 */
export const EmptyDesc = ({ children }: { children: React.ReactNode }) => {
  const { setEmptyDesc } = useEmptyContext();
  useEffect(() => {
    setEmptyDesc(children);
    return () => setEmptyDesc(null);
  }, [children]);
  return null;
};
/**
 * Component to define additional metadata or secondary description.
 * Must be used as a child of the `Empty` component.
 * @param props.children - The metadata content.
 */
export const EmptyMetaDesc = ({ children }: { children: React.ReactNode }) => {
  const { setMetaDesc } = useEmptyContext();
  useEffect(() => {
    setMetaDesc(children);
    return () => setMetaDesc(null);
  }, [children]);
  return null;
};
/**
 * Component to define action buttons or links for the Empty state.
 * Must be used as a child of the `Empty` component.
 * @param props.children - The actions content (e.g., Buttons).
 */
export const EmptyActions = ({ children }: { children: React.ReactNode }) => {
  const { setEmptyActions } = useEmptyContext();
  useEffect(() => {
    setEmptyActions(children);
    return () => setEmptyActions(null);
  }, [children]);
  return null;
};

/**
 * The main Empty state container. It uses a slot-based pattern via context
 * to render its children into specific layout positions.
 * @param props.icon - Optional Lucide icon to display.
 * @param props.image - Optional image URL to display.
 * @param props.children - Slot components (EmptyTitle, EmptyDesc, etc.).
 */
export const Empty = ({
  icon,
  image,
  children,
}: {
  icon?: LucideIcon;
  image?: string;
  children: React.ReactNode;
}) => {
  const [emptyTitle, setEmptyTitle] = useState<React.ReactNode>(null);
  const [emptyDesc, setEmptyDesc] = useState<React.ReactNode>(null);
  const [metaDesc, setMetaDesc] = useState<React.ReactNode>(null);
  const [emptyActions, setEmptyActions] = useState<React.ReactNode>(null);
  const Icon = icon;

  return (
    <EmptyContext.Provider
      value={{
        emptyTitle,
        setEmptyTitle,
        emptyDesc,
        setEmptyDesc,
        metaDesc,
        setMetaDesc,
        emptyActions,
        setEmptyActions,
      }}
    >
      <div className="hidden">{children}</div>
      {(emptyTitle || emptyDesc || emptyActions || metaDesc) && (
        <>
          <div className="max-w-[450px] w-full p-3 ">
            <div>
              {Icon && (
                <Icon
                  className="text-text-color_4"
                  size={60}
                  strokeWidth={0.8}
                />
              )}
              {image && (
                <Image
                  src={image}
                  width={500}
                  height={500}
                  className="object-contain object-center w-[300px] h-[300px] border"
                  alt={"Icon"}
                />
              )}
            </div>
            <div className="mt-5">
              <h4 className="text-read_16 font-medium text-text-color_4 ">
                {emptyTitle}
              </h4>
              <p className="text-workspace_2 leading-4.5 text-text-color_2 mt-1">
                {emptyDesc}
              </p>
            </div>
            <div className="mt-5">
              <p className="text-workspace_2 leading-4.5 text-text-color_2 mt-1">
                {metaDesc}
              </p>
            </div>
            <div className="flex justify-start items-center gap-2.5 mt-7">
              {emptyActions}
            </div>
          </div>
        </>
      )}
    </EmptyContext.Provider>
  );
};
