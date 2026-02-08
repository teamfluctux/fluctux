import {
  AuthProviderCookieType,
  CookieService,
} from "@/services/auth/cookie.service";
import { GoogleAuth } from "./googleAuth.service";
import { Request, Response } from "express";
import { GithubAuth } from "./githubAuth.service";

export class AuthService {
  protected google: GoogleAuth;
  protected github: GithubAuth;
  constructor() {
    this.google = new GoogleAuth();
    this.github = new GithubAuth();
  }

  GoogleAuth() {
    return this.google;
  }

  GithubAuth() {
    return this.github;
  }

  static clearProtectedCookies(_: Request, res: Response) {
    res.clearCookie(CookieService.ID_TOKEN.name);
    res.clearCookie(CookieService.REFRESH_TOKEN.name);
    res.clearCookie(CookieService.PROVIDER_COOKIE.name);
  }

  async refreshToken(providerName: string, refreshToken: string) {
    try {
      switch (providerName) {
        case AuthProviderCookieType.GOOGLE: {
          console.log("TOKEN REFRESHED VIA GOOGLE");
          const token = await this.google.getNewGoogleAuthIdToken(refreshToken);
          return token;
        }
        default: {
          return null;
        }
      }
    } catch (error) {
      console.log(error);
      return null;
    }
  }
}

export const authService = new AuthService();
