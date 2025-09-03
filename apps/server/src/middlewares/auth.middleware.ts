import { NextFunction, Request, Response } from "express";
import { ApiError } from "@/utils/ApiError";
import { ERROR } from "@/constants/http-status";
import { getSession } from "@/lib/getSession";
import { CookieService } from "@/services/auth/cookie.service";
import { AuthManager } from "@/controllers";
import { SessionDataType } from "@fluctux/types";
import jwt from "jsonwebtoken";

export async function authenticateUser(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const auth = new AuthManager();
  const idToken = req.cookies[CookieService.ID_TOKEN.name];
  const refreshToken = req.cookies[CookieService.REFRESH_TOKEN.name];
  const providerToken = req.cookies[CookieService.PROVIDER_COOKIE.name];

  // MSG_ERROR dont remove !refreshToken validation. for now its for testing for github only
  if (!providerToken || !refreshToken) {
    console.log("refresh or provider token missing");

    res.status(401).json({
      error: new ApiError(401, "Unauthorized access!", "", [
        ERROR.UNAUTHORIZED_USER,
        "Invalid refresh token",
        "Invalid provider token",
      ]),
    });
    return;
  }

  const decryptedProviderToken = jwt.verify(
    providerToken,
    process.env.JWT_SECRET as string
  ) as { provider: string };

  if (!decryptedProviderToken) {
    res.status(400).json({
      error: new ApiError(400, "Invalid request", "", [
        ERROR.INVALID_REQUEST,
        "Invalid provider token",
      ]),
    });
  }

  if (!idToken) {
    console.log("id token missing");

    const newIdToken = await auth.refreshToken(
      decryptedProviderToken.provider,
      refreshToken
    );
    if (!newIdToken) {
      res.status(400).json({
        error: new ApiError(400, "Invalid request", "", [
          ERROR.INVALID_REQUEST,
          "Invalid refresh token",
        ]),
      });
      return;
    }
    console.log("new id token generated");

    const session = await getSession(
      decryptedProviderToken.provider,
      newIdToken
    );
    const user: SessionDataType = {
      _id: session?.user?.sub || "",
      name: session?.user?.name || "",
      email: session?.user?.email || "",
      picture: session?.user?.picture || "",
      role: "USER",
      provider: session?.provider || "",
    };

    console.log("user saved in req after refreshing", user);
    req.newIDToken = newIdToken;
    req.user = user;
    return next();
  }

  const session = await getSession(decryptedProviderToken.provider, idToken);
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
    _id: session?.user?.sub || "",
    name: session?.user?.name || "",
    email: session?.user?.email || "",
    picture: session?.user?.picture || "",
    role: "USER",
    provider: session?.provider || "",
  };
  console.log("user saved in req normally", user);

  req.user = user;
  return next();
}
