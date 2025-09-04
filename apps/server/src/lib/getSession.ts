import { AuthManager } from "@/controllers";
import { GoogleAuth } from "@/services/auth";
import { AuthProviderCookieType } from "@/services/auth/cookie.service";

interface UserSession {
  user: unknown;
  provider: string;
}

export const getSession = async (
  providerToken: string,
  idToken: string
): Promise<UserSession | null> => {
  try {
    switch (providerToken) {
      case AuthProviderCookieType.GOOGLE: {
        const googleAuth = new GoogleAuth()
        const userDataFromGoogle =
          await googleAuth.getUserDataFromGoogleAuthToken(idToken);
        return {
          user: userDataFromGoogle,
          provider: providerToken,
        };
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
