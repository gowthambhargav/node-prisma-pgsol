import { Router } from "express";
import { Request, Response } from "express";
import { body, validationResult } from "express-validator";
interface CustomRequest extends Request {
  test_secret: string;
}
const router = Router();
router.get("/product", (req: CustomRequest, res: Response) => {
  res.json({ msg: req.test_secret });
});
router.get("/product/:id", () => {});
router.put("/product/:id", body("name").isString(), (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    res.status(400);
    res.json({ errors: errors.array() });
  }
  res.json({ msg: "Hello" });
});
router.post("/product", () => {});
router.delete("/product/:id", () => {});

// Update

router.get("/update", () => {});
router.get("/update/:id", () => {});
router.put("/update/:id", () => {});
router.post("/update", () => {});
router.delete("/update/:id", () => {});

// Update Points

router.get("/updatepoint", () => {});
router.get("/updatepoint/:id", () => {});
router.put("/updatepoint/:id", () => {});
router.post("/updatepoint", () => {});
router.delete("/updatepoint/:id", () => {});

export default router;
