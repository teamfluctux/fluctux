import type { UserSessionType } from "@fluctux/types";

declare module "express" {
  // Inject additional properties on express.Request
  interface Request {
    user?: UserSessionType;
    newIDToken?: string;
    newRefreshToken?: string;
    newProviderToken?: string;
    newDeviceIdToken?: string;
  }
}

export type AsyncFnReturnType<
  GDataType = unknown,
  GErrorType = unknown,
> = Promise<{
  data?: GDataType | null;
  message: string;
  error?: GErrorType | Error | null;
}>;
