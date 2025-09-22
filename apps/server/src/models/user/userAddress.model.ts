import { AddressType } from "@fluctux/types";
import { VisibilityEnum } from "@fluctux/constants";
import mongoose, { Schema } from "mongoose";

const addressSchema: Schema<AddressType> = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },

    city: {
      type: String,
    },

    country: {
      type: String,
    },

    country_code: {
      type: String,
    },

    latitude: {
      type: Number,
    },

    longitude: {
      type: Number,
    },

    postal_code: {
      type: String,
    },

    state: {
      type: String,
    },

    street: {
      type: String,
    },

    visibility: {
      type: String,
      enum: VisibilityEnum,
      default: VisibilityEnum.PUBLIC,
      required: true,
    },
  },
  { timestamps: true, _id: false }
);

addressSchema.virtual("getLocationOrdinates").get(function() {
  return {
    long: this.longitude,
    lat: this.latitude
  }
})

export const UserAddress =
  (mongoose.models.UserAddress as mongoose.Model<AddressType>) ||
  mongoose.model<AddressType>("UserAddress", addressSchema);
