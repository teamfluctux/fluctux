import {
  Flag,
  GraduationCap,
  House,
  Inbox,
  Layers,
  LayoutDashboard,
  ListChecks,
  LucideIcon,
  Megaphone,
  PenLine,
  ReceiptText,
  UserRoundCheck,
  UsersRound,
} from "lucide-react";
import Link from "next/link";
import React from "react";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  WorkSpaceLinkList,
} from "@fluctux/ui";

type WorkspaceListType = {
  icon: LucideIcon;
  label: string;
  slug: string;
  order: number;
};

// remove from here. now its temporary
const WORKSPACELISTS: WorkspaceListType[] = [
  {
    icon: UsersRound,
    label: "Students",
    slug: "/orgid/students",
    order: 1,
  },
  {
    icon: GraduationCap,
    label: "Courses",
    slug: "/orgid/students",
    order: 2,
  },
  {
    icon: PenLine,
    label: "Exams",
    slug: "/orgid/exams",
    order: 3,
  },
  {
    icon: ListChecks,
    label: "Routines",
    slug: "/orgid/routines",
    order: 4,
  },
  {
    icon: UserRoundCheck,
    label: "Attendees",
    slug: "/orgid/attendees",
    order: 5,
  },
  {
    icon: GraduationCap,
    label: "Teachers",
    slug: "/orgid/teachers",
    order: 6,
  },
  {
    icon: Megaphone,
    label: "Notices",
    slug: "/orgid/notices",
    order: 7,
  },
  {
    icon: ReceiptText,
    label: "Forms",
    slug: "/orgid/forms",
    order: 8,
  },
];

export const SidebarBottom = () => {
  return (
    <>
      <div className="h-[calc(100%-107px)] w-full overflow-y-auto hide-scrollbar">
        <div className="pb-24">
          <ul className="p-2 ">
            <WorkSpaceLinkList icon={House}>Home</WorkSpaceLinkList>
            <WorkSpaceLinkList icon={LayoutDashboard}>
              Dashboard
            </WorkSpaceLinkList>
            <WorkSpaceLinkList icon={Layers}>Views</WorkSpaceLinkList>
            <WorkSpaceLinkList icon={Inbox} active>
              Inbox
            </WorkSpaceLinkList>
          </ul>

          <div className="p-2">
            <p className="text-workspace_3 pt-2 pb-1 font-weight_450 text-text-color_3 px-2">
              Teams
            </p>

            <ul>
              <WorkSpaceLinkList>
                <div className="*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:grayscale">
                  <Avatar className="w-[25px] h-[25px]">
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <Avatar className="w-[25px] h-[25px]">
                    <AvatarImage
                      src="https://github.com/leerob.png"
                      alt="@leerob"
                    />
                    <AvatarFallback>LR</AvatarFallback>
                  </Avatar>
                  <Avatar className="w-[25px] h-[25px]">
                    <AvatarImage
                      src="https://github.com/evilrabbit.png"
                      alt="@evilrabbit"
                    />
                    <AvatarFallback>ER</AvatarFallback>
                  </Avatar>
                </div>
                <div>
                  <p>My Team</p>
                  <p className="text-text-color_3 text-[10px] font-weight_450">
                    200+ Members
                  </p>
                </div>
              </WorkSpaceLinkList>
              <WorkSpaceLinkList>
                <div className="*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:grayscale">
                  <Avatar className="w-[25px] h-[25px]">
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <Avatar className="w-[25px] h-[25px]">
                    <AvatarImage
                      src="https://github.com/leerob.png"
                      alt="@leerob"
                    />
                    <AvatarFallback>LR</AvatarFallback>
                  </Avatar>
                  <Avatar className="w-[25px] h-[25px]">
                    <AvatarImage
                      src="https://github.com/evilrabbit.png"
                      alt="@evilrabbit"
                    />
                    <AvatarFallback>ER</AvatarFallback>
                  </Avatar>
                </div>
                <div>
                  <p className="one-line-ellipsis">Another Team</p>
                  <p className="text-text-color_3 text-[10px] font-weight_450">
                    200+ Members
                  </p>
                </div>
              </WorkSpaceLinkList>
            </ul>
          </div>

          <div className="p-2">
            <p className="text-workspace_3 pt-2 pb-1 font-weight_450 text-text-color_3 px-2">
              Workspace + Team
            </p>

            <ul>
              {WORKSPACELISTS.map((item, index) => {
                return (
                  <WorkSpaceLinkList key={index} icon={item.icon}>
                    {item.label}
                  </WorkSpaceLinkList>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
