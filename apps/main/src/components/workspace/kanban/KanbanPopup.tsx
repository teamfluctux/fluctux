"use client";
import {
  ComboBox,
  FxButton,
  FxCommandBox,
  IssueIcon,
  LUCIDE_WORKSPACE_ICON_SIZE,
  AvatarFallback,
  AvatarImage,
  Avatar,
  ButtonVariant,
  ViewLabelsWithOverlap
} from "@fluctux/ui";
import React, { useState } from "react";

import { ComboboxDataType } from "@fluctux/ui";
import { ChevronsUpDownIcon, X } from "lucide-react";
import { FaRegCircleUser } from "react-icons/fa6";
import { TbAlertOctagonFilled } from "react-icons/tb";
import { ComboBoxCheckbox } from "./ComboBoxCheckbox";
import { FaCircle } from "react-icons/fa6";
import { IconBase } from "react-icons/lib";

const EXISTED_KBN_TEMPLATES_METAINFO: ComboboxDataType[] = [
  { value: "react", label: "React", icon: TbAlertOctagonFilled, image: "" },
  { value: "nextjs", label: "Next.js", icon: TbAlertOctagonFilled, image: "" },
  { value: "vue", label: "Vue", icon: TbAlertOctagonFilled, image: "" },
  { value: "svelte", label: "Svelte", icon: TbAlertOctagonFilled, image: "" },
];

const EXISTED_MEMBERS: ComboboxDataType[] = [
  {
    value: "alice",
    label: "Alice Johnson",
    image: "https://github.com/alice.png",
  },
  {
    value: "bob",
    label: "Bob Smith",
    image: "https://github.com/bob.png",
  },
  {
    value: "charlie",
    label: "Charlie Brown",
    image: "https://github.com/charlie.png",
  },
  {
    value: "diana",
    label: "Diana Prince",
    image: "https://github.com/diana.png",
  },
  {
    value: "ethan",
    label: "Ethan Hunt",
    image: "https://github.com/ethan.png",
  },
  {
    value: "fiona",
    label: "Fiona Gallagher",
    image: "https://github.com/fiona.png",
  },
  {
    value: "george",
    label: "George Martin",
    image: "https://github.com/george.png",
  },
];


const EXISTED_TASK_LABELS: ComboboxDataType[] = [
  {
    value: "feature",
    label: "Feature",
    icon: FaCircle,
    iconClassName: "text-blue-500",
  },
  {
    value: "bug",
    label: "Bug",
    icon: FaCircle,
    iconClassName: "text-red-500",
  },
  {
    value: "improvement",
    label: "Improvement",
    icon: FaCircle,
    iconClassName: "text-green-500",
  },
  {
    value: "task",
    label: "Task",
    icon: FaCircle,
    iconClassName: "text-yellow-500",
  },
  {
    value: "research",
    label: "Research",
    icon: FaCircle,
    iconClassName: "text-purple-500",
  },
  {
    value: "other",
    label: "Other",
    icon: FaCircle,
    iconClassName: "text-gray-400",
  },
  {
    value: "refactor",
    label: "Refactor",
    icon: FaCircle,
    iconClassName: "text-pink-500",
  },
];

export const KanbanPopup = () => {
  const [kanbanTemplateMetaInfo, setKanbanTemplateInfo] =
    React.useState<ComboboxDataType>({ ...EXISTED_KBN_TEMPLATES_METAINFO[0]! });

  const [taskLabels, setTaskLabels] = useState<ComboboxDataType[]>([]);
  const [assignees, setAssignees] = useState<ComboboxDataType[]>([]);

  const handleLabelChecked = (value: string) => {
    setTaskLabels((prev) => {
      const exists = prev.find((item) => item.value === value);
      if (exists) {
        // Remove if already exists
        return prev.filter((item) => item.value !== value);
      } else {
        // Add new item
        const newTaskLabel = EXISTED_TASK_LABELS.find(
          (taskLabel) => taskLabel.value === value
        );
        return newTaskLabel ? [...prev, newTaskLabel] : prev;
      }
    });
  };

  
  const handleAssigneesChecked = (value: string) => {
    setAssignees((prev) => {
      const exists = prev.find((item) => item.value === value);
      if (exists) {
        // Remove if already exists
        return prev.filter((item) => item.value !== value);
      } else {
        // Add new assignee
        const newAssignee = EXISTED_MEMBERS.find(
          (member) => member.value === value
        );
        return newAssignee ? [...prev, newAssignee] : prev;
      }
    });
  };

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
              onComboDataSelect={(value) => {
                setKanbanTemplateInfo(
                  EXISTED_KBN_TEMPLATES_METAINFO.find(
                    (combo) => combo.value === value
                  ) as ComboboxDataType
                );
              }}
              currentValue={kanbanTemplateMetaInfo.value}
              data={EXISTED_KBN_TEMPLATES_METAINFO}
              isCloseOnSelectItem={true}
              popoverTriggerComponent={
                <FxButton
                  variant="secondary"
                  size="sm"
                  radius="tiny"
                  className="w-fit max-w-[120px] !gap-1.5 justify-between flex-shrink-0 !px-2 "
                >
                  <div>
                    {/* emoji here. emoji of kanban template */}
                    <IssueIcon stateType="todo" />
                  </div>
                  <p className="one-line-ellipsis w-full">
                    {kanbanTemplateMetaInfo?.label ?? "Undefined"}
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
        <div className="flex justify-start gap-2 items-center">
          <FxButton
            variant="secondary"
            role="combobox"
            size="sm"
            radius="tiny"
            className="w-fit justify-between flex-shrink-0 !px-2 !py-1 "
          >
            Nothing
          </FxButton>
          <ComboBoxCheckbox
            data={EXISTED_TASK_LABELS}
            checkedItems={taskLabels}
            onComboDataChecked={handleLabelChecked}
            popoverTriggerComponent={
              <FxButton
                variant={"secondary"}
                size="sm"
                radius="tiny"
                className={`w-fit flex-shrink-0 !px-2 !py-1 ${taskLabels.length > 0 && "text-text-color_4"}`}
              >
                <ViewLabelsWithOverlap
                  data={taskLabels}
                />
              </FxButton>
            }
            isCloseOnCheckItemForSingleData={true}
          />

          <ComboBoxCheckbox
            data={EXISTED_MEMBERS}
            checkedItems={assignees}
            onComboDataChecked={handleAssigneesChecked}
            popoverTriggerComponent={
              <FxButton
                variant={"secondary"}
                size="sm"
                radius="tiny"
                className={`w-fit flex-shrink-0 !px-2 !py-1 ${assignees.length > 0 && "text-text-color_4"}`}
              >
                <ViewLabelsWithOverlap
                  data={assignees}
                  iconOrImageContainerClassname="!-space-x-2"
                  shortViewTextForMultipleLabels="Assginees"
                  initialPlaceholder={<div className="flex justify-start items-center gap-1 text-workspace_3 font-medium text-text-color_2 hover:text-text-color_1">
<FaRegCircleUser size={16}/>
<span>Asignee</span>
                  </div>}
                />
              </FxButton>
            }
            isCloseOnCheckItemForSingleData={true}
          />
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
