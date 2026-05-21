


import express from "express"

import employeeController from "../controller/employeeController.js"


const router = express.Router()

router.post("/add", employeeController.add)
router.get("/getAllEmployee", employeeController.getAllEmployeeData)
router.get("/:id", employeeController.employeeById)
router.delete("/:id", employeeController.deleteById)
// router.patch("/:id", employeeController.updateById)

router.patch("/:id", employeeController.updateManually)


export default router