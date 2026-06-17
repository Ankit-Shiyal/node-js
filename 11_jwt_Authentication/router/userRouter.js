
import express, { Router } from "express"
import userController from "../controller/userController.js"
import auth from "../middleware/auth.js"

const router = express.Router()

router.post("/add", userController.add)
router.get("/AllUser", userController.getAllUser)
router.post("/Login", userController.login)
router.get("/authLogin", auth, userController.AuthLogin)
router.delete("/delete", auth, userController.deleteUser)

router.patch("/update", auth, userController.updateUser)




export default router;