
import express from "express"

import studentController from "../controller/studentController.js"
const router = express.Router()

router.post("/add", studentController.add)
router.get("/getStudent", studentController.getAllStudentData)
router.get("/:id", studentController.studentById)
// router.delete("/:id", studentController.deleteById)
// router.patch("/:id",studentController.updateById)
router.patch("/:id", studentController.updateManually)
router.delete("/allDelete",studentController.deleteAllStudent);

export default router