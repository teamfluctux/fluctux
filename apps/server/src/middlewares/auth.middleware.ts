import { NextFunction, Request, Response } from "express";
import { ApiError } from "@/utils/ApiError";
import { ERROR, HTTPErrorCodes } from "@/constants/http-status";
import { getSession } from "@/lib/getSession";
import { CookieService } from "@/services/auth/cookie.service";
import { AuthManager } from "@/controllers";
import { SessionDataType } from "@fluctux/types";

export async function authenticateUser(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const idToken = req.cookies[CookieService.ID_TOKEN.name];
  if (!idToken) {
    console.log("ID TOKEN INVALID");

    const refreshToken = req.cookies[CookieService.REFRESH_TOKEN.name];
    const providerToken = req.cookies[CookieService.PROVIDER_COOKIE.name];
    if (!refreshToken || !providerToken) {
      console.log("REFRESH TOKEN INVALID");
      res.status(401).json({
        error: new ApiError(401, "Unauthorized user! Token expired!", "", [
          ERROR.UNAUTHORIZED_USER,
        ]),
      });
    } else {
      const auth = new AuthManager();
      console.log("ID TOKEN REFRESHED");
      await auth.refreshToken(req, res);
      return next()
    }
  }
  console.log("ID TOKEN VALID");
  return next();
}
