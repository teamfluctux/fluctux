import express from "express";
import dotenv from "dotenv";
// import cors from "cors"
dotenv.config();

const app = express();
// app.use(cors()) // NO NEED AS WE ARE USING NGINX -> UBUNTU

app.get("/api/user", (req, res) => {
  res.status(200).json({ message: "Hello world from server " });
});

app.listen(process.env.PORT, () => {
  console.log(`server is listening on PORT-${process.env.PORT}`);
});
