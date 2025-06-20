import { AuthManager } from "@/controllers";
import {
  AuthProviderCookieType,
  CookieService,
} from "@/services/auth/cookie.service";
import { Request, Response } from "express";

export const getSession = async (req: Request, res: Response) => {
  const auth = new AuthManager();
  const idToken = req.cookies[CookieService.ID_TOKEN.name];
  const refreshToken = req.cookies[CookieService.REFRESH_TOKEN.name];
  const providerToken = req.cookies[CookieService.PROVIDER_COOKIE.name];
  console.log("Token", refreshToken, idToken);

  if (!idToken || !providerToken) {
    return null;
  }

  switch (providerToken) {
    case AuthProviderCookieType.GOOGLE:
      const userData = await auth.getUserDataFromGoogleAuthToken(idToken);
      return {
          user: userData,
          provider: providerToken,
      };
    default:
      return null;
  }
};
