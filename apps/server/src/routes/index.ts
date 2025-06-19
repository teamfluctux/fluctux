import { Request, Response, Router } from "express";
import authRouter from "./auth.route";
import { getSession } from "@/lib/getSession";
import { SessionDataType } from "@fluctux/types";

const router = Router();

// Authentication Routes
router.use("/auth", authRouter);

router.get("/protected", async (req: Request, res: Response) => {
  const session = (await getSession(req, res)) ?? undefined;
  if (!session) res.status(401);
  const user: SessionDataType = {
    _id: "12031451621465651",
    email: session?.payload?.user?.email || "",
    name: session?.payload?.user?.name || "",
    picture: session?.payload?.user?.picture || "",
    role: "USER",
    apiVersion: "v1",
    provider: session?.payload?.provider,
  };
  res.status(200).json({ user: user });
});

export default router;
