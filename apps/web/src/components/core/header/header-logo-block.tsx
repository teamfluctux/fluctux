import Image from "next/image";
import React from "react";

export const HeaderLogoBlock = () => {
  return (
    <div>
      <Image
        src={"/fluctux-logos/fluctux-logo-default-dark.png"}
        width={500}
        height={500}
        alt="logo"
        priority={true}
        className="w-[78px] dark:block hidden"
      />
      <Image
        src={"/fluctux-logos/fluctux-logo-default-light.png"}
        width={500}
        height={500}
        alt="logo"
        priority={true}
        className="w-[78px] dark:hidden block"
      />
    </div>
  );
};
