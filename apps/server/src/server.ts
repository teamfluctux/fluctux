import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.get("/api/user", (req, res) => {
  res.send("Hello world");
});

app.listen(process.env.PORT, () => {
  console.log(`server is listening on PORT-${process.env.PORT}`);
});
