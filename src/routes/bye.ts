import { Router } from "express";

const router = Router();

router.get("/bye", (_req, res) => {
  res.send("bye world");
});

export default router;
