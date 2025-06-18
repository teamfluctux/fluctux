import { NextFunction, Request, Response } from "express";
import { ApiError } from "@/utils/ApiError";
import { ERROR, HTTPErrorCodes } from "@/constants/http-status";
import { getSession } from "@/lib/getSession";
import { CookieService } from "@/services/auth/cookie.service";

export async function authenticatedUser(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const session = (await getSession(req, res)) ?? undefined;

  // TODO: convert it to only session. for signin testing its currently !session
  if (session) {
    console.log("session", session.user);
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


  // MSG_WARNING: Remove this after testing
  return next();
}
