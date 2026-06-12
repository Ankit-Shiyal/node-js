
import express, { Router } from "express"
import userController from "../controller/userController.js"

const router = express.Router()

router.post("/add", userController.add)
router.get("/AllUser", userController.getAllUser)
router.post("/Login", userController.login)

export default router;