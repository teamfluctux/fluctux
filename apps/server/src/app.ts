import express from "express";
import cors from "cors"
import { ExpressAuth } from "@auth/express";
import Google from "@auth/express/providers/google"
import Github from "@auth/express/providers/github"
import Discord from "@auth/express/providers/discord"
import Twitter from "@auth/express/providers/twitter"

const app = express();
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
})) // NO NEED AS WE ARE USING NGINX -> UBUNTU
app.use(express.json({limit: "500kb"}))
app.use(express.urlencoded({extended: true, limit: "500kb"}))

// If your app is served through a proxy
// trust the proxy to allow us to read the `X-Forwarded-*` headers
app.set("trust proxy", true);
app.use("/auth", ExpressAuth({ providers: [Google, Github, Discord, Twitter] }));

app.get("/api/user", (req, res) => {
  res.status(200).json({ message: "Hello world from server " });
});

export { app };
