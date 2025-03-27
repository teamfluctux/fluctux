import { AddressType, VisibilityType } from "@fluctux/types";
import mongoose, { Schema } from "mongoose";

const address_schema: Schema<AddressType> = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },

    city: {
      type: String,
      required: true,
    },

    country: {
      type: String,
      required: true,
    },

    country_code: {
      type: String,
      required: true,
    },

    latitude: {
      type: Number,
      required: true,
    },

    longitude: {
      type: Number,
      required: true,
    },

    postal_code: {
      type: String,
      required: true,
    },

    state: {
      type: String,
      required: true,
    },

    street: {
      type: String,
      required: true,
    },

    visibility: {
      type: String,
      enum: VisibilityType,
      default: VisibilityType.PUBLIC,
      required: true,
    },
  },
  { timestamps: true }
);

export const UserAddress =
  (mongoose.models.UserAddress as mongoose.Model<AddressType>) ||
  mongoose.model<AddressType>("UserAddress", address_schema);
