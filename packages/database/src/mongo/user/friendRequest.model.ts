import mongoose, { Schema } from "mongoose";
import { FriendRequestType, RequestStatusType } from "@fluctux/types";



const friendRequestSchema: Schema<FriendRequestType> = new Schema(
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
    status: {
      type: String,
      enum: RequestStatusType,
      default: RequestStatusType.PENDING,
    },
  },
  {
    timestamps: true,
  }
);

export const FriendRequest =
  (mongoose.models.FriendRequest as mongoose.Model<FriendRequestType>) ||
  mongoose.model<FriendRequestType>("FriendRequest", friendRequestSchema);
