import { ERROR, HTTPSuccessCodes } from "@/constants/http-status";
import { GoogleAuth } from "@/services/auth";
import {
  AuthProviderCookieType,
  CookieService,
} from "@/services/auth/cookie.service";
import { ApiError } from "@/utils/ApiError";
import { ApiResponse } from "@/utils/ApiResponse";
import { NextFunction, Request, Response } from "express";

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
      res.cookie(
        CookieService.PROVIDER_COOKIE.name,
        AuthProviderCookieType.GOOGLE,
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
      res.redirect("http://localhost:3000/sudo/orgid");
    } catch (error) {
      res.status(500).json({
        error: new ApiError(500, "Error sign in user", "", [
          ERROR.INTERNAL_SERVER_ERROR,
        ]),
      });
    }
  }

  async refreshToken(req: Request, res: Response) {
    const providerToken = req.cookies[CookieService.PROVIDER_COOKIE.name];
    const refreshToken = req.cookies[CookieService.REFRESH_TOKEN.name];
    if (!refreshToken) {
      res.status(401).json({
        error: new ApiError(401, "Unauthorized Access!", "", [
          ERROR.UNAUTHORIZED_USER,
        ]),
      });
    }

    // MSG_WARNING: For testing purpose comment it after success
    const newIdToken = await this.getNewGoogleAuthIdToken(refreshToken);
    res.cookie(
      CookieService.ID_TOKEN.name,
      newIdToken,
      CookieService.ID_TOKEN.cookie
    );
    res.status(200);
    // TODO: Uncomment it
    try {
      switch (providerToken) {
        case AuthProviderCookieType.GOOGLE:
          const newIdToken = await this.getNewGoogleAuthIdToken(refreshToken);
          res.cookie(
            CookieService.ID_TOKEN.name,
            newIdToken,
            CookieService.ID_TOKEN.cookie
          );
          res.status(200);
          break;
        default:
          res.status(400).json({
            error: new ApiError(400, "Invalid Provider!", "", [
              ERROR.INVALID_REQUEST,
            ]),
          });
          break;
      }
    } catch (error) {
      AuthManager.clearProtectedCookies(req, res);
      res.status(500).json({
        error: new ApiError(500, "Internal Server Error", "", [
          ERROR.INTERNAL_SERVER_ERROR,
        ]),
      });
    }
  }
}
