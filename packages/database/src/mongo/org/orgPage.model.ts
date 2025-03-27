import { OrgPageType } from "@fluctux/types";
import mongoose, { Schema } from "mongoose";

const orgPageSchema: Schema<OrgPageType> = new Schema(
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
    thumbnail: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    isPublished: {
      type: Boolean,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const OrgPage =
  (mongoose.models.OrgPage as mongoose.Model<OrgPageType>) ||
  mongoose.model<OrgPageType>("OrgPage", orgPageSchema);
