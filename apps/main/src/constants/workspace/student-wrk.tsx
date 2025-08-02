import { CircleSlash2, Eclipse, LucideIcon, SunDim } from "lucide-react";
import { AreaDataType, ObjectListArrayType } from "@fluctux/types";
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
import { ChartConfig } from "@fluctux/ui";

export const getWorkSpaceHeaderMenuIcon: Record<string, LucideIcon> = {
  day: SunDim,
  morning: Eclipse,
  none: CircleSlash2,
};

// for workspace owner
type StudentsAdminSidebarNavItemsType = ObjectListArrayType;
export const STUDENTS_ADMIN_SIDEBAR_NAV_ITEMS: StudentsAdminSidebarNavItemsType =
  {
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


  // MSG_WARNING: temp constant =================== start
export const GradeConfig = {
  gpa: {
    label: "GPA",
    color: "var(--chart-1)",
  },
  avg_gpa: {
    label: "Average GPA",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig;

export const GradeChartAreas: AreaDataType[] = [
  {
    key: "gpa",
    config: {
      _id: "fillGPA",
      stroke: "var(--color-gpa)",
    },
  },
  {
    key: "avg_gpa",
    config: {
      _id: "fillAVGGPA",
      stroke: "var(--color-avg_gpa)",
    },
  },
];

// must match with key after --color-
// must match id with GradeChartAreas
export const GradeLinearGradientShapeData = {
  fillGPA: {
    stopColor_1: "var(--color-gpa)",
    stopColor_2: "var(--color-gpa)",
  },
  fillAVGGPA: {
    stopColor_1: "var(--color-avg_gpa)",
    stopColor_2: "var(--color-avg_gpa)",
  },
};

export const GradeChartData = [
  { semister: "1st Semister", gpa: 222, avg_gpa: 150 },
  { semister: "2nd Semister", gpa: 97, avg_gpa: 180 },
  { semister: "3rd Semister", gpa: 167, avg_gpa: 120 },
  { semister: "4th Semister", gpa: 242, avg_gpa: 260 },
  { semister: "5th Semister", gpa: 373, avg_gpa: 290 },
  { semister: "6th Semister", gpa: 301, avg_gpa: 340 },
  { semister: "7th Semister", gpa: 245, avg_gpa: 180 },
  { semister: "8th Semister", gpa: 409, avg_gpa: 320 },
];

// temp constant =================== end

// for individual students
// export const STUDENTS_ADMIN_SIDEBAR_NAV_ITEMS: StudentsAdminSidebarNavItemsType = {
//   Academic: [
//     {
//       label: "Dashboard",
//       slug: "",
//       icon: LayoutDashboard,
//     },
//     {
//       label: "Courses",
//       slug: "",
//       icon: GraduationCap,
//     },
//     {
//       label: "Exams",
//       slug: "",
//       icon: NotebookPen,
//     },
//     {
//       label: "Class Schedules",
//       slug: "",
//       icon: CalendarClock,
//     },
//     {
//       label: "Academic Calendar",
//       slug: "",
//       icon: CalendarDays,
//     },
//   ],
//   Documents: [
//     {
//       label: "Notices",
//       slug: "",
//       icon: Flag,
//     },
//     {
//       label: "Certificates",
//       slug: "",
//       icon: Award,
//     },
//   ],
//   "Media & Files": [
//     {
//       label: "Images",
//       slug: "",
//       icon: Image,
//     },
//     {
//       label: "Videos",
//       slug: "",
//       icon: SquarePlay,
//     },
//     {
//       label: "Other Files",
//       slug: "",
//       icon: File,
//     },
//   ],
//   "Students Information": [
//     {
//       label: "Personal Details",
//       slug: "",
//       icon: UserRound,
//     },
//     {
//       label: "Addmission Form",
//       slug: "",
//       icon: FileUser,
//     },
//   ],
//   Financial: [
//     {
//       label: "Payment History",
//       slug: "",
//       icon: CreditCard,
//     },
//     {
//       label: "Financial Aid",
//       slug: "",
//       icon: HeartHandshake,
//     },
//   ],
// };
