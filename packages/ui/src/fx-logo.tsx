import type { ThemeType, SizeType } from "@fluctux/types";
type FxLogoCategoryType = "default" | "blackAnWhite";
import Image from "next/image";

type FxLogoAppearanceType = {
  [key in FxLogoCategoryType]: {
    [key in ThemeType]: string;
  };
};

const FxLogoAppearance: FxLogoAppearanceType = {
  default: {
    dark: "/fluctux-logos/fluctux-logo-default-dark.png",
    light: "/fluctux-logos/fluctux-logo-default-light.png",
  },
  blackAnWhite: {
    dark: "",
    light: "",
  },
};

const LogoSize: { [key in SizeType]: string } = {
  sm: "w-[78px]",
  lg: "",
  md: "",
  xl: "",
};

export const FxLogo = ({
  appearance = "default",
  size = "sm",
}: {
  appearance?: keyof typeof FxLogoAppearance;
  size?: keyof typeof LogoSize;
}) => {
  const logoImage = FxLogoAppearance[appearance];
  const tempSize = LogoSize[size];
  return (
    <>
      <Image
        src={`${logoImage.dark}`}
        width={500}
        height={500}
        alt="logo"
        priority={true}
        className={` ${tempSize} dark:block hidden`}
      />
      <Image
        src={`${logoImage.light}`}
        width={500}
        height={500}
        alt="logo"
        priority={true}
        className={` ${tempSize} dark:hidden block`}
      />
    </>
  );
};
