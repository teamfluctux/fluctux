import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import router from "@/routes/index";
import { ApiResponse } from "./utils/ApiResponse";

dotenv.config({
  path: "./.env",
});

const NODE_ENV = process.env.NODE_ENV; 
const HOST = process.env.HOST;
const PORT = process.env.PORT;

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
); // NO NEED AS WE ARE USING NGINX -> UBUNTU
app.use(express.json({ limit: "500kb" }));
app.use(express.urlencoded({ extended: true, limit: "500kb" }));
app.use(cookieParser());

app.use((req, res, next) => {
  console.log(`${NODE_ENV} ${req.method} ${req.path}`, req.body)
  next()
})  

// All Routes
app.use("/api", router);

app.get("/health", (req, res) => {
  res.status(200).json({ message: new ApiResponse(200, "Server is healthy") });
}); 
 
export { app };
