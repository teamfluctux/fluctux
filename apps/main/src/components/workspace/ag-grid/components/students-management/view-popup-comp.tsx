import { studentManagementStore } from "@/services/stores";
import { FxButton, FxCommandBox, LUCIDE_WORKSPACE_ICON_SIZE } from "@fluctux/ui";
import { X } from "lucide-react";
import { observer } from "mobx-react";

export const ViewStudentPopupObserver = observer(() => {
  return (
    <FxCommandBox
      open={studentManagementStore.isViewStudentPopup}
      className="max-w-[1000px] w-full max-h-[600px] h-full"
      containerClasses=" "
    >
      <FxButton onClick={() => studentManagementStore.setViewStudentPopup(false, "")}>
        <X  size={LUCIDE_WORKSPACE_ICON_SIZE} />
      </FxButton>
      {studentManagementStore.getStudentID}
    </FxCommandBox>
  );
});
