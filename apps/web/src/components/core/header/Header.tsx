import React from "react";
import { HeaderLogoBlock } from "./header-logo-block";
import { HeaderMainMenu } from "./header-main-menu";
import { HeaderAuthBlock } from "./header-auth-block";

export const Header = () => {
  return (
    <header className="w-full h-[64px] border-b border-border-color_1 fixed backdrop-blur-md top-0 left-0 z-50 main-header fx-secondary-bg fx-flex-center pl-3 pr-3">
      <div className="fx-flex-between-ic fx-layout-max-1200">
        <HeaderLogoBlock />
        <HeaderMainMenu />
        <HeaderAuthBlock />
      </div>
    </header>
  );
};
