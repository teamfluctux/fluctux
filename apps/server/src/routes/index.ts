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

router.get("/protected",  async (req: Request, res: Response) => {
  const session = await getSession(req, res);
  const modifiedSession: SessionDataType = {
    email: session?.user?.email || "",
    _id: session?.user?.sub || "",
    name: session?.user?.name || "",
    picture: session?.user?.picture || "",
    role: "USER",
    provider: session?.provider,
  }
  res.status(200).json({ session: modifiedSession });
});

export default router;
