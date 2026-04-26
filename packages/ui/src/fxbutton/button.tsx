import React from "react";
import { type ROUNDED_VARIANTS } from "../constant";
import {
  type buttonSizes,
  type ButtonVariant,
  getButtonStyling,
  iconSizes,
} from "./helper";
import type { LucideIcon } from "lucide-react";
import { DotLoading } from "../DotLoading";
import type { SizeType } from "../type";

export type IconPostionType = "LEFT" | "RIGHT";

/**
 * Props for the FxButton component.
 */
interface FxButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** The content to be rendered inside the button. */
  children?: React.ReactNode;
  /** Additional CSS classes to apply to the button. */
  className?: string;
  /** The visual style variant of the button. */
  variant?: ButtonVariant;
  /** The border radius variant of the button. */
  radius?: keyof typeof ROUNDED_VARIANTS;
  /** The size of the button. */
  size?: keyof typeof buttonSizes;
  /** Whether the button is disabled. */
  disabled?: boolean;
  /** An optional Lucide icon to display. */
  icon?: LucideIcon;
  /** Custom size for the icon. If not provided, it defaults based on the button size. */
  iconSize?: number;
  /** The position of the icon relative to the children. Defaults to "LEFT". */
  iconPosition?: IconPostionType;
  /** Whether the button is in a loading state. Displays a DotLoading component. */
  loading?: boolean;
}

/**
 * A versatile button component that supports various sizes, variants, icons, and a loading state.
 */
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
  // Check if the current size is compatible with the DotLoading component
  const invalidLoadingSizes =
    size &&
    ["rounded_md", "rounded_sm", "square_sm", "square_xs"].includes(size);
  const LoadingSize = (size && !invalidLoadingSizes ? size : "md") as SizeType;

  const Icon = icon;
  const buttonIconSize = iconSize
    ? iconSize
    : (size && iconSizes[size]) || iconSizes.md;
  return (
    <button
      disabled={disabled || loading}
      data-loading={`${loading}`}
      className={`
        transition-colors *:transition-colors flex justify-center items-center group cursor-default shrink-0 font-medium gap-1 data-[loading=true]:cursor-wait! ${buttonStyling} ${className}`}
      {...props}
    >
      {iconPosition == "LEFT" && Icon && <Icon size={buttonIconSize} />}
      {children}
      {iconPosition == "RIGHT" && Icon && <Icon size={buttonIconSize} />}
      {!invalidLoadingSizes && loading && (
        <DotLoading loadingSize={LoadingSize} />
      )}
    </button>
  );
};
