import { ERROR, HTTPSuccessCodes } from "@/constants/http-status";
import { GoogleAuth } from "@/services/auth";
import {
  AuthProviderCookieType,
  CookieService,
} from "@/services/auth/cookie.service";
import { ApiError } from "@/utils/ApiError";
import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { GithubAuth } from "@/services/auth/githubAuth.service";
import { generateEncryptedJWTTokens } from "@/utils/generateEncryptedJWTToken";
dotenv.config();

export class AuthManager extends GoogleAuth {
  redirectGoogleAuth(req: Request, res: Response) {
    return res.redirect(this.generateGoogleAuthUrl());
  }

  redirectGithubAuth(req: Request, res: Response) {
    return res.redirect(this.generateGithubAuthUrl());
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
      const providerNameJWT = generateEncryptedJWTTokens(
        { provider: AuthProviderCookieType.GOOGLE },
        { expiresIn: "720h" }
      );
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
      res.status(500).json({
        error: new ApiError(500, "Error sign in user vai google", "", [
          ERROR.INTERNAL_SERVER_ERROR,
        ]),
      });
    }
  }

  async handleSignInWithGithub(req: Request, res: Response) {
    try {
      const { code } = req.query;
      const { idToken } = await this.getGithubAuthTokens(code as string);
      console.log("Token github", idToken);

      const providerNameJWT = generateEncryptedJWTTokens(
        { provider: AuthProviderCookieType.GITHUB },
        { expiresIn: "720h" }
      );

      res.cookie(
        CookieService.ID_TOKEN.name,
        idToken,
        CookieService.ID_TOKEN.cookie
      );

      res.cookie(
        CookieService.PROVIDER_COOKIE.name,
        providerNameJWT,
        CookieService.PROVIDER_COOKIE.cookie
      );

      res.redirect("http://localhost:3003/");
    } catch (error) {
      console.log(error);

      res.status(500).json({
        error: new ApiError(500, "Error sign in user via github", "", [
          ERROR.INTERNAL_SERVER_ERROR,
          "Error accessing token from github",
        ]),
      });
    }
  }

  async refreshToken(providerName: string, refreshToken: string) {
    try {
      switch (providerName) {
        case AuthProviderCookieType.GOOGLE:
          console.log("TOKEN REFRESHED VIA GOOGLE");
          const token = await this.getNewGoogleAuthIdToken(refreshToken);
          return token;
        default:
          return null;
      }
    } catch (error) {
      return null;
    }
  }
}
