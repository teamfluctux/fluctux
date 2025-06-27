import express, { Request } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import router from "@/routes/index";
import { ApiResponse } from "./utils/ApiResponse";



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

app.use((req, res, next) => {
  console.log(`${NODE_ENV} ${req.method} ${req.path}`, req.body);
  return next();
});

// All Routes
app.use("/api", router);

app.get("/health", async (req: Request, res) => {
  res.status(200).json({ message: new ApiResponse(200, "Server is healthy") });
});

export { app };
