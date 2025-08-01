import { WorkSpaceLinkList } from "@/components/ui";
import { studentManagementStore } from "@/services/stores";
import {
  FxButton,
  FxCommandBox,
  FxOneList,
  LUCIDE_WORKSPACE_ICON_SIZE,
} from "@fluctux/ui";
import {
  Award,
  BadgeCheck,
  CalendarClock,
  CalendarDays,
  Clock,
  Copy,
  CreditCard,
  File,
  FileUser,
  Flag,
  GraduationCap,
  HeartHandshake,
  Image,
  LayoutDashboard,
  LucideIcon,
  NotebookPen,
  SquarePlay,
  UserRound,
  X,
} from "lucide-react";
import { observer } from "mobx-react";
import { useCallback, useEffect, useRef } from "react";
import { StudentDashboard } from "./dashboard";

type StudentsAdminSidebarNavItemsType = {
  [key: string]: {
    label: string;
    slug: string;
    icon: LucideIcon;
  }[];
};
const STUDENTS_ADMIN_SIDEBAR_NAV_ITEMS: StudentsAdminSidebarNavItemsType = {
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

const StudentDashboardObserver = observer(() => {
  useEffect(() => {
    studentManagementStore.setStudentType("university");
  }, []);
  return (
    <div className="w-full h-[5000px] p-3">
      <StudentDashboard />
    </div>
  );
});

export const ViewStudentPopupObserver = observer(() => {
  const popupBoxRef = useRef<HTMLDivElement | null>(null);

  return (
    <FxCommandBox
      open={studentManagementStore.isViewStudentPopup}
      className="max-w-[1000px] w-full max-h-[600px] h-full "
      containerClasses="!bg-background-color_925C "
    >
      <FxButton
        onClick={() => studentManagementStore.setViewStudentPopup(false, "")}
        variant="secondary"
        className="absolute top-5 right-5 w-[30px] h-[30px] rounded-tiny flex z-[3] justify-center items-center"
      >
        <X size={LUCIDE_WORKSPACE_ICON_SIZE} />
      </FxButton>

      <div className="w-full h-full overflow-y-auto" ref={popupBoxRef}>
        <div className="w-full">
          <div className="w-full h-fit relative border-b border-border-color_1">
            <div className="absolute w-[120px] h-[120px] bottom-5 left-8 rounded-rounded_10C border border-border-color_1 bg-background-color_800C "></div>
            <div className="h-[150px] w-full bg-blue-500"></div>
            <div className="w-full border-t border-border-color_1 h-[100px] flex items-center bg-background-color_900C pl-[170px]">
              <div>
                <div className="w-full h-full flex justify-start items-start gap-10">
                  <div>
                    <h2 className="text-read_20 font-medium">
                      Nimul Islam Mahin
                    </h2>
                    <p className="text-text-color_2 text-workspace_1 flex justify-start items-center gap-2 mt-0.5">
                      ID: 11225815246414{" "}
                      <Copy
                        size={LUCIDE_WORKSPACE_ICON_SIZE}
                        className="hover:text-text-color_1 transition-colors cursor-pointer"
                      />
                    </p>
                  </div>
                  <div>
                    <p className="text-text-color_3 text-workspace_1 font-weight_450">
                      University
                    </p>
                    <p className="text-workspace_1 max-w-[150px] one-line-ellipsis">
                      Southest University
                    </p>
                  </div>
                  <div>
                    <p className="text-text-color_3 text-workspace_1 font-weight_450">
                      Department
                    </p>
                    <p className="text-workspace_1 max-w-[150px] one-line-ellipsis">
                      Computer Science & Engneering
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-[auto_1fr] w-full h-full sticky top-0">
          <div className="w-[200px] p-2 h-[600px] border-r border-border-color_1 sticky top-0 overflow-y-auto hide-scrollbar ">
            {Object.entries(STUDENTS_ADMIN_SIDEBAR_NAV_ITEMS).map(
              ([key, value], i) => {
                return (
                  <div key={`${i}-${key}`} className="mb-5">
                    <p className="text-workspace_2 text-text-color_3 font-weight_450 px-2">
                      {key}
                    </p>
                    <div className="mt-1">
                      {value.map((item, j) => {
                        return (
                          <WorkSpaceLinkList
                            onClick={() => {
                              popupBoxRef.current?.scrollIntoView({
                                behavior: "smooth",
                              });
                            }}
                            icon={item.icon}
                            key={`${i}${j}-${item.slug}`}
                          >
                            {item.label}
                          </WorkSpaceLinkList>
                        );
                      })}
                    </div>
                  </div>
                );
              }
            )}
          </div>

          {/* right side content */}

          <StudentDashboardObserver />
        </div>
      </div>
      {/* {studentManagementStore.getStudentID} */}
    </FxCommandBox>
  );
});
