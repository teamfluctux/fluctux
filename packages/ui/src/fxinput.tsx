import type { SizeType } from "./type";
import React, { forwardRef } from "react";
type FxInputClassNames = {
  labelClassName?: string;
};

interface FxInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  className?: string;
  variant?: keyof typeof inputVariants;
  size?: keyof typeof inputSizes;
  label?: string;
  isError?: boolean;
  classNames?: FxInputClassNames;
  errorMsg?: string | string[];
}

type InputVariantType =
  | "primary"
  | "secondary"
  | "outlineLabel"
  | "outline"
  | "blackPrimary";

const inputVariants: { [key in InputVariantType]: string } = {
  primary:
    "border border-border-color_1 bg-background-color_900C outline-0! focus:ring-4 focus:ring-surface-bg focus:border-primary-color transition-colors rounded-md",
  blackPrimary:
    "border border-border-color_1 bg-background-color_900C outline-0! focus:ring-4 focus:ring-background-color_750C focus:border-text-color_4 transition-colors rounded-md",
  secondary:
    "border border-border-color_1 bg-transparent transition-colors rounded-md",
  outlineLabel:
    "rounded-md pb-2 font-medium px-3 pt-4 bg-transparent border border-border-color_1  w-full  hover:border-border-color_2 focus:border-primary-color! transition-colors outline-0!",
  outline:
    "focus:ring-[1.5px] transition-colors bg-transparent focus:ring-fx_indigo-primary border border-border-color_1 outline-hidden rounded-md  font-medium  hover:border-border-color_2 disabled:text-text-color_3! disabled:!border-background-color_900C disabled:hover:!border-background-color_900C disabled:cursor-not-allowed focus:border-transparent",
};

const inputSizes: { [key in SizeType]: string } = {
  sm: "p-0.5 px-2",
  md: "p-2 px-3 ",
  lg: "p-3 ",
  xl: "p-4 ",
};

export const FxInput = forwardRef<HTMLInputElement, FxInputProps>(
  (
    {
      className,
      variant,

      size,
      label = "Label",
      classNames,
      isError = false,
      errorMsg,
      ...props
    },
    ref
  ) => {
    const inputVariant = variant ? inputVariants[variant] : "";
    const inputSize = size ? inputSizes[size] : "";

    const { labelClassName } = classNames ?? {};

    return (
      <>
        {variant === "outlineLabel" ? (
          <div className="w-full relative group">
            <input
              ref={ref}
              className={`peer placeholder:text-text-color_3! text-workspace_2   ${inputVariant} ${inputSize} ${className} `}
              {...props}
              id={`${label.replace(" ", "-")}`}
            />
            <label
              htmlFor={`${label.replace(" ", "-")}`}
              className={`absolute translate-y-[-50%] text-text-color_4 transition-colors peer-focus:text-(--primary-color) left-[15px] bg-background-color_950C py-0 px-1 text-workspace_2 font-medium ${labelClassName ?? ""}`}
            >
              {label}
            </label>
          </div>
        ) : (
          <input
            ref={ref}
            className={`transition-colors text-workspace_2 placeholder:text-text-color_3! ${inputVariant} ${inputSize} ${className} ${isError && "ring-4 ring-red-500! !ring-opacity-45 border border-red-600!"}`}
            {...props}
          />
        )}
        {isError && (
          <div className="mt-2 text-workspace_2">
            <ul className="list-disc list-inside">
              {Array.isArray(errorMsg) ? (
                errorMsg.map((item, i) => {
                  return (
                    <li key={`${item}${i}`} className="text-red-500">
                      {item}
                    </li>
                  );
                })
              ) : (
                <p className="text-red-500">{errorMsg}</p>
              )}
            </ul>
          </div>
        )}
      </>
    );
  }
);

FxInput.displayName = "FxInput";
