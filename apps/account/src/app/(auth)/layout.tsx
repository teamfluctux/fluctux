"use client";
import { ThemeToggler } from "@fluctux/shared";
import { FxButton, FxFavIcon } from "@fluctux/ui";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function AuthWrapperLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const path_name = usePathname();
  const current_path = path_name.split("/").pop();

  return (
    <section className="flex justify-center items-center w-full h-screen overflow-y-auto hide-scrollbar">
      <div className="max-w-[400px] my-auto w-full p-3 pt-16 pb-24">
        <div className="w-fit fixed top-2 right-2">
          <ThemeToggler />
        </div>
        <div className=" w-fit rounded-[8px] p-2 mb-5 bg-gradient-to-tr dark:from-[var(--background)] from-[#b7b7b7] dark:to-[#232323] to-[#ffffff] relative login-fx-logo-box mx-auto ">
          <FxFavIcon size="sm" variant="theme" />
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={path_name} // 👈 triggers exit+enter
            initial={{ opacity: 0, scale: 0.99, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.99, y: 20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </div>

      {path_name.split("/").length <= 2 && (
        <div className="fixed bottom-0 left-0 w-full h-[60px] bg-background-color_900C fx-flex-center z-10">
          {current_path === "login" || path_name === "/" ? (
            <div className="flex justify-center items-center gap-3">
              <p className="text-text-color_2 font-medium text-workspace_1">
                New to Fluctux?
              </p>
              <Link href={"/signup"}>
                <FxButton
                  variant="secondary"
                  radius="tablet"
                  className="relative rgb-animation !py-1.5"
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
                  variant="surface_indigo"
                  radius="tablet"
                  className="!py-1.5"
                >
                  Login
                </FxButton>
              </Link>
            </div>
          )}
        </div>
      )}
      {/* <div className="absolute inset-0 -z-10 h-full w-full bg-[var(--background)] [background:radial-gradient(125%_125%_at_50%_10%,var(--background)_40%,#6aeeae1b_100%)]"></div> */}
    </section>
  );
}
