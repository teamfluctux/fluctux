import { NextFunction, Request, Response } from "express";
import { getSession } from "@auth/express";
import { AuthOptions } from "@/config";
import { ApiError } from "@/utils/ApiError";
import { ERROR, HTTPErrorCodes } from "@/constants/http-status";

export async function authenticatedUser(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const session =
    res.locals.session ?? (await getSession(req, AuthOptions)) ?? undefined;
  res.locals.session = session;
  // TODO: convert it to only session. for signin testing its currently !session 
  if (!session) {
    next();
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
}


export async function currentSession(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const session = (await getSession(req, AuthOptions)) ?? undefined
  res.locals.session = session
  return next()
}