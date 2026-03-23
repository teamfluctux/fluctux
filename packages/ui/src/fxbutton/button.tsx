import React from "react";
import { type ROUNDED_VARIANTS } from "../constant";
import {
  type buttonSizes,
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
  iconSize?: number;
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
  disabled = false,
  loading = false,
  iconSize,
  ...props
}: FxButtonProps) => {
  const buttonStyling = getButtonStyling(variant, size, disabled || loading);

  const Icon = icon;
  const buttonIconSize = iconSize
    ? iconSize
    : (size && iconSizes[size]) || iconSizes.md;
  return (
    <button
      disabled={disabled || loading}
      className={`
        transition-colors *:transition-colors flex justify-center items-center group cursor-default font-medium gap-1.5 ${buttonStyling} ${className}`}
      {...props}
    >
      {iconPosition == "LEFT" && Icon && <Icon size={buttonIconSize} />}
      {children}
      {iconPosition == "RIGHT" && Icon && <Icon size={buttonIconSize} />}
    </button>
  );
};
