import mongoose, { Schema } from "mongoose";
import { OrgCommentType } from "@fluctux/types";

const orgCommentSchema: Schema<OrgCommentType> = new Schema(
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
    context: {
      type: Schema.Types.ObjectId,
      ref: "OrgPage",
      required: true,
    },
    comment: {
      type: String,
      required: true,
    },
    isHidden: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export const OrgComment =
  (mongoose.models.OrgComment as mongoose.Model<OrgCommentType>) ||
  mongoose.model<OrgCommentType>("OrgComment", orgCommentSchema);
