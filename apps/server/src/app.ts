import { ExpressAuth } from "@auth/express";
import express from "express";
import cors from "cors"

const app = express();
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
})) // NO NEED AS WE ARE USING NGINX -> UBUNTU
// If your app is served through a proxy
// trust the proxy to allow us to read the `X-Forwarded-*` headers
app.set("trust proxy", true);
app.use("/auth/*", ExpressAuth({ providers: [] }));

app.get("/api/user", (req, res) => {
  res.status(200).json({ message: "Hello world from server " });
});

export { app };
