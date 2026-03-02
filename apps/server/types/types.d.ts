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
  DataType = unknown,
  ErrorType = unknown,
> = Promise<{
  data?: DataType | null;
  message?: string | null;
  error?: ErrorType | Error | null;
}>;
