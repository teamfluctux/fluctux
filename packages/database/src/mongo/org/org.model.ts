import mongoose, { Schema } from "mongoose";
import { OrgStatusType, OrgType, OrgVisibilityType } from "@fluctux/types"

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
      enum: OrgVisibilityType,
      default: OrgVisibilityType.PUBLIC,
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
      enum: OrgStatusType,
      default: OrgStatusType.NORMAL,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true
  }
);

export const Org =
  (mongoose.models.Org as mongoose.Model<OrgType>) ||
  mongoose.model<OrgType>("Org", org_schema);
