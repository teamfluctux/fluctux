import express, { type Express } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import router from "@/routes/index";
import { ApiResponse } from "./utils/ApiResponse";
import { errorHandlerMiddleware, morganRequestLogger } from "./middlewares";
import { globalRedisService } from "./services/redis";
import { ApiError } from "./utils";
import { ERROR } from "./constants/http-status";

const app: Express = express();

app.use(
  cors({
    origin: "http://localhost:3003",
    credentials: true,
  })
);
app.use(express.json({ limit: "500kb" }));
app.use(express.urlencoded({ extended: true, limit: "500kb" }));
app.use(cookieParser());

// -- Morgan
app.use(morganRequestLogger());

// ============== API ROUTES =================
app.use("/api", router);

app.get("/", async (_, res) => {
  res.status(200).json(new ApiResponse(200, "Server is healthy"));
});

// for testing
app.get("/redis", async (_, res) => {
  const response = await globalRedisService.redisCheckConnection();

  res.status(200).json({
    message: new ApiResponse(200, "Response from server for redis", {
      response,
    }),
  });
});
// =========API ROUTES ENDS HERE===============

// -- Error Handler
app.use(errorHandlerMiddleware)


export { app };
