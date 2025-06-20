import { Request, Response, Router } from "express";
import authRouter from "./auth.route";
import { authenticateUser } from "@/middlewares";
import { getSession } from "@/lib/getSession";
import { SessionDataType } from "@fluctux/types";
import { AuthManager } from "@/controllers";
import { CookieService } from "@/services/auth/cookie.service";

const router = Router();

// Authentication Routes
const auth = new AuthManager()

router.use("/auth", authRouter);

router.get("/protected", authenticateUser,  async (req: Request, res: Response) => {
  const user = req.user
  res.status(200).json({ session: user });
});

export default router;
