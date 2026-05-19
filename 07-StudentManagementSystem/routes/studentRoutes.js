
import express from "express"

import studentController from "../controller/studentController.js"
const route = express.Router()

route.post("/add", studentController.add)
route.get("/getStudent", studentController.getAllStudentData)
route.get("/:id", studentController.studentById)
route.delete("/:id", studentController.deleteById)
route.patch("/:id",studentController.updateById)


export default route