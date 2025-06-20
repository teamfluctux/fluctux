import { ERROR } from "@/constants/http-status";
import { AuthManager } from "@/controllers";
import {
  AuthProviderCookieType,
} from "@/services/auth/cookie.service";

export const getSession = async (providerToken: string, idToken: string) => {
  const auth = new AuthManager()
  try {
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
  } catch (error) {
    return null
  }
};
