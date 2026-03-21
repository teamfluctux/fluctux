import type { SizeType } from "../type";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "ghost_zinc"
  | "ghost_zinc_2"
  | "surface_indigo_2"
  | "surface"
  | "destructive"
  | "surface_indigo";

export interface ButtonStylingType {
  [key: string]: {
    default: string;
    hover: string;
    disabled: string;
  };
}

export const buttonSizes: { [key in SizeType]: string } = {
  sm: "h-7.5 px-3 text-workspace_3 rounded-lg",
  md: "h-10 px-4 text-workspace_1 rounded-lg",
  lg: "h-12 px-5 text-read_16 rounded-xl",
  xl: "h-14 px-6 text-read_18 rounded-xl",
};

export const iconSizes: { [key in SizeType]: number } = {
  sm: 15, // 13px text
  md: 17, // 15px text
  lg: 19, // 16px text
  xl: 21, // 18px text
};

export const buttonStyling: ButtonStylingType = {
  primary: {
    default: "bg-primary-color  border-none text-text-color_default_white ",
    hover:
      "hover:bg-primary-color-hover active:bg-primary-color-active active:text-text-color_default_white-active data-[state=open]:bg-primary-color-hover",
    disabled:
      "text-text-color_default_white-2 cursor-not-allowed! bg-primary-color-disabled",
  },
  secondary: {
    default:
      "border border-border-color_1 bg-background-color_900C text-text-color_2",
    hover:
      "hover:bg-background-color_800C hover:text-text-color_1 data-[state=open]:bg-background-color_800C data-[state=open]:text-text-color_1 data-[state=open]:border-border-color_2",
    disabled:
      "text-text-color_3 cursor-not-allowed! bg-background-color_900C border border-background-color_900C",
  },
  ghost_zinc: {
    default: " text-text-color_2",
    hover: "hover:bg-background-color_900C hover:text-text-color_1",
    disabled:
      "text-text-color_3 cursor-not-allowed! bg-transparent data-[state=open]:bg-background-color_800C data-[state=open]:text-text-color_1 ",
  },
  ghost_zinc_2: {
    default: " text-text-color_2",
    hover: "hover:bg-background-color_800C hover:text-text-color_1!",
    disabled:
      "text-text-color_3 cursor-not-allowed! bg-transparent data-[state=open]:bg-background-color_800C data-[state=open]:text-text-color_1 ",
  },
  surface_indigo: {
    default:
      "bg-surface-indigo-bg inset-ring inset-ring-surface-indigo-border text-rdx-indigo-fg",
    hover:
      "hover:inset-ring-surface-indigo-border-active active:bg-surface-indigo-bg-active active:inset-ring-surface-indigo-border-active data-[state=open]:bg-surface-indigo-bg-active data-[state=open]:inset-ring-surface-indigo-border-active data-[state=open]:text-rdx-indigo-fg-2",
    disabled: "opacity-50 cursor-not-allowed!",
  },
  surface: {
    default:
      "bg-surface-bg inset-ring inset-ring-surface-border text-surface-fg",
    hover:
      "hover:inset-ring-surface-border-active active:bg-surface-bg-active active:inset-ring-surface-border-active data-[state=open]:bg-surface-bg-active data-[state=open]:inset-ring-surface-border-active data-[state=open]:text-surface-fg-2",
    disabled: "opacity-50 cursor-not-allowed!",
  },
  surface_indigo_2: {
    default:
      "bg-surface-indigo-bg inset-ring inset-ring-surface-indigo-border  text-rdx-indigo-fg-2",
    hover:
      "hover:inset-ring-surface-indigo-border-active  active:bg-surface-indigo-bg-active active:inset-ring-surface-indigo-border-active data-[state=open]:bg-surface-indigo-bg-active data-[state=open]:inset-ring-surface-indigo-border-active data-[state=open]:text-rdx-indigo-fg-2",
    disabled: "opacity-50 cursor-not-allowed!",
  },
  destructive: {
    default:
      "bg-surface-red-bg inset-ring inset-ring-surface-red-border  text-rdx-red-fg",
    hover:
      "hover:inset-ring-surface-red-border-active  active:bg-surface-red-bg-active active:inset-ring-surface-red-border-active data-[state=open]:bg-surface-red-bg-active data-[state=open]:inset-ring-surface-red-border-active data-[state=open]:text-rdx-red-fg-2",
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
