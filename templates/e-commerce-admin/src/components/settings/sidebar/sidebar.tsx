"use client";
import type { SidebarMenuListType } from "@/types";
import {
  ScrollArea,
  WorkSpaceLinkList,
  WorkSpaceList,
  type WorkSpaceListProps,
} from "@fluctux/ui";
import {
  SettingsIcon,
  ActivityIcon,
  ServerIcon,
  PaletteIcon,
  LayoutDashboardIcon,
  Code2Icon,
  LogInIcon,
  UserPlusIcon,
  ShieldIcon,
  StoreIcon,
  UserCircleIcon,
  LogOutIcon,
  ShieldCheckIcon,
  ReceiptIcon,
  KeyRoundIcon,
} from "lucide-react";
import { usePathname } from "next/navigation";

const ADMIN_SETTINGS_SIDEBAR: SidebarMenuListType = {
  General: {
    label: "General",
    items: [
      {
        label: "General Settings",
        icon: SettingsIcon,
        slug: "/settings",
      },
      {
        label: "Site Status & Performance",
        icon: ActivityIcon,
        slug: "/settings/site-status",
      },
      {
        label: "Website Details",
        icon: ServerIcon,
        slug: "/settings/website-details",
      },
    ],
  },
  Workspace: {
    label: "Workspace",
    items: [
      { label: "Appearance", icon: PaletteIcon, slug: "/settings/appearance" },
      {
        label: "Sidebar Access Control",
        icon: LayoutDashboardIcon,
        slug: "/settings/sidebar-access",
      },
      {
        label: "Header & Footer Code",
        icon: Code2Icon,
        slug: "/settings/custom-code",
      },
    ],
  },
  Access: {
    label: "Access & Auth",
    items: [
      {
        label: "Authentication Forms",
        icon: ShieldCheckIcon,
        slug: "/settings/auth-forms",
      },
      { label: "Team", icon: ShieldIcon, slug: "/settings/team" },
      { label: "Sellers", icon: StoreIcon, slug: "/settings/sellers" },
    ],
  },
  Fluctux: {
    label: "Fluctux",
    items: [
      {
        label: "Billing & Plans",
        icon: ReceiptIcon,
        slug: "/settings/billing",
      },
      { label: "API Keys", icon: KeyRoundIcon, slug: "/settings/api" },
    ],
  },
  Account: {
    label: "Account",
    items: [
      {
        label: "Account Settings",
        icon: UserCircleIcon,
        slug: "/settings/account",
      },
      { label: "Log Out", icon: LogOutIcon, value: "logout" },
    ],
  },
};

export const SettingsSidebar = () => {
  const path_name = usePathname();
  const handleLogOut = () => {
    alert("Logged out!");
  };

  const handleWorkspaceListClick: WorkSpaceListProps["onClickDo"] = (
    active,
    disabled,
    value,
    label
  ) => {
    if (value === "logout") handleLogOut();
  };

  return (
    <aside className="w-[320px] h-full  border-r border-border-color_1">
      <div className="sticky top-0 left-0 border-b border-border-color_1 bg-background-color_925C p-3 h-[95px] flex flex-col justify-center items-start">
        <h1 className="text-read_16 font-medium">Settings</h1>
        <p className="text-text-color_2 text-workspace_3 leading-4 mt-1 ">
          Configure and manage your store preferences, integrations, and account
          settings
        </p>
      </div>

      <ScrollArea className="w-full h-[calc(100%-95px)] p-3">
        {Object.entries(ADMIN_SETTINGS_SIDEBAR).map(([Key, data], i) => {
          return (
            <div key={`${Key}-${i}`} className=" mb-4">
              <p className="text-workspace_3 font-medium text-text-color_3 px-2 mb-1">
                {data.label}
              </p>
              <ul>
                {data.items.map((item, j) => {
                  return (
                    <>
                      {item.slug ? (
                        <WorkSpaceLinkList
                          active={path_name.endsWith(item.slug)}
                          href={item.slug}
                          key={`${item.slug ?? item.value}-${j}`}
                          icon={item.icon}
                        >
                          {item.label}
                        </WorkSpaceLinkList>
                      ) : (
                        <WorkSpaceList
                          onClickDo={handleWorkspaceListClick}
                          value={item.value}
                          key={`${item.slug ?? item.value}-${j}`}
                          icon={item.icon}
                        >
                          {item.label}
                        </WorkSpaceList>
                      )}
                    </>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </ScrollArea>
    </aside>
  );
};
