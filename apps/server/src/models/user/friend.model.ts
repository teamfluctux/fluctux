import { FriendType } from "@fluctux/types";
import mongoose, { Schema } from "mongoose";

const friend_schema: Schema<FriendType> = new Schema(
  {
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
  },
  {
    /**
     * createdAt -> friends since
     */
    timestamps: true,
    _id: false,
  }
);

export const Friend =
  (mongoose.models.Friend as mongoose.Model<FriendType>) ||
  mongoose.model<FriendType>("Friend", friend_schema);
