
import express from "express";

import upload from "../middlewares/upload.js"
import packageController from "../controller/packageController.js";

const router = express.Router();

router.post("/add", upload.single("packageImages"), packageController.add);

router.get("/allPackage", packageController.getAll)
router.get("/:id", packageController.getById)

router.delete("/:id", packageController.deletePackage)

router.patch("/:id", upload.single("packageImages"), packageController.updatePackage)

export default router;