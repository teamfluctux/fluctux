import React from "react";
import { useEffect, useState } from "react";

interface ToggleOpenProps {
  shortcutKey?: string;
  // a callback to be executed when the shortcut is triggered
  onToggle?: (isOpen: boolean) => void;
  // to know the current state from the external source (Redux in this case)
  externalIsOpen?: boolean;
}

export const useToggleOpen = ({
  shortcutKey,
  onToggle,
  externalIsOpen,
}: ToggleOpenProps) => {
  const [openState, setOpenState] = useState<boolean>(false);
  const [openArray, setOpenArray] = useState<{ [key: string]: boolean }>({});

  const handleOpenArray = (openArrayId: string) => {
    setOpenArray((prev) => ({
      ...prev,
      [openArrayId]: !prev[openArrayId],
    }));
  };

  useEffect(() => {
    if (!shortcutKey) return;

    const down = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        // if redux integration is present, use the onToggle callback
        onToggle ? onToggle(false) : setOpenState(false);
      }

      if (e.key === shortcutKey && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        onToggle ? onToggle(!externalIsOpen) : setOpenState((prev) => !prev);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [shortcutKey, onToggle, externalIsOpen]);

  return {
    isOpen: openState,
    toggle: () => {
      setOpenState((prev) => !prev);
    }, // toggle function
    setOpen: (state: boolean) => {
      setOpenState(state);
    }, // state setter
    isOpenFromArray: (openArrayId: string) => {
      return openArray[openArrayId];
    },
    openArray,
    setOpenArray,
    handleOpenArray,
  };
};
