

import express from "express";
import checkAuth from "../middleware/checkAuth.js";

const router = express.Router();

router.get("/", checkAuth, (req, res) => {
  res.render("profile", { user: req.user });
});

export default router;