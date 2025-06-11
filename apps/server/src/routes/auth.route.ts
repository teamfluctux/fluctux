import { FxUser } from "@/controllers/user.controller";
import { Router } from "express";

const router = Router()
const user = new FxUser()

router.route("/signin").post(user.handleSignIn)
router.route("/signout").post(user.handleSignOut)

export default router