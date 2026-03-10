"use client"
import React from "react";
import { Avatar, AvatarFallback, AvatarImage, ExternalLink, FxButton, LUCIDE_WORKSPACE_ICON_SIZE, WorkSpaceLinkList } from "@fluctux/ui";
import {
  HomeIcon,
  ShoppingCartIcon,
  PackageIcon,
  UsersIcon,
  FileTextIcon,
  BarChart2Icon,
  TagIcon,
  PaletteIcon,
  LayoutIcon,
  PenToolIcon,
  TruckIcon,
  CreditCardIcon,
  ShieldIcon,
  StoreIcon,
  type LucideIcon,
  LogOut,
  Settings,
} from "lucide-react";

type SidebarMenuListType = {
  [key: string]: {
    label?: string;
    items: {
      label: string;
      slug?: string;
      value?: string;
      icon?: LucideIcon;
    }[];
  };
};

const SIDEBAR_ADMIN_MENU_LIST: SidebarMenuListType = {
  Primary: {
    items: [
      { label: "Dashboard", icon: HomeIcon, slug: "#" },
      { label: "Orders", icon: ShoppingCartIcon, slug: "#" },
      { label: "Products", icon: PackageIcon, slug: "#" },
      { label: "Customers", icon: UsersIcon, slug: "#" },
      { label: "Analytics", icon: BarChart2Icon, slug: "#" },
      { label: "Discounts", icon: TagIcon, slug: "#" },
      { label: "Blogs", icon: FileTextIcon, slug: "#" },
    ],
  },
  Appearance: {
    label: "Appearance",
    items: [
      { label: "Menus", icon: LayoutIcon, slug: "#" },
      { label: "Themes", icon: PaletteIcon, slug: "#" },
      { label: "Theme Builder", icon: PenToolIcon, slug: "#" },
    ],
  },
  Store: {
    label: "Store",
    items: [
      { label: "Shipping", icon: TruckIcon, slug: "#" },
      { label: "Payment Methods", icon: CreditCardIcon, slug: "#" },
    ],
  },
  Admin: {
    label: "Admin",
    items: [
      { label: "Team Management", icon: ShieldIcon, slug: "#" },
      { label: "Sellers", icon: StoreIcon, slug: "#" },
    ],
  },
};

export const Sidebar = () => {
  return (
    <div className="w-[250px] h-screen border-r border-border-color_1 overflow-hidden shrink-0">
      <div className="w-full h-[60px] border-b border-border-color_1 flex justify-start items-center gap-3 p-2">
        <Avatar className="rounded-tiny shrink-0">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="leading-4.5">
          <h1 className="text-workspace_1 font-medium">My Site Admin</h1>
          <ExternalLink
            linkLabel="example.com"
            className="text-workspace_3 text-text-color_2 "
          />
        </div>
      </div>
      <div
        className="w-full h-[calc(100%-120px)] overflow-y-auto overflow-x-hidden [scrollbar-width:thin]
  [scrollbar-color:transparent_transparent]
  hover:[scrollbar-color:var(--color-zinc-800)_transparent]
  transition-al"
      >
        <div className="w-full p-2">
          {
            Object.entries(SIDEBAR_ADMIN_MENU_LIST).map(([Key, data],i) => {
             return  <div key={`${Key.toLowerCase()}-${i}`} className=" mb-3">
                <p className="text-workspace_3 font-medium text-text-color_3 px-2">{data.label}</p>
                <ul>
                  {
                    data.items.map((item, j) => {
                      return <WorkSpaceLinkList href={item.slug} key={`${(item.slug ?? item.value)?.toString().toLowerCase()}-${j}`}   icon={item.icon}  >
                        {item.label}
                      </WorkSpaceLinkList>
                    })
                  }
                </ul>
              </div>
            })
          }
        </div>
      </div>
 
        <div className="w-full h-[60px] border-t border-border-color_1 flex justify-start items-center gap-3 p-2">
        <Avatar className="shrink-0">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="flex justify-between items-center gap-3">

        <div className="leading-4.5">
          <h1 className="text-workspace_1 font-medium">Nimul Islam Mahin</h1>
          <p className="text-workspace_3 text-text-color_3 font-medium">nimulmahin@gmail.com</p>
        </div>
        <FxButton className="w-[30px]! h-[30px]! p-0!  flex justify-center items-center " variant="secondary">
          <Settings size={LUCIDE_WORKSPACE_ICON_SIZE}/>
        </FxButton>
        </div>
   
      </div>
    </div>
  );
};
