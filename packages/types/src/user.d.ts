import { Document } from "mongoose";

export interface UserType {
  avatar: string;
  name: string;
  email: string;
  username: string;
  password: string;
  status: UserStatusType;
  isVerified: boolean;
  provider: AuthProviderType;
  verify_code: string;
  verify_expiry: Date;
  isPremium: boolean
  isPasswordCorrect(password: string): Promise<boolean>;
}

export type VisibilityType = "PUBLIC" | "PRIVATE" | "FRIEND" | "ORG";

export type GenderType = "MALE" | "FEMALE" | "CUSTOM";

export type NumberType = {
  number: string;
  visibility: VisibilityType;
};

export type SocialLinkType = {
  link: string;
  social_media: SocialMediaType;
  visibility: VisibilityType;
};

export type DateOfBirthType = {
  day_month: string;
  year: string;
  visibility: VisibilityType;
};

export type AuthProviderType = "GOOGLE" | "MANUAL";

export type UserStatusType = "SUSPENDED" | "RESTRICTED" | "NORMAL";

export type SocialMediaType =
  | "FACEBOOK"
  | "TWITTER"
  | "LINKEDIN"
  | "GITHUB"
  | "INSTAGRAM";

export type RequestStatusType = "PENDING" | "ACCEPTED" | "REJECTED";

export interface FriendType extends Document {
  sender_id: UserType;
  receiver_id: UserType;
}

export interface FriendRequestType extends Document {
  sender_id: UserType;
  receiver_id: UserType;
  status: RequestStatusType;
}

export interface AddressType extends Document {
  user: UserType;
  city: string;
  country: string;
  country_code: string;
  latitude: number;
  longitude: number;
  postal_code: string;
  state: string;
  street: string;
  visibility: VisibilityType;
}

export interface UserBasicInfoType extends Document {
  user: UserType;
  numbers: NumberType[];
  socialLinks: SocialLinkType[];
  gender: GenderType;
  date_of_birth: DateOfBirthType;
}
