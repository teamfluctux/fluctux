import type { SettingsSidebarMenuListType } from "@/types";
import {
  SettingsIcon,
  ActivityIcon,
  ServerIcon,
  PaletteIcon,
  LayoutDashboardIcon,
  Code2Icon,
  ShieldIcon,
  StoreIcon,
  UserCircleIcon,
  LogOutIcon,
  ShieldCheckIcon,
  ReceiptIcon,
  KeyRoundIcon,
  Bell as BellIcon,
  PanelLeft as PanelLeftIcon,
  ScanSearchIcon,
  WebhookIcon,
  PlugIcon,
} from "lucide-react";

/**
 * Represents the structure for a settings page header metadata.
 */
type SettingsTitleDescType = {
  title: string;
  desc: string;
};

/**
 * A list of all valid settings route slugs used for type safety and routing.
 */
export const SETTINGS_SLUGS = [
  "/settings",
  "/settings/site-status",
  "/settings/website-details",
  "/settings/appearance",
  "/settings/sidebar-access",
  "/settings/custom-code",
  "/settings/auth-forms",
  "/settings/team",
  "/settings/sellers",
  "/settings/dashboard",
  "/settings/notifications",
  "/settings/billing",
  "/settings/api",
  "/settings/account",
  "/settings/scrapers"
] as const;

/**
 * Type representing any valid settings URL path.
 */
export type SettingsSlugType = (typeof SETTINGS_SLUGS)[number];

/**
 * Mapping of settings slugs to their respective display titles and descriptions.
 */
export const SETTINGS_TITLE_DESC: Record<
  SettingsSlugType,
  SettingsTitleDescType
> = {
  "/settings": {
    title: "General Settings",
    desc: "Configure your store's basic info like name, logo, currency, timezone and language.",
  },
  "/settings/site-status": {
    title: "Site Status & Performance",
    desc: "Monitor your store's uptime, speed scores and server response health.",
  },
  "/settings/website-details": {
    title: "Website Details",
    desc: "View your store's technical details like server location, domain, and hosting info.",
  },
  "/settings/appearance": {
    title: "Appearance",
    desc: "Customize your admin panel's theme, colors and display preferences.",
  },
  "/settings/sidebar-access": {
    title: "Sidebar Access Control",
    desc: "Control which sidebar menu items are visible to your sellers and team members.",
  },
  "/settings/custom-code": {
    title: "Header & Footer Code",
    desc: "Inject custom scripts like Facebook Pixel, Google Analytics or any third-party tracking code.",
  },
  "/settings/auth-forms": {
    title: "Authentication Forms",
    desc: "Customize and configure your seller and team login & signup forms.",
  },
  "/settings/team": {
    title: "Team",
    desc: "Invite and manage your admin team members and their roles.",
  },
  "/settings/sellers": {
    title: "Sellers",
    desc: "Manage your registered sellers, their access and account status.",
  },
  "/settings/billing": {
    title: "Billing & Plans",
    desc: "View your current Fluctux plan, usage and manage your subscription.",
  },
  "/settings/api": {
    title: "API Keys",
    desc: "Generate and manage API keys to integrate your store with external services.",
  },
  "/settings/account": {
    title: "Account Settings",
    desc: "Update your personal profile, email, password and security preferences.",
  },
  "/settings/dashboard": {
    title: "Dashboard Settings",
    desc: "Customize your dashboard layout, widgets and default views.",
  },
  "/settings/notifications": {
    title: "Notifications",
    desc: "Manage your notification preferences, alerts and communication settings.",
  },
  "/settings/scrapers": {
    title: "Scraper Apps",
    desc: "Manage and install scraper applications to import products from external sources.",
  },
};

/**
 * Configuration for the settings page sidebar navigation, grouped by categories.
 */
export const ADMIN_SETTINGS_SIDEBAR: SettingsSidebarMenuListType = {
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
        label: "Dashboard",
        icon: LayoutDashboardIcon,
        slug: "/settings/dashboard",
      },
      {
        label: "Sidebar Access Control",
        icon: PanelLeftIcon,
        slug: "/settings/sidebar-access",
      },
      {
        label: "Notifications",
        icon: BellIcon,
        slug: "/settings/notifications",
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
  Integrations: {
    label: "Integrations",
    items: [
      {
        label: "Scraper Apps",
        icon: ScanSearchIcon,
        slug: "/settings/scrapers",
      },
      // {
      //   label: "Webhooks",
      //   icon: WebhookIcon,
      //   slug: "/settings/webhooks",
      // },
      // {
      //   label: "Connected Apps",
      //   icon: PlugIcon,
      //   slug: "/settings/connected-apps",
      // },
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
