"use client";
import { FxButton, FxFavIcon, useThemeSwitcher } from "@fluctux/ui";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function AuthWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const path_name = usePathname();
  const current_path = path_name.split("/").pop();
  const { ThemeSwitcher } = useThemeSwitcher();

  return (
    <section className="flex justify-center items-center w-full h-screen overflow-y-auto hide-scrollbar">
      <div className="max-w-[420px] my-auto w-full p-3 pt-16 pb-24">
        <div className="w-fit fixed top-2 right-2">
          <ThemeSwitcher
            className="hover:bg-background-color_800C"
            activeIndicatorClassname="bg-background-color_750C"
          />
        </div>

        <div className=" w-fit rounded-[8px] p-2 mb-2 bg-gradient-to-tr dark:from-[var(--background)] from-[#b7b7b7] dark:to-[#232323] to-[#ffffff] relative login-fx-logo-box">
          <FxFavIcon size="sm" variant="theme" />
        </div>
        {children}
      </div>
      <div className="fixed bottom-0 left-0 w-full h-[60px] bg-background-color_900C fx-flex-center z-10">
        {current_path === "login" || path_name === "/" ? (
          <div className="flex justify-center items-center gap-2">
            <p className="text-text-color_2 font-medium text-workspace_1">New to Fluctux?</p>
            <Link href={"/signup"}>
              <FxButton
                variant="secondary"
                radius="tablet"
                size="sm"
                className="relative rgb-animation font-medium text-workspace_1"
              >
                Create Account
              </FxButton>
            </Link>
          </div>
        ) : (
          <div className="flex justify-center items-center gap-2">
            <p className="text-text-color_2 font-medium text-workspace_1">
              Already have an account?
            </p>
            <Link href={"/login"}>
              <FxButton
                variant="primary"
                radius="tablet"
                size="sm"
                className="font-medium pl-[20px] pr-[20px] text-white text-workspace_1"
              >
                Login
              </FxButton>
            </Link>
          </div>
        )}
      </div>

      {/* <div className="absolute inset-0 -z-10 h-full w-full bg-[var(--background)] [background:radial-gradient(125%_125%_at_50%_10%,var(--background)_40%,#6aeeae1b_100%)]"></div> */}
    </section>
  );
}
