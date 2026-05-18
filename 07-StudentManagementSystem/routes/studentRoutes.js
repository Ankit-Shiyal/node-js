
import express from "express"

import studentController from "../controller/studentController.js"
const route = express.Router()

route.post("/add", studentController.add)
route.get("/getStudent", studentController.getAllStudentData)

export default route