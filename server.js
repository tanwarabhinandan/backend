import { config } from "dotenv";
import express from "express";
import connectDb from "./db.js";

config();

const app = express();
const port = process.env.PORT;

connectDb();

app.get("/", (req, res) => {
  res.send("Hello from Express Server");
});

app.listen(port, () => {
  console.log(`Express server listening on port: ${port}`);
});
