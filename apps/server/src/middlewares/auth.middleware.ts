import { NextFunction, Request, Response } from "express";
import { ApiError } from "@/utils/ApiError";
import { ERROR, HTTPErrorCodes } from "@/constants/http-status";
import { getSession } from "@/lib/getSession";
import { CookieService } from "@/services/auth/cookie.service";
import { AuthManager } from "@/controllers";

export async function authenticateUser(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const session = (await getSession(req, res)) ?? undefined;

  // TODO: convert it to only session. for signin testing its currently !session
  if (session) {
    console.log("session", session.payload.user);
    return next();
  }

  // TODO: uncomment it
  // res.status(HTTPErrorCodes.UNAUTHORIZED).json({
  //   error: new ApiError(
  //     HTTPErrorCodes.UNAUTHORIZED,
  //     "Failed to authenticate! Unauthorized user",
  //     undefined,
  //     [ERROR.UNAUTHORIZED_USER]
  //   ),
  // });

  // MSG_WARNING: Remove after testing
  return next();
}

export async function tokenValidator(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const idToken = req.cookies[CookieService.ID_TOKEN.name];

  if (!idToken) {
    const refreshToken = req.cookies[CookieService.REFRESH_TOKEN.name];
    if (!refreshToken)
      res.status(401).json({
        error: new ApiError(401, "Unauthorized user! Token expired!", "", [
          ERROR.UNAUTHORIZED_USER,
        ]),
      });
    const auth = new AuthManager();
    await auth.refreshToken(req, res);
    return next();
  }

  return next();
}
