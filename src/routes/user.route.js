import { Router } from "express";

const router = Router();

router.route("/").get((req, res) => {
  res.send("Test");
});

export default router;
