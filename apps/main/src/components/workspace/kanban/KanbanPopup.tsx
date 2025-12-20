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
  ViewLabelsWithOverlap,
  ComboBoxCheckbox,
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@fluctux/ui";
import React, { useState } from "react";
import {
  MdSignalCellular1Bar,
  MdSignalCellular2Bar,
  MdSignalCellular3Bar,
  MdSignalCellular4Bar,
} from "react-icons/md";
import { LuLayoutPanelTop } from "react-icons/lu";
import { LuOctagonAlert } from "react-icons/lu";
import { CgBorderStyleDashed } from "react-icons/cg";
import { CiCalendarDate } from "react-icons/ci";
import { ComboboxDataType } from "@fluctux/ui";
import { ChevronDown, ChevronsUpDownIcon, X } from "lucide-react";
import { FaRegCircleUser } from "react-icons/fa6";
import { TbAlertHexagonFilled, TbAlertOctagonFilled } from "react-icons/tb";
import { TbCalendarDue } from "react-icons/tb";
import { FaCircle } from "react-icons/fa6";
import { IconBase, IconBaseProps } from "react-icons/lib";
import { MdLabelOutline } from "react-icons/md";
import { Calendar } from "./calender";
import { KanbanCalender } from "./kanban-calender";
import { IoMdAdd } from "react-icons/io";
import { IoIosSave } from "react-icons/io";

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

const EXISTED_TASK_STATUS: ComboboxDataType[] = [
  { label: "Todo", value: "todo" },
  { label: "Backlog", value: "backlog" },
  { label: "Done", value: "done" },
  { label: "In Progress", value: "in_progress" },
  { label: "Cancel", value: "cancel" },
];

const PRIORITY_DATA: ComboboxDataType[] = [
  {
    label: "Urgent",
    value: "urgent",
    icon: TbAlertHexagonFilled,
    iconClassName: "text-red-600",
  },
  {
    label: "High",
    value: "high",
    icon: MdSignalCellular4Bar,
  },
  {
    label: "Medium",
    value: "medium",
    icon: MdSignalCellular3Bar,
  },
  {
    label: "Low",
    value: "low",
    icon: MdSignalCellular2Bar,
    iconClassName: "text-yellow-500",
  },

  {
    label: "No priority",
    value: "no_priority",
    icon: CgBorderStyleDashed,
  },
];

type ViewLabelPropsType = {
  label: string;
  emoji?: string;
  emojiClassname?: string;
  icon?: typeof IconBase;
  iconClassname?: string;
  image?: string;
  avatarClassname?: string;
  avatarFallback?: React.ReactNode;
  fallbackLabel?: React.ReactNode;
  className?: string;
  leftNodeClassname?: string;
  rightIcon?: typeof IconBase;
  rightIconClassname?: string;
  rightNode?: React.ReactNode;
  leftIconSize?: number;
  rightIconSize?: number;
};

export const ViewLabel = ({
  label,
  emoji,
  icon,
  emojiClassname,
  iconClassname,
  image,
  avatarClassname,
  avatarFallback,
  fallbackLabel,
  className,
  rightIcon,
  rightNode,
  rightIconClassname,
  leftNodeClassname,
  leftIconSize = 18,
  rightIconSize = 18,
}: ViewLabelPropsType) => {
  const Icon = icon;
  const RightIcon = rightIcon;
  return (
    <div
      className={`flex w-full items-center group ${RightIcon ? "justify-between" : "justify-center"} ${className}`}
    >
      <div
        className={`flex justify-center items-center w-fit gap-1.5 ${leftNodeClassname}`}
      >
        {!emoji && Icon && (
          <Icon className={`${iconClassname}`} size={leftIconSize} />
        )}
        {!Icon && emoji && <span className={`${emojiClassname}`}>{emoji}</span>}
        {image && (
          <Avatar
            className={`w-[20px] h-[20px] border border-border-color_1 outline-none ${avatarClassname}`}
          >
            <AvatarImage src={`${image}`} alt={`${label}`} />

            <AvatarFallback>{avatarFallback ?? "CN"}</AvatarFallback>
          </Avatar>
        )}
        <span>{label ?? fallbackLabel ?? "Undefined"}</span>
      </div>
      {!rightNode && RightIcon && (
        <RightIcon className={`${rightIconClassname}`} size={rightIconSize} />
      )}
      {!RightIcon && rightNode && rightNode}
    </div>
  );
};

export const KanbanPopup = () => {
  const [kanbanTemplateMetaInfo, setKanbanTemplateInfo] =
    React.useState<ComboboxDataType>({ ...EXISTED_KBN_TEMPLATES_METAINFO[0]! });
  const [taskStatus, setTaskStatus] = useState<ComboboxDataType>({
    ...EXISTED_TASK_STATUS[0]!,
  });

  const [taskLabels, setTaskLabels] = useState<ComboboxDataType[]>([]);
  const [assignees, setAssignees] = useState<ComboboxDataType[]>([]);
  const [priority, setPriority] = useState<ComboboxDataType>({
    ...PRIORITY_DATA[PRIORITY_DATA.length - 1]!,
  });

  const handleSelectTaskPriority = (value: string) => {
    setPriority(
      PRIORITY_DATA.find((status) => status.value === value) as ComboboxDataType
    );
  };

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

  const handleSelectTaskId = (value: string) => {
    setKanbanTemplateInfo(
      EXISTED_KBN_TEMPLATES_METAINFO.find(
        (combo) => combo.value === value
      ) as ComboboxDataType
    );
  };

  const handleSelectTaskStatus = (value: string) => {
    setTaskStatus(
      EXISTED_TASK_STATUS.find(
        (status) => status.value === value
      ) as ComboboxDataType
    );
  };

  return (
    <FxCommandBox
      open={false}
      className="max-w-[800px] w-full max-h-[500px] h-full "
      containerClasses="!bg-background-color_925C "
    >
      <div className="w-full h-[40px] border-b border-border-color_1 px-1 ">
        <div className="flex justify-between items-center w-full h-full">
          <div className="flex justify-start items-center gap-2 w-fit flex-shrink-0">
            <ComboBox
              onComboDataSelect={handleSelectTaskId}
              currentValue={kanbanTemplateMetaInfo.value}
              data={EXISTED_KBN_TEMPLATES_METAINFO}
              isCloseOnSelectItem={true}
              popoverTriggerComponent={
                <FxButton
                  variant="secondary"
                  size="sm"
                  radius="tiny"
                  className="w-fit max-w-[120px] justify-between flex-shrink-0 !px-2 "
                >
                  <ViewLabel
                    label={kanbanTemplateMetaInfo.label}
                    leftNodeClassname="!gap-[2px]"
                    icon={kanbanTemplateMetaInfo.icon as typeof IconBase}
                    rightNode={
                      <ChevronsUpDownIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    }
                  />
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

          <div className="w-fit flex-shrink-0 flex justify-end items-center pr-1 gap-2">
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
      <div className="h-[calc(100%-185px)] w-full">
        <input
          name="issue_title"
          placeholder="Issue Title"
          className="text-read_20 font-medium  outline-none border-none w-full bg-transparent px-4 pb-3 pt-3 placeholder:text-text-color_3"
        />

        {/* TODO: uncomment this textarea */}
        <textarea
          name="issue_content"
          className="w-full resize-none outline-none h-[calc(100%-55px)] bg-transparent px-4 text-text-color_4 py-3 text-workspace_1 placeholder:text-text-color_3"
          placeholder="Description..."
        ></textarea>
      </div>

      <div className="w-full px-3 py-3 flex justify-center items-end h-[95px]">
        <div className="flex justify-start gap-2 items-center w-full flex-wrap">
          <ComboBox
            onComboDataSelect={handleSelectTaskStatus}
            currentValue={taskStatus.value}
            data={EXISTED_TASK_STATUS}
            popoverProps={{
              align: "start",
              side: "top",
            }}
            isCloseOnSelectItem={true}
            popoverTriggerComponent={
              <FxButton
                variant="secondary"
                role="combobox"
                size="sm"
                radius="tiny"
                className={`w-fit justify-between flex-shrink-0 !px-2 !py-1 ${taskStatus.label && "text-text-color_4"}`}
              >
                <ViewLabel
                  label={taskStatus.label}
                  leftNodeClassname="!gap-[2px]"
                />
              </FxButton>
            }
          />

          <ComboBoxCheckbox
            data={EXISTED_TASK_LABELS}
            checkedItems={taskLabels}
            onComboDataChecked={handleLabelChecked}
            searchPlaceholder="Search Labels..."
            popoverProps={{
              align: "start",
              side: "top",
            }}
            popoverTriggerComponent={
              <FxButton
                variant={"secondary"}
                size="sm"
                radius="tiny"
                className={`w-fit flex-shrink-0 !px-2 !py-1 ${taskLabels.length > 0 && "text-text-color_4"}`}
              >
                <ViewLabelsWithOverlap
                  initialPlaceholder={
                    <div>
                      <MdLabelOutline size={16} />
                    </div>
                  }
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
            searchPlaceholder="Search Members..."
            popoverProps={{
              align: "start",
              side: "top",
            }}
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
                  initialPlaceholder={
                    <div className="flex justify-start items-center gap-1 text-workspace_3 font-medium text-text-color_2 hover:text-text-color_1">
                      <FaRegCircleUser size={16} />
                      <span>Asignee</span>
                    </div>
                  }
                />
              </FxButton>
            }
            isCloseOnCheckItemForSingleData={true}
          />

          <ComboBox
            onComboDataSelect={handleSelectTaskPriority}
            currentValue={priority.value}
            data={PRIORITY_DATA}
            isCloseOnSelectItem={true}
            showSearchBox={false}
            popoverProps={{
              align: "start",
              side: "top",
            }}
            popoverTriggerComponent={
              <FxButton
                variant="secondary"
                role="combobox"
                size="sm"
                radius="tiny"
                className={`w-fit justify-between flex-shrink-0 !px-2 !py-1 ${priority.label && "text-text-color_4"}`}
              >
                <ViewLabel
                  label={priority.label}
                  icon={priority.icon as typeof IconBase}
                  iconClassname={`${priority.iconClassName} text-[16px]`}
                  leftNodeClassname="!gap-1"
                />
              </FxButton>
            }
          />

          <Popover>
            <PopoverTrigger asChild className="outline-none">
              <FxButton
                variant="secondary"
                role="combobox"
                size="sm"
                radius="tiny"
                className={`w-fit justify-between flex-shrink-0 !px-2 !py-1 `}
              >
                <ViewLabel
                  label="Start Date"
                  icon={CiCalendarDate}
                  leftIconSize={18}
                />
              </FxButton>
            </PopoverTrigger>
            <PopoverContent
              className="!bg-transparent !z-[99992]"
              align="start"
              side="top"
            >
              <KanbanCalender />
            </PopoverContent>
          </Popover>

          <Popover>
            <PopoverTrigger asChild className="outline-none">
              <FxButton
                variant="secondary"
                role="combobox"
                size="sm"
                radius="tiny"
                className={`w-fit justify-between flex-shrink-0 !px-2 !py-1 `}
              >
                <ViewLabel
                  label="Due Date"
                  icon={TbCalendarDue}
                  leftIconSize={16}
                />
              </FxButton>
            </PopoverTrigger>
            <PopoverContent
              className="!bg-transparent !z-[99992]"
              align="start"
              side="top"
            >
              <KanbanCalender />
            </PopoverContent>
          </Popover>

          <FxButton
            variant="secondary"
            role="combobox"
            size="sm"
            radius="tiny"
            className={`w-fit justify-between flex-shrink-0 !px-2 !py-1 `}
          >
            <ViewLabel
              label="Add Parent"
              icon={LuLayoutPanelTop}
              leftIconSize={16}
            />
          </FxButton>
        </div>
      </div>

      <div className="border-t border-border-color_1 h-[50px] w-full flex justify-between items-center">
        <div className="px-2.5">
          <FxButton
            className="!text-workspace_2 !py-0 h-[30px] !px-2 !gap-1"
            variant="secondary"
            radius="tiny"
          >
            <IoMdAdd size={18} />
            Add Sub Issue
          </FxButton>
        </div>
        <div className="px-2.5 flex justify-center items-center">
          <FxButton
            className="!text-workspace_2 !py-0 h-[30px] rounded-tr-none rounded-br-none pr-1 !pl-3"
            radius="tiny"
          >
            Create Issue
          </FxButton>
          <Popover>
            <PopoverTrigger asChild className="outline-none">
              <FxButton className=" !px-1 !pr-2 rounded-tl-none rounded-bl-none h-[30px]">
                <ChevronDown
                  size={LUCIDE_WORKSPACE_ICON_SIZE}
                  className="text-text-color_default_white"
                />
              </FxButton>
            </PopoverTrigger>
            <PopoverContent
              className="w-[130px]  h-fit  border border-border-color_1 p-1 !z-[99992]"
              align="end"
            >
              <FxButton
                variant="ghost_zinc_2"
                className="w-full !text-workspace_2 !justify-start !gap-1 h-[25px] !px-1"
                radius="tiny"
              >
                <IoIosSave size={16} />
                Draft
              </FxButton>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </FxCommandBox>
  );
};
