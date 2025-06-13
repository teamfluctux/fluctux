import { FxUser } from "@/controllers/user.controller";
import { authenticatedUser } from "@/middlewares";
import { Router } from "express";

const router = Router()
const user = new FxUser()

// dont make handleSignIN an arrow function in the class to solve function undefined error as it causes unecessary function creation on each instantiated 
// using bind and arrow wrapper is negligible in perfomance
router.route("/signin").post(authenticatedUser, user.handleSignIn.bind(user))
router.route("/signout").post(user.handleSignOut)

export default router