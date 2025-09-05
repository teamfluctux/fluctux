import { ERROR, HTTPErrorCodes } from "@/constants/http-status";
import { GoogleAuth } from "@/services/auth";
import {
  AuthProviderCookieType,
  CookieService,
} from "@/services/auth/cookie.service";
import { ApiError } from "@/utils/ApiError";
import { Request, Response } from "express";
import dotenv from "dotenv";
import { JWTManager } from "@/utils/jwt_manager";
dotenv.config();

export class AuthManager {
  private google: GoogleAuth;
  constructor() {
    this.google = new GoogleAuth()
  }
  redirectGoogleAuth(req: Request, res: Response) {
    return res.redirect(this.google.generateGoogleAuthUrl());
  }

  redirectGithubAuth(req: Request, res: Response) {
    return res.redirect(this.google.generateGoogleAuthUrl());
  }

  static clearProtectedCookies(_: Request, res: Response) {
    res.clearCookie(CookieService.ID_TOKEN.name);
    res.clearCookie(CookieService.REFRESH_TOKEN.name);
    res.clearCookie(CookieService.PROVIDER_COOKIE.name);
  }

  async handleSignInWithGoogle(req: Request, res: Response) {
    try {
      const { code } = req.query;
      /**  check if code is in req
       * if code not exist return unauthorized error
*/
      if (!code) res.status(500).json({
        error: new ApiError(HTTPErrorCodes.UNAUTHORIZED, "Unauthorized access!", "", [
          ERROR.UNAUTHORIZED_USER,
        ]),
      });

      /**
       * Get the idToken and refreshToken from google via passing the code
       */
      const { idToken, refreshToken } = await this.google.getGoogleAuthtokens(
        code as string
      );

      /**
       * Store the provider name to cookie
       * it will help to refresh token manager to refresh specific token
       * it will help to getSession on from specific provider
       */
      const jwtManager = new JWTManager(process.env.PROVIDER_NAME_JWT as string)
      const providerNameJWT = jwtManager.generateEncryptedJWTTokens(
        {
          dataObject: { provider: AuthProviderCookieType.GOOGLE },
          args: { expiresIn: "720h" }
        }
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
      res.redirect(`${process.env.ACCOUNT_WEB_BASE_URL}/?redirect=1`);
    } catch (error) {
      console.log(error);

      res.status(500).json({
        error: new ApiError(500, "Error sign in user vai google", "", [
          ERROR.INTERNAL_SERVER_ERROR,
        ]),
      });
    }
  }

  // async handleSignInWithGithub(req: Request, res: Response) {
  //   try {
  //     const { code } = req.query;
  //     const { idToken } = await this.getGithubAuthTokens(code as string);
  //     console.log("Token github", idToken);

  //     const providerNameJWT = generateEncryptedJWTTokens(
  //       { provider: AuthProviderCookieType.GITHUB },
  //       { expiresIn: "720h" }
  //     );

  //     res.cookie(
  //       CookieService.ID_TOKEN.name,
  //       idToken,
  //       CookieService.ID_TOKEN.cookie
  //     );

  //     res.cookie(
  //       CookieService.PROVIDER_COOKIE.name,
  //       providerNameJWT,
  //       CookieService.PROVIDER_COOKIE.cookie
  //     );

  //     res.redirect("http://localhost:3003/");
  //   } catch (error) {
  //     console.log(error);

  //     res.status(500).json({
  //       error: new ApiError(500, "Error sign in user via github", "", [
  //         ERROR.INTERNAL_SERVER_ERROR,
  //         "Error accessing token from github",
  //       ]),
  //     });
  //   }
  // }

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
