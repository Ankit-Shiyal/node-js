
import express, { Router } from "express"
import userController from "../controller/userController.js"

const router = express.Router()

router.post("/add", userController.add)

export default router;