import type { SizeType } from "../type";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "ghost_zinc"
  | "ghost_zinc_2"
  | "surface_indigo_2"
  | "surface_indigo";

export interface ButtonStylingType {
  [key: string]: {
    default: string;
    hover: string;
    disabled: string;
  };
}

export const buttonSizes: { [key in SizeType]: string } = {
  sm: "py-1 px-3 text-workspace_3",
  md: "py-2 px-4 text-workspace_1",
  lg: "py-3 px-5 text-read_16",
  xl: "py-3.5 px-6 text-read_18",
};

export const buttonStyling: ButtonStylingType = {
  primary: {
    default:
      "bg-background-indigo_primary cursor-pointer border-none text-text-color_default_white active:bg-fx_indigo-500 active:text-text-color_default_white!",
    hover:
      "hover:bg-fx_indigo-700 dark:hover:text-text-color_4 hover:text-text-color_default_white",
    disabled:
      "text-text-color_2 cursor-not-allowed! bg-fx_indigo-800 border border-border-color_1",
  },
  secondary: {
    default:
      "border border-border-color_1 bg-background-color_900C  cursor-pointer text-text-color_2",
    hover: "hover:bg-background-color_800C hover:text-text-color_1",
    disabled:
      "text-text-color_3 cursor-not-allowed! bg-background-color_900C border border-background-color_900C",
  },
  ghost_zinc: {
    default: "cursor-pointer text-text-color_2",
    hover: "hover:bg-background-color_900C hover:text-text-color_1",
    disabled: "text-text-color_3 cursor-not-allowed! bg-transparent",
  },
  ghost_zinc_2: {
    default: "cursor-pointer text-text-color_2",
    hover: "hover:bg-background-color_800C hover:text-text-color_1!",
    disabled: "text-text-color_3 cursor-not-allowed! bg-transparent",
  },
  surface_indigo: {
    default:
      "bg-surface-indigo-bg inset-ring inset-ring-surface-indigo-border active:bg-surface-indigo-bg-active active:inset-ring-surface-indigo-border-active cursor-pointer text-surface-indigo-fg",
    hover: "hover:inset-ring-surface-indigo-border-active",
    disabled: "opacity-50 cursor-not-allowed!",
  },
  surface_indigo_2: {
    default:
      "bg-surface-indigo-bg inset-ring inset-ring-surface-indigo-border active:bg-surface-indigo-bg-active active:inset-ring-surface-indigo-border-active cursor-pointer text-surface-indigo-fg-2",
    hover: "hover:inset-ring-surface-indigo-border-active",
    disabled: "opacity-50 cursor-not-allowed!",
  },
};

export const getButtonStyling = (
  variant?: ButtonVariant,
  size?: SizeType,
  disabled: boolean = false
) => {
  const tempVariant =
    (variant && buttonStyling[variant]) || buttonStyling["primary"];
  const tempSize = (size && buttonSizes[size]) || buttonSizes.md;
  const tempStyledButton = `${tempVariant?.default} ${disabled ? tempVariant?.disabled : tempVariant?.hover} ${tempSize}`;
  return tempStyledButton;
};
