import { SessionDataType } from "@fluctux/types";

export type TokenProvidersType = "google" | "manual";

declare module "express" {
  // Inject additional properties on express.Request
  interface Request {
    user?: SessionDataType | null;
    newIDToken?: string;
    newRefreshToken?: string;
    newProviderToken?: string;
    newDeviceIdToken?: string

  }
}
