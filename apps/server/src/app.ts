import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import router from "@/routes/index";

dotenv.config({
  path: "./.env",
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
app.use(cookieParser());

// All Routes
app.use("/api", router);

app.get("/health", (req, res) => {
  res.status(200).json({ message: "Server is healthy" });
});

export { app };
