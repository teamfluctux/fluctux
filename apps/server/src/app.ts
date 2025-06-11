import express from "express";
import cors from "cors";
import { ExpressAuth } from "@auth/express";
import { currentSession } from "./middlewares";
import { AuthOptions } from "./config/auth.config";
import dotenv from "dotenv";

dotenv.config({
  path: "./.env"
});

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN, 
    credentials: true,
  })
); // NO NEED AS WE ARE USING NGINX -> UBUNTU
app.use(express.json({ limit: "500kb" }));
app.use(express.urlencoded({ extended: true, limit: "500kb" }));

// ============ AUTH.JS IMPLEMENTATIONS ================
// If your app is served through a proxy
// trust the proxy to allow us to read the `X-Forwarded-*` headers
app.set("trust proxy", true);
app.use("/api/v1/auth", ExpressAuth(AuthOptions));
// auth js middleware
app.use(currentSession);

// ========= ROUTES IMPORTS ===========
import authRouter from "@/routes/auth.route";

app.use("/api/v1/auth", authRouter);

app.get("/health", (req, res) => {
  res.status(200).json({message: "Server is healthy"})
})

export { app };
