import express from "express";
import router from "./router";

const app = express();
app.get("/", (req, res) => {
  res.send("Hi Mom");
});
app.use("/api", router);

export default app;
