export type TokenProvidersType = "google" | "manual" | "github";

export type UserSessionType = {
  sub: string;
  _id?: string;
  name?: string;
  picture?: string;
  email?: string;
  apiVersion?: string;
  provider: TokenProvidersType;
};
