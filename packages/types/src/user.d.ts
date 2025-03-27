import { Document } from "mongoose";

export interface UserType {
  avatar: string;
  name: string;
  email: string;
  username: string;
  password: string;
  role: UserRoleType;
  status: UserStatusType;
  isVerified: boolean;
  provider: AuthProviderType;
  verify_code: string;
  verify_expiry: Date;
  isPasswordCorrect(password: string): Promise<boolean>;
}

export enum VisibilityType {
  PUBLIC = "PUBLIC",
  PRIVATE = "PRIVATE",
  FRIEND = "FRIEND",
  ORG = "ORG",
}

export enum GenderType {
  MALE = "MALE",
  FEMALE = "FEMALE",
  CUSTOM = "CUSTOM",
}

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

export enum AuthProviderType {
  GOOGLE = "GOOGLE",
  GITHUB = "GITHUB",
  DISCORD = "DISCORD",
  CUSTOM = "CUSTOM",
}

export enum UserStatusType {
  SUSPENDED = "SUSPENDED",
  RESTRICTED = "RESTRICTED",
  NORMAL = "NORMAL",
}

export enum UserRoleType {
  ADMIN = "ADMIN",
  USER = "USER",
}

export enum SocialMediaType {
  FACEBOOK = "FACEBOOK",
  TWITTER = "TWITTER",
  LINKEDIN = "LINKEDIN",
  GITHUB = "GITHUB",
  INSTAGRAM = "INSTAGRAM",
}

export enum RequestStatusType {
  PENDING = "PENDING",
  ACCEPTED = "ACCEPTED",
  REJECTED = "REJECTED",
}


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