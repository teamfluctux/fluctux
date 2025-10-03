import express, { Request } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import router from "@/routes/index";
import { ApiResponse } from "./utils/ApiResponse";
import { GlobalRedis } from "./services/redis/global-redis";
import morgan from "morgan"
import { logger } from "@fluctux/logger"

const NODE_ENV = process.env.NODE_ENV;

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
app.use(morgan(function (tokens, req, res) {
  return [
    tokens.method(req, res),
    tokens.url(req, res),
    tokens.status(req, res),
    tokens.res(req, res, 'content-length'), '-',
    tokens['response-time'](req, res), 'ms'
  ].join('=')
}, {
  stream: {
    write: (message) => {
      const [method, url, status, content_length, response_time] = message.split("=")
      const statusNumber = Number(status)
      const logLevel = statusNumber >= 100 && statusNumber <= 199 ? "info" : statusNumber >= 200 && statusNumber <= 299 ? "success" : statusNumber >= 300 && statusNumber <= 399 ? "warn" : "error"
      const logMessage = `[${method}:${url}] Status: ${status} | Length: ${content_length} | Time: ${response_time} ms`;
      logger.log(`${logLevel}`, logMessage)
    }
  }
}))

// ============== ALL API ROUTES STARTS HERE ================= 
app.use("/api", router);

app.get("/health", async (req: Request, res) => {
  logger.error("hello world")
  logger.info("This is info")
  logger.log("error", "My error occurred", {
    label: "Hello world"
  })
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
