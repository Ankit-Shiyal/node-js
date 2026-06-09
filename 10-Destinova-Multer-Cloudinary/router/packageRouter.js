
import express from "express";

import upload from "../middleware/upload.js"
import packageController from "../controller/packageController.js";

const router = express.Router();

router.post("/add", upload.single("packageImages"), packageController.add);

router.get("/allPackage", packageController.getAllPackage)
router.get("/:id", packageController.getById)

router.delete("/:id", packageController.deletePackage)

export default router;