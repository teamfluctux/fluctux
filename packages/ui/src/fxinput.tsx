"use client";
import { SizeType } from "./type";
import React from "react";
import { ROUNDED_VARIANTS } from "./constant";
interface FxInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  className?: string;
  variant?: keyof typeof inputVariants;
  radius?: keyof typeof ROUNDED_VARIANTS;
  size?: keyof typeof inputSizes;
  label?: string;
}

type InputVariantType = "primary" | "secondary" | "outline";

const inputVariants: { [key in InputVariantType]: string } = {
  primary:
    "border border-border-color_1 bg-background-color_900C focus:fx-input-outline",
  secondary: "border border-border-color_1 bg-transparent",
  outline:
    "rounded-tiny pb-2 text-workspace_2 font-medium px-3 pt-4 bg-transparent border border-border-color_1  w-full focus:outline-fxInput ",
};

const inputSizes: { [key in SizeType]: string } = {
  sm: "p-1 pl-2 pr-2",
  md: "p-2 pl-3 pr-3",
  lg: "p-3 pl-4 pr-4",
  xl: "p-4 pl-5 pr-5",
};

export function FxInput({
  className,
  variant,
  radius,
  size,
  label = "Label",
  ...props
}: FxInputProps) {
  const inputVariant = variant ? inputVariants[variant] : "";
  const inputSize = size ? inputSizes[size] : "";
  const roundedVariant = radius ? ROUNDED_VARIANTS[radius] : "";

  return variant === "outline" ? (
    <div className="w-full relative group">
      <input
        className={`peer ${inputVariant} ${inputSize} ${roundedVariant} ${className} `}
        {...props}
        id={`${label.replace(" ", "-")}`}
      />
      <label
        htmlFor={`${label.replace(" ", "-")}`}
        className="absolute translate-y-[-50%] text-text-color_4 transition-colors peer-focus:text-[var(--primary-color)] left-[15px] bg-background-color_950C py-0 px-1 text-[14px] font-medium "
      >
        {label}
      </label>
    </div>
  ) : (
    <input
      className={`transition-colors ${inputVariant} ${inputSize} ${roundedVariant} ${className}`}
      {...props}
    />
  );
}
