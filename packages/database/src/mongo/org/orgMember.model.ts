import mongoose, { Schema } from "mongoose";
import {
  OrgMemberType,
} from "@fluctux/types";
import { OrgMemberRoleEnum, OrgMemberStatusEnum } from "@fluctux/constants"

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
      enum: OrgMemberRoleEnum,
      default: OrgMemberRoleEnum.FOLLOWER,
    },
    status: {
      type: String,
      enum: OrgMemberStatusEnum,
      default: OrgMemberStatusEnum.NORMAL,
    },
  },
  {
    timestamps: true,
  }
);

export const OrgMember =
  (mongoose.models.OrgMember as mongoose.Model<OrgMemberType>) ||
  mongoose.model<OrgMemberType>("OrgMember", orgMemberSchema);
