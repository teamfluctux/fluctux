import mongoose, { Schema } from "mongoose";
import {
  OrgMemberRequestType,
} from "@fluctux/types";

import { RequestStatusEnum, OrgMemberRoleEnum } from "@fluctux/constants"

const orgMemberRequestSchema: Schema<OrgMemberRequestType> = new Schema(
  {
    requested_to: {
      type: Schema.Types.ObjectId,
      ref: "Org",
      required: true,
    },
    sender_id: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    receiver_id: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    status: {
      type: String,
      enum: RequestStatusEnum,
      default: RequestStatusEnum.PENDING,
    },
    requested_role: {
      type: String,
      enum: OrgMemberRoleEnum,
      default: OrgMemberRoleEnum.FOLLOWER,
    },
  },
  {
    timestamps: true,
  }
);

export const OrgMemberRequest =
  (mongoose.models.OrgMemberRequest as mongoose.Model<OrgMemberRequestType>) ||
  mongoose.model<OrgMemberRequestType>(
    "OrgMemberRequest",
    orgMemberRequestSchema
  );
