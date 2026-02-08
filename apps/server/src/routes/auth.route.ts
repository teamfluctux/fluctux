import { authController } from "@/controllers";

import { Router } from "express";

const authRouter = Router();

// dont make handleSignIN an arrow function in the class to solve function undefined error as it causes unecessary function creation on each instantiated
// using bind and arrow wrapper is negligible in perfomance
authRouter
  .route("/signin/google")
  .get(authController.redirectGoogleAuth.bind(authController));
authRouter
  .route("/callback/google")
  .get(authController.handleSignInWithGoogle.bind(authController));
// authRouter.route("/signin/github").get(auth.redirectGithubAuth.bind(auth));
// authRouter
//   .route("/callback/github")
//   .get(auth.handleSignInWithGithub.bind(auth));
// authRouter.route("/refresh").get(auth.refreshToken.bind(auth))
// authRouter.route("/signout").post(user.handleSignOut)

export default authRouter;
