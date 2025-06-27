import { SessionDataType } from "@fluctux/types";

export type TokenProvidersType = "google" | "github" | "discord";

declare module "express" {
  // Inject additional properties on express.Request
  interface Request {
    user?: SessionDataType | null;
    newIDToken?: string;
  }
}
