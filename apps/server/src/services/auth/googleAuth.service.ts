import { google } from "googleapis";
import dotenv from "dotenv";

dotenv.config();

export class GoogleAuth {
  private static CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
  private static CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
  private static REDIRECT_URI = process.env.GOOGLE_AUTH_REDIRECT_URI;

  private static SCOPES = [
    "https://www.googleapis.com/auth/userinfo.profile",
    "https://www.googleapis.com/auth/userinfo.email",
  ];

  private oauthClient;

  constructor() {
    this.oauthClient = new google.auth.OAuth2({
      client_id: GoogleAuth.CLIENT_ID,
      client_secret: GoogleAuth.CLIENT_SECRET,
      redirectUri: GoogleAuth.REDIRECT_URI,
    });
  }

  protected generateGoogleAuthUrl() {
    return this.oauthClient.generateAuthUrl({
      access_type: "offline",
      scope: GoogleAuth.SCOPES,
      include_granted_scopes: true,
      // it will display the consent screen to the user
      prompt: "consent",
      redirect_uri: GoogleAuth.REDIRECT_URI,
    });
  }

  protected async getGoogleAuthtokens(authCode: string) {
    const { tokens } = await this.oauthClient.getToken(authCode);
    return {
      idToken: tokens.id_token,
      accessToken: tokens.access_token,
      refreshToken: tokens.refresh_token,
    };
  }

  protected async getNewGoogleAuthIdToken(refreshToken: string) {
    this.oauthClient.setCredentials({ refresh_token: refreshToken });
    const tokens = await this.oauthClient.refreshAccessToken();
    return tokens.credentials.id_token;
  }
}
