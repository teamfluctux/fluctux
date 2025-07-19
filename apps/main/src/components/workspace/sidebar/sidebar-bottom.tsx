import { WorkSpaceLinkList } from "@/components/ui";
import {
  Flag,
  GraduationCap,
  House,
  Inbox,
  Layers,
  LayoutDashboard,
  ListChecks,
  Megaphone,
  PenLine,
  ReceiptText,
  UserRoundCheck,
  UsersRound,
} from "lucide-react";
import Link from "next/link";
import React from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@fluctux/ui";

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
            <WorkSpaceLinkList icon={Layers} active>
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
                  <p className="text-text-color_3 text-[10px] font-weight_450">200+ Members</p>
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
                  <p className="text-text-color_3 text-[10px] font-weight_450">200+ Members</p>
                </div>
              </WorkSpaceLinkList>
            </ul>
          </div>

          <div className="p-2">
            <p className="text-workspace_3 pt-2 pb-1 font-weight_450 text-text-color_3 px-2">
              Workspace + Team
            </p>

            <ul>
              <WorkSpaceLinkList icon={UsersRound} slug="/orgid/students">Students</WorkSpaceLinkList>
              <WorkSpaceLinkList icon={PenLine}>Exams</WorkSpaceLinkList>
              <WorkSpaceLinkList icon={ListChecks}>Routines</WorkSpaceLinkList>
              <WorkSpaceLinkList icon={UserRoundCheck}>
                Attendees
              </WorkSpaceLinkList>
              <WorkSpaceLinkList icon={GraduationCap}>
                Teachers
              </WorkSpaceLinkList>
              <WorkSpaceLinkList icon={Megaphone}>Notices</WorkSpaceLinkList>
              <WorkSpaceLinkList icon={ReceiptText}>Forms</WorkSpaceLinkList>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
