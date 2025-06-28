
import React from "react";
import { CommandDialog } from "./command";

interface FxCommandBoxProps {
  children?: React.ReactNode;
  open?: boolean;
  className?: string;
  containerClasses?: string;
}

export function FxCommandBox({
  children,
  open,
  className,
  containerClasses,
}: FxCommandBoxProps) {
  return (
    <CommandDialog
      open={open}
      className={`bg-transparent border-none p-[0px] z-[70] ${className}`}
    >
      <div
        className={`border border-border-color_1 rounded-[10px] bg-background-color_900C h-full w-full relative overflow-hidden ${containerClasses}`}
      >
        {children}
      </div>
    </CommandDialog>
  );
}
