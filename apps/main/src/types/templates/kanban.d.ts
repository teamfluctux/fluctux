import { UniqueIdentifier } from "@dnd-kit/core";
import { IssueIconStateType } from "@fluctux/ui";

type KanbanTaskType = {
  id: UniqueIdentifier;
  title: string;
  desc: string;
  start_date?: string;
  due_date?: string;
  column_id: UniqueIdentifier;
  issue_type: IssueIconStateType;
};

type KanbanColumnType = {
  id: UniqueIdentifier;
  title: string;
  type: IssueIconStateType;
};
