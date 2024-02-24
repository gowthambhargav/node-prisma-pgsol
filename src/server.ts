import express from "express";
import router from "./router";
import morgan from "morgan";
import { Request, Response, NextFunction } from "express";
import { protect } from "./modules/auth";
import { createNewUser, signin } from "./handlers/user";

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
app.use("/api", protect, router);
app.post("/user", createNewUser);
app.post("/signin", signin);

export default app;
