export type SessionDataType = {
  sub?: string;
  _id?: string;
  name: string;
  picture: string;
  email: string;
  apiVersion?: string;
  provider: string;
};

export type UserSessionType = {
  user: SessionDataType;
  provider: string;
};
