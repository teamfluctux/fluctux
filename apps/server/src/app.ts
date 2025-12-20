import express, { Request } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import router from "@/routes/index";
import { ApiResponse } from "./utils/ApiResponse";
import { GlobalRedis } from "./services/redis/global-redis";
import { morganRequestLogger } from "./middlewares/morgan.middleware";

const app = express();

app.use(
  cors({
    origin: "http://localhost:3003",
    credentials: true,
  })
); // NO NEED AS WE ARE USING NGINX -> UBUNTU
app.use(express.json({ limit: "500kb" }));
app.use(express.urlencoded({ extended: true, limit: "500kb" }));
app.use(cookieParser());

// MORGAN
app.use(morganRequestLogger());

// ============== ALL API ROUTES STARTS HERE =================
app.use("/api", router);

app.get("/health", async (req: Request, res) => {
  res.status(200).json({ message: new ApiResponse(200, "Server is healthy") });
});

app.get("/redis", async (req, res) => {
  const redis = new GlobalRedis();
  const response = await redis.redisCheckConnection();
  res.status(200).json({
    message: new ApiResponse(200, "Response from server for redis", response),
  });
});

// ========================API ROUTES ENDS HERE============================

export { app };
