import { Router } from "express";

const router = Router();

router.get("/hello", (_req, res) => {
  res.send("hello bhargav");
});

export default router;
