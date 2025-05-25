import {
  BookOpen,
  CircleUserRound,
  CreditCard,
  HeartHandshake,
  Logs,
  Settings,
  SquareSlash,
} from "lucide-react";
import { LUCIDE_WORKSPACE_ICON_SIZE } from "@fluctux/ui";

export const ICON_DEFAULT_COLOR = "var(--svg-default-color)";

export const PROJECT_VISIBILITY_OPTIONS = [
  {
    label: "Public",
    desc: " Anyone can see this project",
    id: "public",
    value: "public",
    svg: "",
  },
  {
    label: "Private",
    desc: " Only you can see this project",
    id: "private",
    value: "private",
    svg: "",
  },
  {
    label: "Friends",
    desc: " Only you and friends can see this project",
    id: "friends",
    value: "friends",
    svg: "",
  },
  {
    label: "Custom",
    desc: " Only you and selected people can see this project",
    id: "custom",
    value: "custom",
    svg: "",
  },
];

export const ORG_VISIBILITY_OPTIONS = [
  {
    label: "Public",
    desc: " Anyone can view.",
    id: "public",
    value: "PUBLIC",
    svg: "",
  },
  {
    label: "Private",
    desc: " Only you can view.",
    id: "private",
    value: "PRIVATE",
    svg: "",
  },
  {
    label: "Friends",
    desc: " Only you and friends view.",
    id: "friends",
    value: "FRIENDS",
    svg: "",
  },
  {
    label: "Custom",
    desc: " Only you and selected people view.",
    id: "custom",
    value: "CUSTOM",
    svg: "",
  },
];

export const TEAM_VISIBILITY_OPTIONS = [
  {
    label: "Public",
    desc: " Anyone can view.",
    id: "public",
    value: "public",
    svg: "",
  },
  {
    label: "Private",
    desc: " Only you can view.",
    id: "private",
    value: "private",
    svg: "",
  },
];

export const TEAM_CATEGORIES = [
  "Software",
  "Marketing",
  "Design",
  "Sales",
  "Product",
  "Operations",
  "Customer Support",
  "Human Resources",
  "Legal",
  "Finance",
  "IT",
  "Data Science",
  "Business",
];

export const ACCOUNT_MENU_ITEMS = [
  {
    label: "Account",
    slug: "#",
    icon: <CircleUserRound size={LUCIDE_WORKSPACE_ICON_SIZE} />,
  },
  {
    label: "Billing",
    slug: "#",
    icon: <CreditCard size={LUCIDE_WORKSPACE_ICON_SIZE} />,
  },
  {
    label: "Settings",
    slug: "#",
    icon: <Settings size={LUCIDE_WORKSPACE_ICON_SIZE} />,
  },
];

export const FIND_HELP_ITEMS = [
  {
    label: "Docs",
    slug: "#",
    icon: <BookOpen size={LUCIDE_WORKSPACE_ICON_SIZE} />,
  },
  {
    label: "Shortcuts",
    slug: "#",
    icon: <SquareSlash size={LUCIDE_WORKSPACE_ICON_SIZE} />,
  },
  {
    label: "Support",
    slug: "#",
    icon: <HeartHandshake size={LUCIDE_WORKSPACE_ICON_SIZE} />,
  },
];

export const WHATS_NEW_ITEMS = [
  {
    label: "Changelog",
    slug: "#",
    icon: <Logs size={LUCIDE_WORKSPACE_ICON_SIZE} />,
  },
];
