import { createOAuthAppAuth } from "@octokit/auth-oauth-app";
import { Octokit } from "@octokit/rest";
import dotenv from "dotenv";
import { Request, Response } from "express";
dotenv.config();

export class GithubAuth {
  private static CLIENT_ID = process.env.GITHUB_CLIENT_ID;
  private static CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET;
  private static REDIRECT_URI = process.env.GITHUB_AUTH_REDIRECT_URI;

  private static SCOPES = [];

  private octoClient;
  constructor() {
    this.octoClient = new Octokit({
      authStrategy: createOAuthAppAuth,
      auth: {
        clientType: "oauth-app",
        clientId: GithubAuth.CLIENT_ID,
        clientSecret: GithubAuth.CLIENT_SECRET,
      },
    });
  }

  async requestGithubIdentity(req: Request, res: Response) {
    await this.octoClient.request("GET https://github.com/login/oauth/authorize", {
        client_id: GithubAuth.CLIENT_ID,
        redirect_uri: GithubAuth.REDIRECT_URI,
        scope: GithubAuth.SCOPES
    })
  }
}
