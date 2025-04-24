import { Router } from "express";

const router = Router();

router.get("/success", (_req, res) => {
  res.send("Success! Everything is working great!");
});

export default router;
