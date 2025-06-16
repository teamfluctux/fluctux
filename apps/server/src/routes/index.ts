import { Router } from "express";
import authRouter from "./auth.route"

const router = Router()

// Authentication Routes
router.use("/v1/auth", authRouter)

export default router