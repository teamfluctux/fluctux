import mongoose, { Schema } from "mongoose";
import {
  OrgMemberRoleType,
  OrgMemberStatusType,
  OrgMemberType,
} from "@fluctux/types";

const orgMemberSchema: Schema<OrgMemberType> = new Schema(
  {
    org: {
      type: Schema.Types.ObjectId,
      ref: "Org",
      required: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    role: {
      type: String,
      enum: OrgMemberRoleType,
      default: OrgMemberRoleType.FOLLOWER,
    },
    status: {
      type: String,
      enum: OrgMemberStatusType,
      default: OrgMemberStatusType.NORMAL,
    },
  },
  {
    timestamps: true,
  }
);

export const OrgMember =
  (mongoose.models.OrgMember as mongoose.Model<OrgMemberType>) ||
  mongoose.model<OrgMemberType>("OrgMember", orgMemberSchema);
