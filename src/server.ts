import express from "express";
import router from "./router";
import morgan from "morgan";
import { Request, Response, NextFunction } from "express";

interface CustomRequest extends Request {
  test_secret: string;
}

const app = express();
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: CustomRequest, res: Response) => {
  res.send("Hi Mom");
});
app.use("/api", router);

export default app;
