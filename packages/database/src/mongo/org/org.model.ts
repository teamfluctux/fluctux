import mongoose, { Schema } from "mongoose";
import { OrgType } from "@fluctux/types";
import { OrgVisibilityEnum, OrgStatusEnum } from "@fluctux/constants";

const org_schema: Schema<OrgType> = new Schema(
  {
    org_thumbnail: {
      type: String,
    },
    org_name: {
      type: String,
      required: true,
    },
    org_description: {
      type: String,
    },
    org_slug: {
      type: String,
      unique: true,
      required: true,
    },
    org_visibility: {
      type: String,
      enum: OrgVisibilityEnum,
      default: OrgVisibilityEnum.PUBLIC,
      required: true,
    },
    admin: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    tags: {
      type: [String],
    },
    category: {
      type: String,
    },
    country: {
      type: String,
    },
    city: {
      type: String,
    },
    status: {
      type: String,
      enum: OrgStatusEnum,
      default: OrgStatusEnum.NORMAL,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export const Org =
  (mongoose.models.Org as mongoose.Model<OrgType>) ||
  mongoose.model<OrgType>("Org", org_schema);
