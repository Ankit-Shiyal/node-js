// external module
import express from "express";

// local modules
import UserController from "../controller/UserController.js";
import { registerSchema } from "../validation/UserSchema.js";
import validate from "../middleware/validate.js";
import auth from "../middleware/auth.js";
import checkRole from "../middleware/checkRole.js";
import upload from "../middleware/upload.js";
import { updateUserSchema } from "../validation/UserSchema.js";
// router
const router = express.Router();

router.delete("/delete/:id", auth,checkRole("admin"), UserController.deleteUser)

router.patch(
  "/update/:id",
  auth,
  checkRole("admin"),
  upload.single("Profile_Pic"),
  UserController.updateUser,
);

export default router