import { Document } from "mongoose";
import { UserType } from "../user";
import { OrgType } from "./base";

export interface OrgPageType extends Document {
  org: OrgType;
  user: UserType;
  thumbnail: string;
  title: string;
  desc: string;
  slug: string;
  content: string;
  isPublished: boolean;
}
