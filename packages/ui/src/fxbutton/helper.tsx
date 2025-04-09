import { SizeType } from "../type";

export type ButtonVariant = "primary" | "secondary" | "silent" | "lightSilent";

export interface ButtonStylingType {
  [key: string]: {
    default: string;
    hover: string;
    disabled: string;
  };
}

export const buttonSizes: { [key in SizeType]: string } = {
  sm: "py-1 px-3",
  md: "py-2 px-4",
  lg: "py-3 px-5",
  xl: "py-3 px-10",
};

export const buttonStyling: ButtonStylingType = {
  primary: {
    default: "bg-background-indigo_primary cursor-pointer border-none",
    hover: "hover:bg-background-hover-indigo_primary",
    disabled:
      "text-text-color_3 cursor-not-allowed !bg-[var(--button-primary-disabled)] border border-border-color_1",
  },
  secondary: {
    default:
      "border border-border-color_1 bg-background-color_2  cursor-pointer ",
    hover: "hover:bg-background-color_3",
    disabled:
      "text-text-color_3 cursor-not-allowed bg-background-color_2 border border-border-color_1",
  },
  silent: {
    default: "cursor-pointer",
    hover: "hover:bg-background-color_2",
    disabled: "text-text-color_3 cursor-not-allowed opacity-60",
  },
  lightSilent: {
    default: "cursor-pointer",
    hover: "hover:bg-background-color_4",
    disabled: "text-text-color_3 cursor-not-allowed opacity-60",
  },
};

export const getButtonStyling = (
  variant?: ButtonVariant,
  size?: SizeType,
  disabled: boolean = false
) => {
  const tempVariant =
    (variant && buttonStyling[variant]) || buttonStyling["primary"];
  const tempSize = (size && buttonSizes[size]) || "";
  const tempStyledButton = `${tempVariant?.default} ${disabled ? tempVariant?.disabled : tempVariant?.hover} ${tempSize}`;
  return tempStyledButton;
};
