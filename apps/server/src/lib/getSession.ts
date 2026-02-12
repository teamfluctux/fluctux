import { GoogleAuth } from "@/services/auth";
import { AuthProviderCookieType } from "@/services/auth/cookie.service";
import type { UserSessionType } from "@fluctux/types";
import { type TokenPayload } from "google-auth-library";

export const getSession = async (
  providerToken: string,
  idToken: string
): Promise<UserSessionType | null> => {
  try {
    switch (providerToken) {
      case AuthProviderCookieType.GOOGLE: {
        const googleAuth = new GoogleAuth();
        const userDataFromGoogle: TokenPayload | undefined =
          await googleAuth.getUserDataFromGoogleAuthToken(idToken);
        if (!userDataFromGoogle) return null
        const user: UserSessionType = {
          sub: userDataFromGoogle.sub,
          email: userDataFromGoogle?.email,
          name: userDataFromGoogle?.name,
          picture: userDataFromGoogle?.picture,
          provider: providerToken
        }
        return user
      }
      default: {
        return null;
      }
    }
  } catch (error) {
    console.log(error);
    return null;
  }
};
