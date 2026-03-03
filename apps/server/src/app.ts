import express, { type Express } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import router from "@/routes/index";
import { ApiResponse } from "./utils/ApiResponse";
import { errorHandlerMiddleware, morganRequestLogger } from "./middlewares";
import { globalRedisService } from "./services/redis";
import { pgDb } from "./lib/db-connect";

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
  // -- For Testing purpose
  let data;
  try {
    data = await pgDb.query.app_users.findFirst({
      columns: {
        id: true,
        username: true,
        email: true,
        created_at: true,
        account_status: true,
        account_provider: true,
      },
      with: {
        user_profile: {
          columns: {
            id: true,
            name: true,
            avatar: true,
            cover_img: true,
          },
        },
      },
    });
  } catch (error) {
    console.log("err");
  }
  res.status(200).json(new ApiResponse(200, "Server is healthy", data));
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
app.use(errorHandlerMiddleware);

export { app };
