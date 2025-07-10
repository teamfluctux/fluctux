import React from "react";
import { cn } from "../lib/utils";
import { ROUNDED_VARIANTS } from "../constant";
import { buttonSizes, ButtonVariant, getButtonStyling } from "./helper";

interface FxButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  className?: string;
  variant?: ButtonVariant;
  radius?: keyof typeof ROUNDED_VARIANTS;
  size?: keyof typeof buttonSizes;
  disabled?: boolean;
  loading?: boolean;
}

export const FxButton = ({
  className,
  children,
  variant,
  size,
  radius,
  disabled = false,
  loading = false,
  ...props
}: FxButtonProps) => {
  const buttonStyling = getButtonStyling(variant, size, disabled || loading);
  const roundedVariant = radius ? ROUNDED_VARIANTS[radius] : ROUNDED_VARIANTS["primary"];

  return (
    <button
      disabled={disabled || loading}
      className={cn(
        "transition-colors flex justify-center items-center gap-2 font-medium py-1 px-3",
        buttonStyling,
        roundedVariant,
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
