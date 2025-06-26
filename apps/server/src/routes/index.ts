import { Request, Response, Router } from "express";
import authRouter from "./auth.route";
import { authenticateUser } from "@/middlewares";
import { CookieService } from "@/services/auth/cookie.service";

const router = Router();

router.use("/auth", authRouter);

router.get(
  "/protected",
  authenticateUser,
  async (req: Request, res: Response) => {
    const user = req.user;

    const oldIdToken = req.cookies[CookieService.ID_TOKEN.name];
    if (!oldIdToken) {
      console.log("new id token", req.newIDToken);
      const newIDToken = req.newIDToken;
      res.cookie(
        CookieService.ID_TOKEN.name,
        newIDToken,
        CookieService.ID_TOKEN.cookie
      );
    }
    res.status(200).json({ session: user });
  }
);

export default router;
