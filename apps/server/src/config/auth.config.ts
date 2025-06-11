import { ExpressAuthConfig, Session } from "@auth/express";
import Google from "@auth/express/providers/google";
import Github from "@auth/express/providers/github";
import Slack from "@auth/express/providers/slack";
import { User as AuthJsUser } from "@auth/express";
import { CustomSession } from "types/types";

export const AuthOptions: ExpressAuthConfig = {
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    Github({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
    Slack({
      clientId: process.env.SLACK_CLIENT_ID!,
      clientSecret: process.env.SLACK_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async signIn() {
      return true;
    },
    async jwt({ token, user }: { token: any; user: AuthJsUser }) {
      if (user) {
        token.username = user.username;
        token.name = user.name;
        token.email = user.email;
        token.image = user.image;
        token.role = user.role;
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }: { session: CustomSession; token: any }) {
      if (token) {
        session.user.username = token.username;
        session.user.name = token.name;
        session.user.image = token.image;
        session.user.email = token.email;
        session.user.role = token.role;
        session.user.id = token.id;
      }
      return session;
    },
  },
  pages: {
    error: "/auth/error",
    verifyRequest: "/auth/verify-request",
  },
//   cookies: {
//     sessionToken: {
//       name: `__Secure-next-auth.session-token`,
//       options: {
//         httpOnly: true,
//         sameSite: "none",
//         secure: true, // ensure this is true in production
//         path: "/",
//       },
//     },
//   },
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days for token expiration
  },
  secret: process.env.AUTH_SECRET,
};
