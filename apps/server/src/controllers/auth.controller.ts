import { ERROR, HTTPSuccessCodes } from "@/constants/http-status";
import { GoogleAuth } from "@/services/auth";
import { CookieService } from "@/services/auth/cookie.service";
import { ApiError } from "@/utils/ApiError";
import { ApiResponse } from "@/utils/ApiResponse";
import { NextFunction, Request, Response } from "express";

export class AuthManager extends GoogleAuth {
  callbackGoogleAuth(req: Request, res: Response) {
    return res.redirect(this.generateGoogleAuthUrl()) 
  }

  async handleSignInWithGoogle(req: Request, res: Response, next: NextFunction) {
    try {
      const {code} = req.query;
      const { idToken, refreshToken } = await this.getGoogleAuthtokens(code as string)
      const cookieService = new CookieService("google")
      res.cookie(cookieService.ID_TOKEN.name, idToken, cookieService.ID_TOKEN.cookie)
      res.cookie(cookieService.REFRESH_TOKEN.name, refreshToken, cookieService.REFRESH_TOKEN.cookie)
      res.redirect("/sudo/orgid")
    } catch (error) {
      res.status(500).json({error: new ApiError(500, "Error sign in user", "", [ERROR.INTERNAL_SERVER_ERROR] )})
    }
  }

  async refreshToken(req: Request, res: Response) {

  }


}
