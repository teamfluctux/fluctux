"use client";
import {
  ComboBox,
  FxButton,
  FxCommandBox,
  IssueIcon,
  LUCIDE_WORKSPACE_ICON_SIZE,
} from "@fluctux/ui";
import React from "react";

import { ComboboxDataType } from "@fluctux/ui";
import { ChevronsUpDownIcon, X } from "lucide-react";

import { TbAlertOctagonFilled } from "react-icons/tb";

const combos: ComboboxDataType[] = [
  { value: "react", label: "React", icon: TbAlertOctagonFilled, image: "" },
  { value: "nextjs", label: "Next.js", icon: TbAlertOctagonFilled, image: "" },
  { value: "vue", label: "Vue", icon: TbAlertOctagonFilled, image: "" },
  { value: "svelte", label: "Svelte", icon: TbAlertOctagonFilled, image: "" },
];

{
  /* checkbox */
}
// {combos.map((combo) => {
//   const Icon = combo.icon;
//   return (
//     <Label
//       key={combo.value}
//       className="hover:bg-background-color_800C transition-colors text-text-color_4 hover:!text-text-color_1 justify-start items-center gap-2 px-2 py-2 rounded-tiny"
//       >
//       <Checkbox />
//       <div className="flex justify-start items-center gap-2">
//         {Icon && (
//           <Icon className={`${combo.iconClassName}`} />
//         )}
//         {combo.label}
//       </div>
//     </Label>
//   );
// })}

export const KanbanPopup = () => {
  const [value, setValue] = React.useState<string>(combos[0]?.value as string);

  return (
    <FxCommandBox
      open={true}
      className="max-w-[800px] w-full max-h-[500px] h-full "
      containerClasses="!bg-background-color_925C "
    >
      <div className="w-full h-[40px] border-b border-border-color_1 px-1 ">
        <div className="flex justify-between items-center w-full h-full">
          <div className="flex justify-start items-center gap-2 w-fit flex-shrink-0">
            <ComboBox
              onComboDataSelect={(value) => setValue(value)}
              currentValue={value}
              data={combos}
              popoverTriggerComponent={
                <FxButton
                  variant="secondary"
                  size="sm"
                  radius="tiny"
                  className="w-fit max-w-[120px] !gap-1.5 justify-between flex-shrink-0 !px-2 "
                >
                  <div>
                    <IssueIcon stateType="todo" />
                  </div>
                  <p className="one-line-ellipsis w-full">
                    {value
                      ? combos.find((combo) => combo.value === value)?.label
                      : "Undefined"}
                  </p>
                  <ChevronsUpDownIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </FxButton>
              }
            />

            <span className="text-text-color_2">/</span>
            <div className="flex-shrink-0">
              <h2 className="text-text-color_1 font-medium text-workspace_2">
                New Issue
              </h2>
            </div>
          </div>

          <div className="w-fit flex-shrink-0 flex justify-end items-center pr-1">
            <FxButton
              variant="ghost_zinc_2"
              className="!w-[25px] !h-[25px] !p-0"
              radius="tiny"
            >
              <X size={LUCIDE_WORKSPACE_ICON_SIZE} />
            </FxButton>
          </div>
        </div>
      </div>
      <div className="h-[calc(100%-140px)] w-full">
        <input
          name="issue_title"
          placeholder="Issue Title"
          className="text-read_20 font-medium outline-none border-none w-full bg-transparent px-4 pb-3 pt-3 placeholder:text-text-color_3"
        />
        <textarea
          name="issue_content"
          className="w-full resize-none border-none outline-none bg-transparent px-4 text-text-color_4 py-3 text-workspace_1 placeholder:text-text-color_3"
          placeholder="Description..."
        ></textarea>
      </div>

      <div className="w-full px-3 flex justify-between items-center h-[50px]">
        <div>
          <FxButton
            variant="secondary"
            role="combobox"
            size="sm"
            radius="tiny"
            className="w-fit justify-between flex-shrink-0 !px-2 !py-1 "
          >
            Nothing
          </FxButton>
        </div>
      </div>

      <div className="border-t border-border-color_1 h-[50px] w-full flex justify-between items-center">
        <div></div>
        <div className="px-2.5">
          <FxButton className="!text-workspace_2 !py-1" radius="tiny">
            Create Issue
          </FxButton>
        </div>
      </div>
    </FxCommandBox>
  );
};
