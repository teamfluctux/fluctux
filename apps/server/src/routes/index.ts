import { Router } from "express";
import authRouter from "./auth.route"

const router = Router()

// Authentication Routes
router.use("/auth", authRouter)

export default router