"use client";
import React from "react";
import {
  DiscordIcon,
  FxButton,
  LUCIDE_WORKSPACE_ICON_SIZE,
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@fluctux/ui";
import Link from "next/link";
import Image from "next/image";
import { Logs } from "lucide-react";

const ListItem = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) => {
  return (
    <NavigationMenuItem className="">
      <Link href={`${href}`}>
        <li className="text-workspace_2 text-text-color_2 hover:text-text-color_default_white px-2 hover:bg-background-color_850C font-medium py-1 rounded list-none">
          {children}
        </li>
      </Link>
    </NavigationMenuItem>
  );
};

const ResourcesListItem = ({
  href,
  label,
  desc,
}: {
  href: string;
  label: string;
  desc: string;
}) => {
  return (
    <Link href={`${href}`}>
      <div className="py-2 px-3 rounded hover:bg-background-color_850C w-full transition-colors">
        <h4 className="text-workspace_2 font-medium text-text-color_1">
          {label}
        </h4>
        <p className="text-workspace_3 text-text-color_3 font-medium">{desc}</p>
      </div>
    </Link>
  );
};

const ResourcesListItemWithImage = ({
  href,
  label,
  desc,
  image,
}: {
  href: string;
  label: string;
  desc: string;
  image?: string;
}) => {
  return (
    <Link href={`${href}`} className="h-full w-fit">
      <div className="w-[220px] relative h-full border-r border-border-color_1 transition-colors hover:bg-background-color_900C group">
        <div className="absolute opacity-0 group-hover:opacity-100 transition-all duration-300 inset-0 h-full w-full bg-transparent bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_14px] [&>div]:absolute [&>div]:left-0 [&>div]:right-0 [&>div]:top-0 [&>div]:-z-10 [&>div]:m-auto [&>div]:h-[310px] [&>div]:w-[310px] [&>div]:rounded-full [&>div]:opacity-20 [&>div]:blur-[100px]" />

        <div className="p-3 pl-5 relative z-10">
          <h3 className="font-medium text-workspace_1">{label}</h3>
          <p className=" text-workspace_3 text-text-color_3 leading-[1.1rem] mt-1 ">
            {desc}
          </p>
        </div>

        <div className="w-[200px] h-[180px] bg-background-color_900C pt-1 pl-1 z-10 absolute bottom-0 right-0 border-t border-l rounded-tl-[8px] border-border-color_1">
          <div className="w-full h-full bg-background-color_925C rounded-tl-tiny overflow-hidden">
            <Image
              src={`${image}`}
              width={500}
              height={500}
              alt={`${label}`}
              className="object-cover object-left-top w-full h-full"
            />
          </div>
        </div>
      </div>
    </Link>
  );
};

export const HeaderMainMenu = () => {
  return (
    <div>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className=" px-2 hover:bg-background-color_850C data-[state=open]:bg-background-color_850C font-medium py-1 rounded">
              <span className="text-workspace_2 text-text-color_2 group-data-[state=open]:text-text-color_1">
                Products
              </span>
            </NavigationMenuTrigger>

            <NavigationMenuContent className="">
              <div className="w-[900px] h-[300px]"></div>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger className="px-2 hover:bg-background-color_850C data-[state=open]:bg-background-color_850C font-medium py-1 rounded">
              <span className="text-workspace_2 text-text-color_2 group-data-[state=open]:text-text-color_1">
                Resources
              </span>
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="w-[900px] h-fit p-2">
                <div className="w-full h-[280px] bg-background-color_925C rounded overflow-hidden flex justify-center items-center">
                  <div className="flex justify-start items-center h-full flex-shrink-0">
                    <ResourcesListItemWithImage
                      href="#"
                      label="Fluctux Developers"
                      desc="Build, scale, and contribute with Fluctux"
                      image="/images/dummy_doc.png"
                    />
                    <ResourcesListItemWithImage
                      href="#"
                      label="User Guides"
                      desc="Your journey starts here"
                      image="/images/dummy_doc.png"
                    />
                  </div>

                  <div className="w-[220px] h-full flex-shrink-0 overflow-y-auto border-r border-border-color_1 scrollbar-hide">
                    <div className="relative h-[40px] w-full flex justify-start items-center">
                      <div className="w-full h-full absolute left-0 top-0 border-solid box-border border-b border-border-color_1 bg-[image:repeating-linear-gradient(315deg,_var(--border-color-1)_0,_var(--border-color-1)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed [--pattern-fg:var(--border-color-1)]/5 md:block dark:[--pattern-fg:var(--border-color-1)]/10"></div>
                      <h3 className="text-workspace_1 px-5 font-medium text-text-color_2 relative z-10">
                        Explore
                      </h3>
                    </div>
                    <div className="w-full mt-2 px-2">
                      <ResourcesListItem
                        href=""
                        label="Blog"
                        desc="insights, updates, and ideas"
                      />
                    </div>
                  </div>

                  <div className="w-full h-full overflow-y-auto scrollbar-hide">
                    <div className="relative h-[40px] w-full flex justify-start items-center">
                      <div className="w-full h-full absolute left-0 top-0 border-solid box-border border-b border-border-color_1 bg-[image:repeating-linear-gradient(315deg,_var(--border-color-1)_0,_var(--border-color-1)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed [--pattern-fg:var(--border-color-1)]/5 md:block dark:[--pattern-fg:var(--border-color-1)]/10"></div>
                      <h3 className="text-workspace_1 px-5 font-medium text-text-color_2 relative z-10">
                        Company
                      </h3>
                    </div>
                    <div className="w-full mt-2 px-2">
                      <ResourcesListItem
                        href=""
                        label="About"
                        desc="Meet the team behind Fluctux"
                      />
                      <ResourcesListItem
                        href=""
                        label="Contact"
                        desc="We’d love to hear from you."
                      />
                    </div>
                  </div>
                </div>

                <div className="w-full h-[70px] mt-2">
                  <div className="w-full h-full flex justify-between px-5 items-center gap-3">
                    <h3 className="text-workspace_1 text-text-color_2 font-medium">
                      Connect with the dev community, get instant support, and
                      stay updated in real-time!
                    </h3>
                    <FxButton
                      radius="primary"
                      className="text-workspace_2 !py-1.5 !gap-1"
                    >
                      <DiscordIcon color="#ffffff" size={22} />
                 <span>
                        Join Discord
                 </span>
                    
                    </FxButton>
                  </div>
                </div>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <ListItem href={""}>Pricing</ListItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};
