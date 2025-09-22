import {
  DateOfBirthType,
  NumberType,
  SocialLinkType,
  UserBasicInfoType,
} from "@fluctux/types";
import {
  GenderEnum,
  SocialMediaEnum,
  VisibilityEnum,
} from "@fluctux/constants";
import mongoose, { Schema } from "mongoose";

const numberSchema: Schema<NumberType> = new Schema(
  {
    number: {
      type: String,
    },
    visibility: {
      type: String,
      enum: VisibilityEnum,
      default: VisibilityEnum.PUBLIC,
    },
  },
  { _id: false }
);

const socialLinkSchema: Schema<SocialLinkType> = new Schema(
  {
    link: {
      type: String,
    },
    social_media: {
      type: String,
      enum: SocialMediaEnum,
    },
    visibility: {
      type: String,
      enum: VisibilityEnum,
      default: VisibilityEnum.PUBLIC,
    },
  },
  { _id: false }
);

const dateOfBirthSchema: Schema<DateOfBirthType> = new Schema(
  {
    date: {
      type: Date
    },
    visibility: {
      type: String,
      enum: VisibilityEnum,
      default: VisibilityEnum.PUBLIC,
    },
  },
  { _id: false }
);

const UserBasicInfoSchema: Schema<UserBasicInfoType> = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    numbers: {
      type: [numberSchema],
      validate: {
        validator: function (array: NumberType[]) {
          return array.length <= 5; // Maximum of 5 numbers allowed
        },
        message: "Maximum of 5 numbers allowed",
      },
    },
    socialLinks: {
      type: [socialLinkSchema],
      validate: {
        validator: function (array: SocialLinkType[]) {
          return array.length <= 5; // Maximum of 5 social links allowed
        },
        message: "Maximum of 5 social links allowed",
      },
    },
    gender: {
      type: String,
      enum: GenderEnum,
    },
    date_of_birth: {
      type: dateOfBirthSchema,
    },
  },
  { _id: false }
);

export const UserBasicInfo =
  (mongoose.models.UserBasicInfo as mongoose.Model<UserBasicInfoType>) ||
  mongoose.model<UserBasicInfoType>("UserBasicInfo", UserBasicInfoSchema);
