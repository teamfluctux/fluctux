import { ERROR, HTTPSuccessCodes } from "@/constants/http-status";
import { GoogleAuth } from "@/services/auth";
import {
  AuthProviderCookieType,
  CookieService,
} from "@/services/auth/cookie.service";
import { ApiError } from "@/utils/ApiError";
import { Request, Response } from "express";
import jwt from "jsonwebtoken"

export class AuthManager extends GoogleAuth {
  callbackGoogleAuth(req: Request, res: Response) {
    res.redirect(this.generateGoogleAuthUrl());
  }

  static clearProtectedCookies(_: Request, res: Response) {
    res.clearCookie(CookieService.ID_TOKEN.name);
    res.clearCookie(CookieService.REFRESH_TOKEN.name);
    res.clearCookie(CookieService.PROVIDER_COOKIE.name);
    res.clearCookie(CookieService.REFRESH_TOKEN_LOGOUT.name);
  }

  async handleSignInWithGoogle(req: Request, res: Response) {
    try {
      const { code } = req.query;
      const { idToken, refreshToken } = await this.getGoogleAuthtokens(
        code as string
      );
      const providerNameJWT = jwt.sign( {provider: AuthProviderCookieType.GOOGLE}, process.env.JWT_SECRET as string, {
        expiresIn: "720h"
      })
      res.cookie(
        CookieService.PROVIDER_COOKIE.name,
        providerNameJWT,
        CookieService.PROVIDER_COOKIE.cookie
      );
      res.cookie(
        CookieService.ID_TOKEN.name,
        idToken,
        CookieService.ID_TOKEN.cookie
      );
      res.cookie(
        CookieService.REFRESH_TOKEN.name,
        refreshToken,
        CookieService.REFRESH_TOKEN.cookie
      );
      res.redirect("http://localhost:3003/");
    } catch (error) {
      console.log(error);
      
      res.status(500).json({
        error: new ApiError(500, "Error sign in user", "", [
          ERROR.INTERNAL_SERVER_ERROR,
        ]),
      });
    }
  }

  async refreshToken(providerToken: string, refreshToken: string) {
    try {
      switch (providerToken) {
        case AuthProviderCookieType.GOOGLE:
          console.log("TOKEN REFRESHED VIA GOOGLE");
          const token = await this.getNewGoogleAuthIdToken(refreshToken);
          return token
        default:
          return null
      }
    } catch (error) {
      return null
    }
  }
}
