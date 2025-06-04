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

type InputVariantType = "primary" | "secondary" | "outlineLabel" | "outline";

const inputVariants: { [key in InputVariantType]: string } = {
  primary:
    "border border-border-color_1 bg-background-color_900C focus:fx-input-outline transition-colors",
  secondary: "border border-border-color_1 bg-transparent transition-colors",
  outlineLabel:
    "rounded-tiny pb-2 text-workspace_2 font-medium px-3 pt-4 bg-transparent border border-border-color_1  w-full focus:outline-fxInput hover:border-border-color_2 focus:border-transparent transition-colors",
  outline:
    "focus:ring-[1.5px] transition-colors bg-transparent focus:ring-fx_indigo-primary border border-border-color_1 outline-none rounded-tiny py-1.5 text-workspace_2 font-medium px-2 hover:border-border-color_2 disabled:!text-text-color_3 disabled:!border-background-color_900C disabled:hover:!border-background-color_900C disabled:cursor-not-allowed focus:border-transparent",
};

const inputSizes: { [key in SizeType]: string } = {
  sm: "p-0.5 px-2",
  md: "p-2 px-3",
  lg: "p-3 px-4",
  xl: "p-4 px-5",
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

  return variant === "outlineLabel" ? (
    <div className="w-full relative group">
      <input
        className={`peer placeholder:!text-text-color_3 ${inputVariant} ${inputSize} ${roundedVariant} ${className} `}
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
