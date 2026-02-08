import type { NextFunction, Request, Response } from "express";
import { ApiError } from "@/utils/ApiError";
import { ERROR, HTTPErrorCodes } from "@/constants/http-status";
import { getSession } from "@/lib/getSession";
import { CookieService } from "@/services/auth/cookie.service";
import type { SessionDataType, UserSessionType } from "@fluctux/types";
import { jwtManager } from "@/utils/jwt_manager";
import { authService } from "@/services/auth/auth.service";
import { authRedisService } from "@/services/redis";

export async function authenticateUser(
  req: Request,
  res: Response,
  next: NextFunction
) {
  // get idToken from cookies
  const idToken = req.cookies[CookieService.ID_TOKEN.name];

  // get tokens from cookies
  const refreshToken = req.cookies[CookieService.REFRESH_TOKEN.name];
  const providerToken = req.cookies[CookieService.PROVIDER_COOKIE.name];
  const deviceIdToken = req.cookies[CookieService.DEVICE_ID_COOKIE.name];

  /**
   * if providertoken or
   * refreshtoken or
   * deviceIdToken is missing
   * immediately return to unauthorized
   */
  if (!providerToken || !refreshToken || !deviceIdToken) {
    console.log("refresh or provider token missing");

    /**
     * make database connection here,
     * get the user id and remove all device ids
     * and remove devices from redis
     */

    // await redisAuthClient.removeAuthTokens("")
    res.status(401).json({
      error: new ApiError(401, "Unauthorized access!", "", [
        ERROR.UNAUTHORIZED_USER,
        "Missing or invalid refresh token",
        "Missing or invalid provider token",
        "Missing or invalid deviceId Token",
      ]),
    });
    return;
  }

  // extracting values from encrypted jwt values
  const decryptedProviderToken = jwtManager.getDecryptedJWTValue({
    token: providerToken,
    secret: process.env.PROVIDER_NAME_JWT!,
  }) as { provider: string };

  const decryptedRefreshToken = jwtManager.getDecryptedJWTValue({
    token: refreshToken,
    secret: process.env.REFRESH_TOKEN_SECRET!,
  }) as { refreshToken: string };

  const decryptedDeviceIdToken = jwtManager.getDecryptedJWTValue({
    token: deviceIdToken,
    secret: process.env.DEVICE_TOKEN_SECRET!,
  }) as { deviceId: string };

  // if extracted values are not valid return to unauthorized
  if (
    !decryptedProviderToken.provider ||
    !decryptedRefreshToken.refreshToken ||
    !decryptedDeviceIdToken.deviceId
  ) {
    res.status(400).json({
      error: new ApiError(
        HTTPErrorCodes.UNAUTHORIZED,
        "Unauthorized access!",
        "",
        [ERROR.UNAUTHORIZED_USER, "Invalid Tokens"]
      ),
    });
  }

  // if not idtoken in req or idtoken is not valid then renew the idtoken
  if (!idToken) {
    console.log("id token missing");

    // renew idToken
    const newIdToken = await authService.refreshToken(
      decryptedProviderToken.provider,
      decryptedRefreshToken.refreshToken
    );

    // if idToken is not created or returned correctly return invalid request
    if (!newIdToken) {
      res.status(400).json({
        error: new ApiError(400, "Invalid request", "", [
          ERROR.INVALID_REQUEST,
        ]),
      });
      return;
    }

    // rotate jwt tokens
    const encryptedProviderName = jwtManager.generateEncryptedJWTTokens({
      dataObject: { provider: decryptedProviderToken.provider },
      args: { expiresIn: "720h" },
      secret: process.env.PROVIDER_NAME_JWT!,
    });
    const ecryptedRefreshToken = jwtManager.generateEncryptedJWTTokens({
      dataObject: { refreshToken: decryptedRefreshToken.refreshToken ?? "" },
      args: { expiresIn: "720h" },
      secret: process.env.REFRESH_TOKEN_SECRET!,
    });
    const encryptedDeviceIdToken = jwtManager.generateEncryptedJWTTokens({
      dataObject: { deviceId: decryptedDeviceIdToken.deviceId },
      args: { expiresIn: "720h" },
      secret: process.env.DEVICE_TOKEN_SECRET!,
    });

    const encryptedIdToken = jwtManager.generateEncryptedJWTTokens({
      dataObject: { idToken: newIdToken ?? "" },
      secret: process.env.ID_TOKEN_JWT_SECRET!,
      args: { expiresIn: "5m" },
    });

    // save tokens to redis
    const redisResponse = authRedisService.addOrUpdateAuthTokens({
      refreshToken: ecryptedRefreshToken,
      deviceIdToken: encryptedDeviceIdToken,
      providerToken: encryptedProviderName,
    });

    if (!redisResponse) {
      res.status(HTTPErrorCodes.INTERNAL_SERVER_ERROR).json({
        error: new ApiError(
          HTTPErrorCodes.INTERNAL_SERVER_ERROR,
          "Something went wrong!",
          "",
          [ERROR.INTERNAL_SERVER_ERROR]
        ),
      });
      return;
    }

    console.log("new id token generated");

    const session = (await getSession(
      decryptedProviderToken.provider,
      newIdToken
    )) as UserSessionType;

    const user: SessionDataType = {
      sub: session?.user?.sub ?? "",
      name: session?.user?.name ?? "",
      email: session?.user?.email ?? "",
      picture: session?.user?.picture ?? "",
      provider: session?.provider ?? "",
    };

    console.log("user saved in req after refreshing", user);
    req.newIDToken = encryptedIdToken;
    req.newRefreshToken = ecryptedRefreshToken;
    req.newProviderToken = encryptedProviderName;
    req.newDeviceIdToken = encryptedDeviceIdToken;
    req.user = user;
    return next();
  }

  const decryptedIdToken = jwtManager.getDecryptedJWTValue({
    token: idToken,
    secret: process.env.ID_TOKEN_JWT_SECRET!,
  }) as { idToken: string };

  const session = (await getSession(
    decryptedProviderToken.provider,
    decryptedIdToken.idToken
  )) as UserSessionType;
  console.log("provider", decryptedProviderToken.provider);
  console.log("session", session);

  if (!session) {
    console.log("session missing");

    res.status(401).json({
      error: new ApiError(401, "Unauthorized access!", "", [
        ERROR.UNAUTHORIZED_USER,
        "Invalid session",
      ]),
    });
    return;
  }

  const user: SessionDataType = {
    sub: session?.user?.sub ?? "",
    name: session?.user?.name ?? "",
    email: session?.user?.email ?? "",
    picture: session?.user?.picture ?? "",
    provider: session?.provider ?? "",
  };

  console.log("user saved in req normally", user);

  req.user = user;
  return next();
}
