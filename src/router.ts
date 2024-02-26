import { Router } from "express";
import { Request, Response } from "express";
import { body, oneOf, validationResult } from "express-validator";
import { Handleinputerrors } from "./modules/middleware";
import {
  UpdateProduct,
  getSingleProduct,
  createProduct,
  DeleteProduct,
  getUserProducts,
} from "./handlers/product";
import {
  DeleteUpdate,
  GetAllUpdate,
  createUpdate,
  getSingleUpdate,
  updateUpdate,
} from "./handlers/update";
interface CustomRequest extends Request {
  user: string;
}
const router = Router();
router.get("/product", getUserProducts);
router.get("/product/:id", getSingleProduct);
router.put(
  "/product/:id",
  body("name").isString(),
  Handleinputerrors,
  UpdateProduct
);
router.post(
  "/product",
  body("name").isString(),
  Handleinputerrors,
  createProduct
);
router.delete("/product/:id", DeleteProduct);

// Update

router.get("/update", GetAllUpdate);
router.get("/update/:id", getSingleUpdate);
router.put(
  "/update/:id",
  body("title").optional(),
  body("body").optional(),
  body("status").isIn(["IN_PROGRESS", "SHIPPED", "DEPRECATED"]),
  body("version").optional(),
  Handleinputerrors,
  updateUpdate
);
router.post(
  "/update",
  body("title").exists(),
  body("body").exists().isString(),

  Handleinputerrors,
  createUpdate
);
router.delete("/update/:id", DeleteUpdate);

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
router.use((err, req, res, next) => {
  console.log(err);
  res.json({ msg: "route error" });
});
export default router;
