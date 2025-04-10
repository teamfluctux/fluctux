import { SizeType } from "../type";

export type OneListVariantType = "primary" | "secondary";

interface OneListStylingType {
  [key: string]: {
    default: string;
    hover: string;
    disabled: string;
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
    default: "",
    hover: "",
    disabled: "",
  },
  secondary: {
    default: "",
    hover: "",
    disabled: "",
  },
};

export const getOneListStyling = (
  variant: OneListVariantType = "primary",
  disabled: boolean = false,
  size?: SizeType
) => {
  const tempVariant = oneListStyling[variant];
  const tempSize = (size && oneListSize[size]) || "";
  const tempOneListStyling = `${tempVariant?.default} ${disabled ? tempVariant?.disabled : tempVariant?.hover} ${tempSize}`;
  return tempOneListStyling;
};
