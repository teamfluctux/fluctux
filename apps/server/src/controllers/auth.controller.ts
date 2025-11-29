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
import { v4 as uuidV4 } from "uuid";
import { AuthRedis } from "@/services/redis/auth.redis";

dotenv.config();

export class AuthController {
  private google: GoogleAuth;
  constructor() {
    this.google = new GoogleAuth();
  }
  redirectGoogleAuth(req: Request, res: Response) {
    return res.redirect(this.google.generateGoogleAuthUrl());
  }

  redirectGithubAuth(req: Request, res: Response) {
    return res.redirect(this.google.generateGoogleAuthUrl());
  }

  async handleSignInWithGoogle(req: Request, res: Response) {
    try {
      const { code } = req.query;
      /**  check if code is in req
       * if code not exist return unauthorized error
       */
      if (!code)
        res.status(500).json({
          error: new ApiError(
            HTTPErrorCodes.UNAUTHORIZED,
            "Unauthorized access!",
            "",
            [ERROR.UNAUTHORIZED_USER]
          ),
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
      if (!idToken || !refreshToken) {
        res.status(HTTPErrorCodes.SERVICE_UNAVAILABLE).json({
          error: new ApiError(
            HTTPErrorCodes.SERVICE_UNAVAILABLE,
            "Tokens not provided by google",
            "",
            [ERROR.SERVICE_UNAVAILABLE]
          ),
        });
      }

      const jwtManager = new JWTManager(
        process.env.PROVIDER_NAME_JWT as string
      );
      const encryptedProviderName = jwtManager.generateEncryptedJWTTokens({
        dataObject: { provider: AuthProviderCookieType.GOOGLE },
        args: { expiresIn: "720h" },
      });
      const ecryptedRefreshToken = jwtManager.generateEncryptedJWTTokens({
        dataObject: { refreshToken: refreshToken ?? "" },
        args: { expiresIn: "720h" },
        secret: process.env.REFRESH_TOKEN_SECRET,
      });
      const device_id = await uuidV4();
      const encryptedDeviceIdToken = jwtManager.generateEncryptedJWTTokens({
        dataObject: { deviceId: device_id },
        args: { expiresIn: "720h" },
        secret: process.env.DEVICE_TOKEN_SECRET,
      });

      const encryptedIdToken = jwtManager.generateEncryptedJWTTokens({
        dataObject: { idToken: idToken ?? "" },
        secret: process.env.ID_TOKEN_JWT_SECRET,
        args: { expiresIn: "20s" },
      });

      const redisClient = new AuthRedis();

      redisClient.addOrUpdateAuthTokens({
        refreshToken: ecryptedRefreshToken,
        deviceIdToken: encryptedDeviceIdToken,
        providerToken: encryptedProviderName,
      });

      res.cookie(
        CookieService.PROVIDER_COOKIE.name,
        encryptedProviderName,
        CookieService.PROVIDER_COOKIE.cookie
      );
      res.cookie(
        CookieService.ID_TOKEN.name,
        encryptedIdToken,
        CookieService.ID_TOKEN.cookie
      );
      res.cookie(
        CookieService.REFRESH_TOKEN.name,
        ecryptedRefreshToken,
        CookieService.REFRESH_TOKEN.cookie
      );
      res.cookie(
        CookieService.DEVICE_ID_COOKIE.name,
        encryptedDeviceIdToken,
        CookieService.DEVICE_ID_COOKIE.cookie
      );

      // for saving cookies from server to account app to main app 
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
}
