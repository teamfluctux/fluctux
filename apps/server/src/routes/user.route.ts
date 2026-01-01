import { FxUser } from "@/controllers";
import { Router } from "express";

const userRouter = Router() 

const fxUser = new FxUser()

userRouter.route("/get").get(fxUser.getUser.bind(fxUser))
userRouter.route("/create/user").post(fxUser.createUser.bind(fxUser))

export default userRouter 