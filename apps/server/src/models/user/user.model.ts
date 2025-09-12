import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";
import { UserType } from "@fluctux/types";
import { UserStatusEnum, AuthProviderEnum } from "@fluctux/constants";
import { UserBasicInfo } from "./userBasicInfo.model";
import { UserAddress } from "./userAddress.model";

const userSchema: Schema<UserType> = new Schema(
  {
    avatar: {
      type: String,
      required: true,
    },
    name: {
      first_name: {
        type: String,
      },
      last_name: {
        type: String,
      }
    },
    username: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        "Please provide a valid email address.",
      ],
    },
    password: {
      type: String,
    },
    status: {
      type: String,
      enum: UserStatusEnum,
      default: UserStatusEnum.NORMAL,
    },
    isTempVerified: {
      type: Boolean,
      default: false,
      required: true,
    },
    isPremium: {
      type: Boolean,
      default: false,
    },
    provider: {
      type: String,
      enum: AuthProviderEnum,
      default: AuthProviderEnum.GOOGLE,
    },
    temp_verify_code: {
      type: String,
    },
    temp_verify_expiry: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

// get full name
userSchema.virtual("fullname").get(function() {
  return this.name.first_name + " " + this.name.last_name
})

/**
 * hash the password before saving, if password is modified
 */
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password, 12);
  next();
});

/**
 * run after creating the database
 */
userSchema.post("save", async function (_, next) {
  const userBasicInfo = await UserBasicInfo.findOne({ user: this._id });
  const userAddress = await UserAddress.findOne({ user: this._id });

  if (!userBasicInfo) {
    const newUserInfo = await new UserBasicInfo({
      user: this._id,
    });

    await newUserInfo.save({
      validateBeforeSave: false,
    });
  }

  if (!userAddress) {
    const newUserAddress = await new UserAddress({
      user: this._id,
    });

    await newUserAddress.save({
      validateBeforeSave: false,
    });
  }

  next();
});

// custom method for password validation
userSchema.methods.isPasswordCorrect = async function (password: string) {
  return await bcrypt.compare(password, this.password);
};

export const User =
  (mongoose.models.User as mongoose.Model<UserType>) ||
  mongoose.model<UserType>("User", userSchema);
