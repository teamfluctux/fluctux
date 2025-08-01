import { SizeType } from "../type";

export type OneListVariantType = "primary" | "secondary";

interface OneListStylingType {
  [key: string]: {
    default: string;
    hover: string;
    disabled: string;
    active: string;
  };
}

export const oneListSize: { [key in SizeType]: string } = {
  sm: "",
  md: "",
  lg: "",
  xl: "",
};

const oneListStyling: OneListStylingType = {
  primary: {
    default: "*:text-workspace_2 text-text-color_4 font-medium select-none ",
    hover: "hover:bg-[var(--background-color-800C)]",
    disabled:
      "text-text-color_2 *:cursor-not-allowed opacity-60 border border-border-color_2 *:pointer-events-none",
    active:
      "text-text-indigo-color_1 bg-[var(--indigo-transparent-2nd)] hover:bg-[var(--indigo-transparent-1st)] ",
  },
  secondary: {
    default: "",
    hover: "",
    disabled: "",
    active: "",
  },
};

export const getOneListStyling = (
  variant: OneListVariantType = "primary",
  disabled: boolean = false,
  active: boolean = false,
  size?: SizeType
) => {
  const tempVariant = oneListStyling[variant];
  const tempSize = (size && oneListSize[size]) || "";
  const tempOneListStyling = `${tempVariant?.default} ${disabled ? tempVariant?.disabled : tempVariant?.hover} ${tempSize} ${!disabled && active ? tempVariant?.active : ""}`;
  return tempOneListStyling;
};
