import { DefaultSession } from "@auth/express";
import { SessionDataType } from "@fluctux/types";
import { JWT } from "next-auth/jwt";

declare module "@auth/express" {
  interface User {
    username: string;
    email: string;
    image: string;
    name: string;
    role: string;
    id: string;
  }
}

export interface CustomSession extends DefaultSession {
  user: User & DefaultSession["user"];
}

declare module "next-auth/jwt" {
  interface JWT {
    username?: string;
    email?: string;
    image?: string;
    name?: string;
    role?: string;
    id?: string;
  }
}


export type TokenProvidersType = "google" | "github" | "discord"


declare module "express" {
    // Inject additional properties on express.Request
    interface Request  {
        user?: SessionDataType | null
        newIDToken?: string
    }
}