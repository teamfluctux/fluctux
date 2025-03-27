import mongoose, { Schema } from "mongoose";
import {
  OrgMemberRequestType,
  OrgMemberRoleType,
  RequestStatusType,
} from "@fluctux/types";

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
      enum: RequestStatusType,
      default: RequestStatusType.PENDING,
    },
    requested_role: {
      type: String,
      enum: OrgMemberRoleType,
      default: OrgMemberRoleType.FOLLOWER,
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
