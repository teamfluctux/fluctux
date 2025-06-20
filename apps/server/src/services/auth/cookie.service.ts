import { CookieOptions } from "express";

export enum AuthProviderCookieType {
    GOOGLE = "google",
    GITHUB = "github",
    DISCORD = "discord",
}

type CookieType = {
  name: string;
  cookie: CookieOptions;
};

export class CookieService {
  static REFRESH_TOKEN: CookieType = {
    name: "refreshToken",
    cookie: {
      domain: process.env.COOKIE_DOMAIN,
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      path: "/",
      // MSG_WARNING for testing its now 1 min
      maxAge: 1 * 60 * 1000,
    },
  };

  static REFRESH_TOKEN_LOGOUT: CookieType = {
    name: "refreshTokenLogout",
    cookie: {
      domain: process.env.COOKIE_DOMAIN,
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      path: "/api/auth/logout",
     // MSG_WARNING for testing its now 1 min
      maxAge: 1 * 60 * 1000,
    },
  };

  static ID_TOKEN: CookieType = {
    name: "idToken",
    cookie: {
      domain: process.env.COOKIE_DOMAIN,
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      path: "/",
      // MSG_WARNING for testing its now 20 SEC
      maxAge: 20 * 1000,
    },
  };

  static PROVIDER_COOKIE: CookieType = {
    name: "provider",
    cookie: {
      domain: process.env.COOKIE_DOMAIN,
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      path: "/",
      // MSG_WARNING for testing its now 1 min
      maxAge: 1 * 60 * 1000,
    },
  };
}
