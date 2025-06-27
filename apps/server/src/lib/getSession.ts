import { AuthManager } from "@/controllers";
import { AuthProviderCookieType } from "@/services/auth/cookie.service";

interface UserSession {
  user: unknown;
  provider: string;
}

export const getSession = async (
  providerToken: string,
  idToken: string
): Promise<UserSession | null> => {
  const auth = new AuthManager();
  try {
    switch (providerToken) {
      case AuthProviderCookieType.GOOGLE: {
        const userDataFromGoogle =
          await auth.getUserDataFromGoogleAuthToken(idToken);
        return {
          user: userDataFromGoogle,
          provider: providerToken,
        };
      }
      case AuthProviderCookieType.GITHUB: {
        const userDataFromGithub = await auth.getUserFromGithubToken(idToken);
        console.log("userDataFromGithub", userDataFromGithub);
        return {
          user: userDataFromGithub,
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
