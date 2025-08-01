"use client";
import React, { useEffect } from "react";
import DocSearchComponent from "./search/doc-search";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  FxButton,
  FxSeparator,
  CancelIcon,
  GithubCircleIcon,
  MenuTwoBarIcon,
} from "@fluctux/ui";
import { useToggleOpen } from "@fluctux/hooks";
import Image from "next/image";

export default function DocHeader() {
  const path_name = usePathname();
  const {
    isOpen: isDocHeaderMenuOpen,
    setOpen: setDocHeaderMenuOpen,
    toggle: toggleDocHeaderMenu,
  } = useToggleOpen({
    id: "doc-header-menu",
  });

  useEffect(() => {
    setDocHeaderMenuOpen(false);
  }, [path_name]);

  return (
    <header className="fixed w-full h-[64px] backdrop-blur-lg border-b border-border-color_1 fx-flex-between-ic pl-3 pr-3 z-[52]">
      <div className="fx-flex-cl gap-3 doc-header- backdrop-blur-lg">
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
        <FxSeparator orientation="vertical" size="30px" />
        <span className="text-text-color_2 text-[20px] font-medium">Docs</span>
      </div>
      <DocSearchComponent />
      <div
        className={`fx-flex-cr gap-3 doc-header-menu transition-all duration-150 ease-out ${isDocHeaderMenuOpen ? "right-0" : "right-[-155px]"}`}
      >
        <FxButton
          onClick={toggleDocHeaderMenu}
          className="w-[35px] h-[35px] rounded-[50%] flex-shrink-0 border-none bg-transparent hidden hover:bg-background-color_800C doc-header-menu-btn"
        >
          <MenuTwoBarIcon className={`${isDocHeaderMenuOpen && "hidden"}`} />
          <CancelIcon className={`${!isDocHeaderMenuOpen && "hidden"}`} />
        </FxButton>

        <GithubCircleIcon width={35} height={35} color="var(--foreground)" />
        <Link href={"/login"}>
          <FxButton
            variant="primary"
            className="w-[100px] h-[35px] fx-flex-center font-medium text-white"
            radius="tablet"
          >
            Sign in
          </FxButton>
        </Link>

        {/* auth by session */}
        {/* <div className='group hover:outline outline-[3px] cursor-pointer outline-[var(--secondary-hover-bg)]  w-[35px] h-[35px] overflow-hidden rounded-[50%] flex-shrink-0'>

          <Image src={""} width={250} height={250} alt='Profile' className='object-cover object-center w-full h-full  border border-border-color_1  ' />
      </div> */}
      </div>
    </header>
  );
}
