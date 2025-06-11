import { HTTPSuccessCodes } from "@/constants/http-status";
import { ApiResponse } from "@/utils/ApiResponse";
import { Request, Response } from "express";

export class AuthManager {
   protected async signInV1(req: Request, res: Response) {
    try {
      //   await signIn(req, res);
      // res.redirect("/dashboard");
      console.log("hello world in signin v1");
      
      res.status(200).json({message: new ApiResponse(HTTPSuccessCodes.OK, "Sign in successful")})
    } catch (error) {
      res.status(500).send("Sign in failed");
    }
  }

  protected async signOutV1(req: Request, res: Response) {
    try {
      //   await signOut(req, res);
      // res.redirect("/");
    } catch (error) {
      res.status(500).send("Sign out failed");
    }
  }

  handleSignIn(req: Request, res: Response){
    return this.signInV1(req, res);
  }

  handleSignOut(req: Request, res: Response){
    return this.signOutV1(req, res);
  }
}
