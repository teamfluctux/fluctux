import Image from "next/image";
import React from "react";

export const Header = () => {
  return (
    <header className="w-full h-[64px] border-b border-border-color_1 fixed top-0 left-0 z-50 main-header fx-secondary-bg fx-flex-center pl-3 pr-3">
      <div className="fx-flex-between-ic fx-default-layout">
        <div>
          <Image
            src={"/fluctux-logos/fluctux-logo-default-dark.png"}
            width={500}
            height={500}
            alt="logo"
            priority={true}
            className="w-[90px] dark:block hidden"
          />
          <Image
            src={"/fluctux-logos/fluctux-logo-default-light.png"}
            width={500}
            height={500}
            alt="logo"
            priority={true}
            className="w-[90px] dark:hidden block"
          />
        </div>
      </div>
    </header>
  );
};
