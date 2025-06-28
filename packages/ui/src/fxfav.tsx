
import React from "react";
import { SizeType } from "./type";
import { FxFavSVGIcon } from "./icons/fav-icon";

interface FxFavIconPropsType {
  size?: keyof typeof iconSizeVariants;
  variant?: keyof typeof iconVariants;
  customSize?: number;
}

const iconSizeVariants: { [key in SizeType]: number } = {
  sm: 20,
  md: 30,
  lg: 50,
  xl: 80,
};

type IconVariantType = "light" | "dark" | "theme" | "default";

const iconVariants: { [key in IconVariantType]: string } = {
  light: "light",
  dark: "dark",
  theme: "theme",
  default: "default",
};

export function FxFavIcon({ size, variant, customSize }: FxFavIconPropsType) {
  const sizeVariant = size
    ? iconSizeVariants[size]
    : customSize
      ? customSize
      : iconSizeVariants.md;
  return (
    <>
      {variant !== iconVariants.default ? (
        variant === iconVariants.dark ? (
          <FxFavSVGIcon size={sizeVariant} color="#ffffff" />
        ) : variant === iconVariants.light ? (
          <FxFavSVGIcon size={sizeVariant} color="#000000" />
        ) : (
          <>
            <FxFavSVGIcon
              size={sizeVariant}
              color="#ffffff"
              className="dark:block hidden"
            />
            <FxFavSVGIcon
              size={sizeVariant}
              color="#000000"
              className="dark:hidden block"
            />
          </>
        )
      ) : (
        <FxFavSVGIcon size={sizeVariant} />
      )}
    </>
  );
}
