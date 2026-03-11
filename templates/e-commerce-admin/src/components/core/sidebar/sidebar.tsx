"use client";
import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  ExternalLink,
  FxButton,
  LUCIDE_WORKSPACE_ICON_SIZE,
  ScrollArea,
  WorkSpaceLinkList,
} from "@fluctux/ui";
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
  Users,
} from "lucide-react";
import { getSidebarVisibility } from "@/utils";
import { usePathname, useRouter } from "next/navigation";
import type { SidebarMenuListType } from "@/types";

const sidebarVisibility = getSidebarVisibility();
const hiddenLookUp = Object.fromEntries(sidebarVisibility ?? []);

const SIDEBAR_ADMIN_MENU_LIST: SidebarMenuListType = {
  Primary: {
    items: [
      { label: "Dashboard", icon: HomeIcon, slug: "/dashboard" },
      { label: "Orders", icon: ShoppingCartIcon, slug: "/orders" },
      { label: "Products", icon: PackageIcon, slug: "/products" },
      { label: "Customers", icon: UsersIcon, slug: "/customers" },
      { label: "Analytics", icon: BarChart2Icon, slug: "/analytics" },
      { label: "Discounts", icon: TagIcon, slug: "/discounts" },
      { label: "Blogs", icon: FileTextIcon, slug: "/blogs" },
    ],
  },
  Appearance: {
    label: "Appearance",

    items: [
      { label: "Menus", icon: LayoutIcon, slug: "/menus" },
      { label: "Themes", icon: PaletteIcon, slug: "/themes" },
      { label: "Theme Builder", icon: PenToolIcon, slug: "/theme-builder" },
    ],
  },
  Store: {
    label: "Store",

    items: [
      { label: "Shipping", icon: TruckIcon, slug: "/shipping" },
      {
        label: "Payment Methods",
        icon: CreditCardIcon,
        slug: "/payment-methods",
      },
    ],
  },
  Admin: {
    label: "Admin",

    items: [
      { label: "Users", icon: Users, slug: "/users" },
      { label: "Team Management", icon: ShieldIcon, slug: "/team-management" },
      { label: "Sellers", icon: StoreIcon, slug: "/sellers" },
    ],
  },
};

export const Sidebar = () => {
  const router = useRouter();
  const path_name = usePathname();
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

      <ScrollArea className="w-full h-[calc(100%-120px)]">
        <div className="w-full p-2">
          {Object.entries(SIDEBAR_ADMIN_MENU_LIST).map(([Key, data], i) => {
            const hiddenItems = hiddenLookUp[i] ?? [];
            const visibleItems = data.items.filter(
              (_, j) => !hiddenItems.includes(j)
            );
            if (visibleItems.length === 0) return null;
            return (
              <div key={`${Key}-${i}`} className=" mb-4">
                <p className="text-workspace_3 font-medium text-text-color_3 px-2 mb-1">
                  {data.label}
                </p>
                <ul className="flex flex-col gap-0.5">
                  {visibleItems.map((item, j) => {
                    return (
                      <WorkSpaceLinkList
                        active={path_name === item.slug}
                        href={item.slug}
                        key={`${item.slug ?? item.value}-${j}`}
                        icon={item.icon}
                      >
                        {item.label}
                      </WorkSpaceLinkList>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </ScrollArea>

      <div className="w-full h-[60px] border-t border-border-color_1 flex justify-start items-center gap-3 p-2">
        <Avatar className="shrink-0">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="flex justify-between items-center gap-3">
          <div className="leading-4.5">
            <h1 className="text-workspace_1 font-medium">Nimul Islam Mahin</h1>
            <p className="text-workspace_3 text-text-color_3 font-medium">
              nimulmahin@gmail.com
            </p>
          </div>
          <FxButton
            onClick={() => router.push("/settings/account")}
            className="w-[30px]! h-[30px]! p-0!  flex justify-center items-center "
            variant="secondary"
          >
            <Settings size={LUCIDE_WORKSPACE_ICON_SIZE} />
          </FxButton>
        </div>
      </div>
    </div>
  );
};
