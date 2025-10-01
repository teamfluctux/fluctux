import React from "react";
import { IconBase, IconBaseProps } from "react-icons/lib";
import { MdCancel } from "react-icons/md";
import { GoCheckCircleFill } from "react-icons/go";
import { FiCircle } from "react-icons/fi";
import { RiProgress5Line } from "react-icons/ri";
import { TbCircleDashed } from "react-icons/tb";
type IssueIconStateType =
  | "cancel"
  | "done"
  | "in_progress"
  | "todo"
  | "backlog";

const IssuesIconSet: { [key in IssueIconStateType]: typeof IconBase } = {
  cancel: MdCancel,
  backlog: TbCircleDashed,
  done: GoCheckCircleFill,
  in_progress: RiProgress5Line,
  todo: FiCircle,
};

type IssueIconPropsType = {
  stateType?: keyof typeof IssuesIconSet;
} & IconBaseProps;

export function IssueIcon({
  stateType = "todo",
  ...props
}: IssueIconPropsType) {
  const Icon = IssuesIconSet[stateType];
  return <Icon {...props} />;
}
