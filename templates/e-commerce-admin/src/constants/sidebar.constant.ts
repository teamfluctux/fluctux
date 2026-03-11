import type { MenuListType } from "@fluctux/types";
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
  Users,
} from "lucide-react";

export const SIDEBAR_ADMIN_MENU_LIST: MenuListType = {
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