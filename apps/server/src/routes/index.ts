import { type Request, type Response, Router,  } from "express";
import { authenticateUser } from "@/middlewares";
import { CookieService } from "@/services/auth/cookie.service";

// =============== Router imports =======================
import authRouter from "./auth.route";
import kanbanRouter from "./kanban.route";
import userRouter from "./user.route"
// ======================================================

const router: Router = Router();

// =============== Router Implementations ===============
router.use("/auth", authRouter);
router.use("/kanban", kanbanRouter);
router.use("/user", userRouter)
// ======================================================

// ============== Global Routes =========================
router.get(
  "/protected",
  authenticateUser,
  async (req: Request, res: Response) => {
    const user = req.user;
    const newIDToken = req.newIDToken;
    const newRefreshToken = req.newRefreshToken;
    const newDeviceIdToken = req.newDeviceIdToken;
    const newProviderToken = req.newProviderToken;
    if (newIDToken) {
      console.log(newIDToken, "inside new id token");
      res.cookie(
        CookieService.ID_TOKEN.name,
        newIDToken,
        CookieService.ID_TOKEN.cookie
      );
    }

    if (newProviderToken) {
      res.cookie(
        CookieService.PROVIDER_COOKIE.name,
        newProviderToken,
        CookieService.PROVIDER_COOKIE.cookie
      );
    }

    if (newRefreshToken) {
      res.cookie(
        CookieService.REFRESH_TOKEN.name,
        newRefreshToken,
        CookieService.REFRESH_TOKEN.cookie
      );
    }

    if (newDeviceIdToken) {
      res.cookie(
        CookieService.DEVICE_ID_COOKIE.name,
        newDeviceIdToken,
        CookieService.DEVICE_ID_COOKIE.cookie
      );
    }

    console.log("hey user", user);
    res.status(200).json({ session: user });
  }
);

export default router;
