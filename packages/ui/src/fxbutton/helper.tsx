import { SizeType } from "../type";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "ghost_zinc"
  | "surface_indigo";

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
    default:
      "bg-background-indigo_primary cursor-pointer border-none text-text-color_default_white",
    hover: "hover:bg-fx_indigo-700",
    disabled:
      "!text-text-color_2 cursor-not-allowed !bg-fx_indigo-800 border border-border-color_1",
  },
  secondary: {
    default:
      "border border-border-color_1 bg-background-color_900C  cursor-pointer ",
    hover: "hover:bg-background-color_800C",
    disabled:
      "!text-text-color_3 cursor-not-allowed !bg-background-color_900C border !border-background-color_900C",
  },
  ghost_zinc: {
    default: "cursor-pointer",
    hover: "hover:bg-background-color_900C hover:!text-text-color_1",
    disabled: "!text-text-color_3 cursor-not-allowed !bg-transparent",
  },
  surface_indigo: {
    default:
      "bg-[var(--surface-indigo-bg)] border border-[var(--surface-indigo-border)] !text-[var(--surface-indigo-fg)] active:bg-[var(--surface-indigo-bg-active)] active:border-[var(--surface-indigo-border-active)] cursor-pointer",
    hover: "hover:!border-[var(--surface-indigo-border-active)]",
    disabled: "opacity-50 cursor-not-allowed",
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
