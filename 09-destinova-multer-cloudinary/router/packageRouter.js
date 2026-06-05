import multer from "multer"
import express from "express"

import uploads from "../middlewares/upload.js"
import packageController from "../controller/packageController.js"

const router = express.Router()

router.post("/add",uploads.single("packageImages"), packageController.addPackage)


export default router;