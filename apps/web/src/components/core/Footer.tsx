"use client";
import React from "react";
import Link from "next/link";
import {
  FOOTER_MAIN_ITEMS,
  FOOTER_MENUS,
  LEGAL_ITEMS,
  PLAN_ITEMS,
  RESOURCES_ITEMS,
  WORK_MANAGEMENT_ITEMS,
} from "@/constants/footer";
import { FacebookIcon, FxFavIcon, GithubIcon, TwitterSVG } from "@fluctux/ui";
import Image from "next/image";
import { ThemeToggler } from "@fluctux/ui";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="w-full mt-auto">
      <div className=" border-t border-border-color_1 w-full fx-flex-center  pt-16 bg-background-color_950C">
        <div className="w-full flex flex-col justify-start items-center">
          <div className="fx-layout-max-1200">
            <div className="w-full grid grid-cols-[repeat(auto-fill,minmax(150px,1fr))] gap-8 px-3 justify-center items-start">
              <div className="w-fit">
                <FxFavIcon variant="default" />
                <ul className="text-text-color_2 mt-3 leading-8">
                  {FOOTER_MAIN_ITEMS.map((item, i) => {
                    return (
                      <Link href={`${item.slug}`} key={i}>
                        <li className="hover:text-text-color_1 text-workspace_3 font-medium">
                          {item.label}
                        </li>
                      </Link>
                    );
                  })}
                </ul>
              </div>

              {Object.entries(FOOTER_MENUS).map(([listTitle, value], i) => {
                return (
                  <div key={i} className="w-fit">
                    <p className="text-workspace_3 font-medium">{listTitle}</p>
                    <ul className="text-text-color_2 mt-3 leading-8">
                      {value.map((item, i) => {
                        return (
                          <Link href={`${item.slug}`} key={i}>
                            <li className="hover:text-text-color_1 text-workspace_3  font-medium">
                              {item.label}
                            </li>
                          </Link>
                        );
                      })}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="w-full bg-background-color_900C pt-4 pb-4 mt-24 fx-flex-center">
            <div className="fx-layout-max-1200  fx-flex-between-ic px-3">
              <span className="text-text-color_2">
                &copy; {currentYear} Fluctux
              </span>
              <div className="fx-flex-center gap-3">
                <GithubIcon size={18} />
                <TwitterSVG size={22} />
                <FacebookIcon size={20} />
              </div>
              <ThemeToggler />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
