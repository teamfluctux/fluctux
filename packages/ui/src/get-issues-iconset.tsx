import React from "react";
import { IconBase, IconBaseProps } from "react-icons/lib";
import { MdCancel } from "react-icons/md";
import { GoCheckCircleFill } from "react-icons/go";
import { FiCircle } from "react-icons/fi";
import { RiProgress5Line } from "react-icons/ri";
import { TbCircleDashed } from "react-icons/tb";
import { FaDotCircle } from "react-icons/fa";
export type IssueIconStateType =
  | "cancel"
  | "done"
  | "in_progress"
  | "todo"
  | "in_review"
  | "backlog";

const IssuesIconSet: { [key in IssueIconStateType]: typeof IconBase } = {
  cancel: MdCancel,
  backlog: TbCircleDashed,
  done: GoCheckCircleFill,
  in_progress: RiProgress5Line,
  todo: FiCircle,
  in_review: FaDotCircle
};

type IssueIconPropsType = {
  stateType?: keyof typeof IssuesIconSet;
  className?: string
} & IconBaseProps;

export function IssueIcon({
  stateType = "todo",
  className,
  ...props
}: IssueIconPropsType) {
  const Icon = IssuesIconSet[stateType];
  return <Icon className={`${className} ${stateType == "cancel" ? "text-red-500 hover:text-red-600" : stateType == "done" ? "text-emerald-500 hover:text-emerald-400" : stateType == "backlog" || stateType == "in_review" ? "text-zinc-500 hover:text-zinc-50" : stateType == "in_progress" ? "text-yellow-500 hover:text-yellow-400" :  stateType == "todo" ? "text-zinc-200 hover:text-zinc-50": "text-zinc-800"}`} {...props} />;
}
