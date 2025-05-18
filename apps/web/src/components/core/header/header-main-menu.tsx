"use client"
import React from 'react'
import {
      NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@fluctux/ui"
import Link from 'next/link';


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


export const HeaderMainMenu = () => {
  return (
    <div>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className=" px-2 hover:bg-background-color_850C data-[state=open]:bg-background-color_850C font-medium py-1 rounded">
                  <span className="text-workspace_2 text-text-color_2 group-data-[state=open]:text-text-color_default_white">
                    Products
                  </span>
                </NavigationMenuTrigger>

                <NavigationMenuContent className="">
                  <ul className="w-[900px] h-[400px]">Hello 1</ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="px-2 hover:bg-background-color_850C data-[state=open]:bg-background-color_850C font-medium py-1 rounded">
                  <span className="text-workspace_2 text-text-color_2 group-data-[state=open]:text-text-color_default_white">
                    Resources
                  </span>
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="w-[900px] h-[500px] ">Hello 2</ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <ListItem href={""}>Pricing</ListItem>
              <ListItem href={""}>Contact</ListItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
  )
}


