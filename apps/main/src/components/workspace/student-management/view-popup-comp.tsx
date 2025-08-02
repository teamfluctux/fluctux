import { studentManagementStore } from "@/services/stores";
import {
  FxButton,
  FxCommandBox,
  LUCIDE_WORKSPACE_ICON_SIZE,
  ObjectListArray,
} from "@fluctux/ui";
import { Copy, X } from "lucide-react";
import { observer } from "mobx-react";
import { useEffect } from "react";
import { StudentDashboard } from "./dashboard";
import { STUDENTS_ADMIN_SIDEBAR_NAV_ITEMS } from "@/constants/workspace";

export const ViewStudentPopupObserver = observer(() => {
  return (
    <FxCommandBox
      open={studentManagementStore.isViewStudentPopup}
      className="max-w-[1000px] w-full max-h-[600px] h-full "
      containerClasses="!bg-background-color_925C "
    >
      <FxButton
        onClick={() => studentManagementStore.setViewStudentPopup(false, "")}
        variant="secondary"
        className="absolute top-3 right-3 w-[30px] h-[30px] rounded flex z-[3] justify-center items-center"
      >
        <X size={LUCIDE_WORKSPACE_ICON_SIZE} />
      </FxButton>

      <div className="w-full h-full overflow-y-auto hide-scrollbar">
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

        <div className="flex w-full ">
          {/* Sidebar */}
          <div className="w-[200px] sticky top-0 h-[600px] flex-shrink-0 p-2 self-start  border-r border-border-color_1 overflow-y-auto hide-scrollbar">
            <ObjectListArray data={STUDENTS_ADMIN_SIDEBAR_NAV_ITEMS} />
          </div>

          {/* Content Section */}

          <div className="w-full h-full p-3 ">
            <StudentDashboard />
            <div className="h-[500px]"></div>
          </div>
        </div>
      </div>
      {/* {studentManagementStore.getStudentID} */}
    </FxCommandBox>
  );
});
