
import express from "express";

import EmployeeControllers from "../controller/EmployeeController.js"

const router  = express.Router()

router.post("/add", EmployeeControllers.add)
router.get("/allEmployee", EmployeeControllers.getAllEmployee)

router.get("/:id", EmployeeControllers.employeeById)


export default router