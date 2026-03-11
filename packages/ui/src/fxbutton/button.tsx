import React from "react";
import { ROUNDED_VARIANTS } from "../constant";
import {
  buttonSizes,
  type ButtonVariant,
  getButtonStyling,
  iconSizes,
} from "./helper";
import type { LucideIcon } from "lucide-react";

export type IconPostionType = "LEFT" | "RIGHT";

interface FxButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  className?: string;
  variant?: ButtonVariant;
  radius?: keyof typeof ROUNDED_VARIANTS;
  size?: keyof typeof buttonSizes;
  disabled?: boolean;
  icon?: LucideIcon;
  iconPosition?: IconPostionType;
  loading?: boolean;
}

export const FxButton = ({
  className,
  children,
  variant,
  size,
  icon,
  iconPosition = "LEFT",
  radius,
  disabled = false,
  loading = false,
  ...props
}: FxButtonProps) => {
  const buttonStyling = getButtonStyling(variant, size, disabled || loading);
  const roundedVariant = radius ? ROUNDED_VARIANTS[radius] : "";
  const Icon = icon;
  const iconSize = (size && iconSizes[size]) || iconSizes.md;
  return (
    <button
      disabled={disabled || loading}
      className={`
        transition-colors *:transition-colors flex justify-center items-center group cursor-default font-medium gap-1.5 ${buttonStyling} ${roundedVariant}! ${className}`}
      {...props}
    >
      {iconPosition == "LEFT" && Icon && <Icon size={iconSize} />}
      {children}
      {iconPosition == "RIGHT" && Icon && <Icon size={iconSize} />}
    </button>
  );
};
