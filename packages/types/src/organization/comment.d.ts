import { Document } from "mongoose";
import { UserType } from "../user";
import { OrgType } from "./base";
import { OrgPageType } from "./page";

export interface OrgCommentType extends Document {
    org: OrgType;
    user: UserType;
    context: OrgPageType;
    comment: string;
    isHidden: boolean;
  }
  