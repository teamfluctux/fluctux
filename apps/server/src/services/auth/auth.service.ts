import {
    AuthProviderCookieType,
    CookieService,
} from "@/services/auth/cookie.service";
import { GoogleAuth } from "./googleAuth.service";
import { Request, Response } from "express";

export class AuthService {
    private google: GoogleAuth;
    constructor() {
        this.google = new GoogleAuth()
    }

    static clearProtectedCookies(_: Request, res: Response) {
        res.clearCookie(CookieService.ID_TOKEN.name);
        res.clearCookie(CookieService.REFRESH_TOKEN.name);
        res.clearCookie(CookieService.PROVIDER_COOKIE.name);
    }

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