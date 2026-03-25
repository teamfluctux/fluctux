import React from "react";
import { CommandDialog } from "./command";

interface FxCommandBoxProps {
  children?: React.ReactNode;
  open?: boolean;
  className?: string;
  containerClasses?: string;
   overlayBackground?: boolean;
   modal?: boolean
}

export function FxCommandBox({
  children,
  open,
  className,
  containerClasses,
  overlayBackground = true,
  modal = false
}: FxCommandBoxProps) {
  
  return (
    <CommandDialog
      open={open ?? false}
      modal={modal}
      overlayBackground={overlayBackground}
      className={`bg-transparent ring-0! border-none p-0 z-[9999] ${className}`}
    >
      <div
        className={`border border-border-color_1 rounded-xl bg-background-color_925C h-full w-full relative overflow-hidden ${containerClasses}`}
      >
        {children}
      </div>
    </CommandDialog>
  );
}
