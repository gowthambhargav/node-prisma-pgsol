import { Router } from "express";
import { Request, Response } from "express";
import { body, oneOf, validationResult } from "express-validator";
import { Handleinputerrors } from "./modules/middleware";
interface CustomRequest extends Request {
  user: string;
}
const router = Router();
router.get("/product", (req: CustomRequest, res: Response) => {
  res.json({ msg: "hkgh" });
});
router.get("/product/:id", () => {});
router.put(
  "/product/:id",
  body("name").isString(),
  Handleinputerrors,
  (req, res) => {
    res.json({ msg: "Hello" });
  }
);
router.post(
  "/product",
  body("name").isString(),
  Handleinputerrors,
  (req: CustomRequest, res) => {
    res.send("HI");
  }
);
router.delete("/product/:id", () => {});

// Update

router.get("/update", () => {});
router.get("/update/:id", () => {});
router.put(
  "/update/:id",
  body("title").optional(),
  body("body").optional(),
  body("status").isIn(["IN_PROGRESS", "SHIPPED", "DEPRECATED"]),
  body("version").optional(),
  Handleinputerrors,
  () => {}
);
router.post(
  "/update",
  body("title").exists(),
  body("body").exists().isString(),
  Handleinputerrors,
  () => {}
);
router.delete("/update/:id", () => {});

// Update Points

router.get("/updatepoint", () => {});
router.get("/updatepoint/:id", () => {});
router.put(
  "/updatepoint/:id",
  body("name").optional().isString(),
  body("description").optional().isString(),
  () => {}
);
router.post(
  "/updatepoint",
  body("name").isString(),
  body("description").isString(),
  body("updateId").exists().isString(),
  () => {}
);
router.delete("/updatepoint/:id", () => {});

export default router;
