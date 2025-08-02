import { CircleSlash2, Eclipse, LucideIcon, SunDim } from "lucide-react";
import { ObjectListArrayType } from "@fluctux/types";
import {
  Award,

  CalendarClock,
  CalendarDays,

  CreditCard,
  File,
  FileUser,
  Flag,
  GraduationCap,
  HeartHandshake,
  Image,
  LayoutDashboard,

  NotebookPen,
  SquarePlay,
  UserRound,
  X,
} from "lucide-react";

export const getWorkSpaceHeaderMenuIcon: Record<string, LucideIcon> = {
  day: SunDim,
  morning: Eclipse,
  none: CircleSlash2,
};



type StudentsAdminSidebarNavItemsType = ObjectListArrayType;
export const STUDENTS_ADMIN_SIDEBAR_NAV_ITEMS: StudentsAdminSidebarNavItemsType = {
  Academic: [
    {
      label: "Dashboard",
      slug: "",
      icon: LayoutDashboard,
    },
    {
      label: "Courses",
      slug: "",
      icon: GraduationCap,
    },
    {
      label: "Exams",
      slug: "",
      icon: NotebookPen,
    },
    {
      label: "Class Schedules",
      slug: "",
      icon: CalendarClock,
    },
    {
      label: "Academic Calendar",
      slug: "",
      icon: CalendarDays,
    },
  ],
  Documents: [
    {
      label: "Notices",
      slug: "",
      icon: Flag,
    },
    {
      label: "Certificates",
      slug: "",
      icon: Award,
    },
  ],
  "Media & Files": [
    {
      label: "Images",
      slug: "",
      icon: Image,
    },
    {
      label: "Videos",
      slug: "",
      icon: SquarePlay,
    },
    {
      label: "Other Files",
      slug: "",
      icon: File,
    },
  ],
  "Students Information": [
    {
      label: "Personal Details",
      slug: "",
      icon: UserRound,
    },
    {
      label: "Addmission Form",
      slug: "",
      icon: FileUser,
    },
  ],
  Financial: [
    {
      label: "Payment History",
      slug: "",
      icon: CreditCard,
    },
    {
      label: "Financial Aid",
      slug: "",
      icon: HeartHandshake,
    },
  ],
};

