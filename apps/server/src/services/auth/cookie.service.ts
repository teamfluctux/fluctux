import { CookieOptions } from "express";
import { TokenProvidersType } from "../../../types/types";

type CookieType = {
  name: string;
  cookie: CookieOptions;
};

export class CookieService {
  TOKENTYPE: TokenProvidersType;

  constructor(tokenType: TokenProvidersType) {
    this.TOKENTYPE = tokenType;
  }

  get REFRESH_TOKEN(): CookieType {
    return {
      name: `refreshToken-${this.TOKENTYPE}`,
      cookie: {
        domain: process.env.COOKIE_DOMAIN,
        httpOnly: true,
        secure: true,
        sameSite: "lax",
        path: "/api/auth/refresh",
        // 30 days
        maxAge: 30 * 24 * 60 * 60 * 1000,
      },
    };
  }

  get REFRESH_TOKEN_LOGOUT(): CookieType {
    return {
      name: `refreshTokenLogout-${this.TOKENTYPE}`,
      cookie: {
        domain: process.env.COOKIE_DOMAIN,
        httpOnly: true,
        secure: true,
        sameSite: "lax",
        path: "/api/auth/logout",
        // 30 days
        maxAge: 30 * 24 * 60 * 60 * 1000,
      },
    };
  }

  get ID_TOKEN(): CookieType {
    return {
      name: `idToken-${this.TOKENTYPE}`,
      cookie: {
        domain: process.env.COOKIE_DOMAIN,
        httpOnly: true,
        secure: true,
        sameSite: "lax",
        path: "/",
        // 15 mins
        maxAge: 15 * 60 * 1000,
      },
    };
  }
}
