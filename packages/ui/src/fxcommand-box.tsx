import React from "react";
import { CommandDialog } from "./command";

interface FxCommandBoxProps {
  children?: React.ReactNode;
  open?: boolean;
  className?: string;
  containerClasses?: string;
  overlayBackground?: boolean;
  modal?: boolean;
}

/**
 * A wrapper component for the CommandDialog that provides consistent styling and layout.
 *
 * @param props - Component properties.
 * @param props.children - The content to be rendered inside the command box.
 * @param props.open - Whether the command box is visible.
 * @param props.className - Additional CSS classes for the dialog content.
 * @param props.containerClasses - Additional CSS classes for the inner container.
 * @param props.overlayBackground - Whether to show a background overlay.
 * @param props.modal - Whether the dialog should behave as a modal.
 */
export function FxCommandBox({
  children,
  open,
  className,
  containerClasses,
  overlayBackground,
  modal,
}: FxCommandBoxProps) {
  return (
    <CommandDialog
      open={open ?? false}
      modal={modal && !overlayBackground} // -- MSG_WARNING: Setting modal to true prevents interaction with other overlay components like Select or Popover
      overlayBackground={overlayBackground && !modal}
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
