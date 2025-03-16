"use client";
import React from "react";
import { cn } from "@/lib/utils";
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

export function FxButton({
  className,
  children,
  variant,
  size,
  radius,
  disabled = false,
  loading = false,
  ...props
}: FxButtonProps) {
  const buttonStyling = getButtonStyling(variant, size, disabled || loading);
  const roundedVariant = radius ? ROUNDED_VARIANTS[radius] : "";

  return (
    <button
      disabled={disabled || loading}
      className={cn(buttonStyling, roundedVariant, className, "test")}
      {...props}
    >
      {children}
    </button>
  );
}
