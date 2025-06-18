import { Request, Response, Router } from "express";
import authRouter from "./auth.route"

const router = Router()

// Authentication Routes
router.use("/auth", authRouter)

router.get("/protected", (req: Request, res: Response) => {
    
})

export default router