import {
  GlobeIcon,
  LockIcon,
  ProjectGreenIcon,
  SettingsIcon,
  TwoPeopleIcon,
  ProjectPurpleIcon,
  ProjectPinkIcon,
  ProjectYellowIcon,
  ProjectBlueIcon,
  ProjectRedIcon,
  ProjectOrangeIcon,
} from "@fluctux/ui";
import { BookOpen, CircleUserRound, CreditCard, HeartHandshake, Logs, Settings, SquareSlash } from "lucide-react";
import {LUCIDE_WORKSPACE_ICON_SIZE} from "@fluctux/ui"

export const ICON_DEFAULT_COLOR = "var(--svg-default-color)"

export const PROJECT_VISIBILITY_OPTIONS = [
  {
    label: "Public",
    desc: " Anyone can see this project",
    id: "public",
    value: "public",
    svg: <GlobeIcon />,
  },
  {
    label: "Private",
    desc: " Only you can see this project",
    id: "private",
    value: "private",
    svg: <LockIcon />,
  },
  {
    label: "Friends",
    desc: " Only you and friends can see this project",
    id: "friends",
    value: "friends",
    svg: <TwoPeopleIcon />,
  },
  {
    label: "Custom",
    desc: " Only you and selected people can see this project",
    id: "custom",
    value: "custom",
    svg: <SettingsIcon />,
  },
];

export const ORG_VISIBILITY_OPTIONS = [
  {
    label: "Public",
    desc: " Anyone can view.",
    id: "public",
    value: "PUBLIC",
    svg: <GlobeIcon />,
  },
  {
    label: "Private",
    desc: " Only you can view.",
    id: "private",
    value: "PRIVATE",
    svg: <LockIcon />,
  },
  {
    label: "Friends",
    desc: " Only you and friends view.",
    id: "friends",
    value: "FRIENDS",
    svg: <TwoPeopleIcon />,
  },
  {
    label: "Custom",
    desc: " Only you and selected people view.",
    id: "custom",
    value: "CUSTOM",
    svg: <SettingsIcon />,
  },
];

export const PROJECT_COLORS = [
  {
    id: "green",
    value: "--project-green",

    svg: <ProjectGreenIcon width={24} height={24} />,
  },
  {
    id: "purple",
    value: "--project-purple",

    svg: <ProjectPurpleIcon width={24} height={24} />,
  },
  {
    id: "pink",
    value: "--project-pink",

    svg: <ProjectPinkIcon width={24} height={24} />,
  },
  {
    id: "yellow",
    value: "--project-yellow",

    svg: <ProjectYellowIcon width={24} height={24} />,
  },
  {
    id: "blue",
    value: "--project-blue",

    svg: <ProjectBlueIcon width={24} height={24} />,
  },
  {
    id: "red",
    value: "--project-red",

    svg: <ProjectRedIcon width={24} height={24} />,
  },
  {
    id: "orange",
    value: "--project-orange",

    svg: <ProjectOrangeIcon width={24} height={24} />,
  },
];

export const TEAM_VISIBILITY_OPTIONS = [
  {
    label: "Public",
    desc: " Anyone can view.",
    id: "public",
    value: "public",
    svg: <GlobeIcon />,
  },
  {
    label: "Private",
    desc: " Only you can view.",
    id: "private",
    value: "private",
    svg: <LockIcon />,
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
    icon: <CircleUserRound color={ICON_DEFAULT_COLOR} size={LUCIDE_WORKSPACE_ICON_SIZE} />
  },
  {
    label: "Billing",
    slug: "#",
    icon: <CreditCard color={ICON_DEFAULT_COLOR} size={LUCIDE_WORKSPACE_ICON_SIZE} />
  },
  {
    label: "Settings",
    slug: "#",
    icon: <Settings color={ICON_DEFAULT_COLOR} size={LUCIDE_WORKSPACE_ICON_SIZE} />
  }
]

export const FIND_HELP_ITEMS = [
  {
    label: "Docs",
    slug: "#",
    icon: <BookOpen color={ICON_DEFAULT_COLOR} size={LUCIDE_WORKSPACE_ICON_SIZE} />
  },
  {
    label: "Shortcuts",
    slug: "#",
    icon: <SquareSlash color={ICON_DEFAULT_COLOR} size={LUCIDE_WORKSPACE_ICON_SIZE} />
  },
  {
    label: "Support",
    slug: "#",
    icon: <HeartHandshake color={ICON_DEFAULT_COLOR} size={LUCIDE_WORKSPACE_ICON_SIZE} />
  }
]

export const WHATS_NEW_ITEMS = [
  {
    label: "Changelog",
    slug: "#",
    icon: <Logs color={ICON_DEFAULT_COLOR} size={LUCIDE_WORKSPACE_ICON_SIZE} />
  }
]