import { AuthManager } from "@/controllers";
import { FxUser } from "@/controllers/user.controller";
import { authenticatedUser } from "@/middlewares";
import { Router } from "express";

const authRouter = Router()
const auth = new AuthManager()

// dont make handleSignIN an arrow function in the class to solve function undefined error as it causes unecessary function creation on each instantiated 
// using bind and arrow wrapper is negligible in perfomance
authRouter.route("/v1/signin/google").get(auth.callbackGoogleAuth.bind(auth))
authRouter.route("/v1/callback/google").get(auth.handleSignInWithGoogle.bind(auth))
// authRouter.route("/signout").post(user.handleSignOut)

export default authRouter