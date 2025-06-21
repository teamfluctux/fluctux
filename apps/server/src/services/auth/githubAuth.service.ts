import { OAuthApp } from "@octokit/oauth-app";

import dotenv from "dotenv";
dotenv.config();

export class GithubAuth {
  private static GH_CLIENT_ID = process.env.GITHUB_CLIENT_ID;
  private static GH_CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET;
  private static GH_REDIRECT_URI = process.env.GITHUB_AUTH_REDIRECT_URI;
  private static GH_STATE = process.env.GITHUB_STATE || "secureRandomState";

  private static GH_SCOPES = ["user:email", "read:user"];

  private octoClient: OAuthApp;
  constructor() {
    this.octoClient = new OAuthApp({
      clientType: "oauth-app",
      clientId: GithubAuth.GH_CLIENT_ID || "",
      clientSecret: GithubAuth.GH_CLIENT_SECRET || "",
    });
  }

  generateGithubAuthUrl() {
    const { url } = this.octoClient.getWebFlowAuthorizationUrl({
      redirectUrl: GithubAuth.GH_REDIRECT_URI || "",
      scopes: GithubAuth.GH_SCOPES || "",
      state: GithubAuth.GH_STATE,
      allowSignup: true,
    });
    return url;
  }

  async getGithubAuthTokens(authCode: string) {
    const {
      authentication: { token: accessToken },
    } = await this.octoClient.createToken({
      code: authCode,
      redirectUrl: GithubAuth.GH_REDIRECT_URI || "",
      state: GithubAuth.GH_STATE,
    });

    return {
      idToken: accessToken,
    };
  }
}
