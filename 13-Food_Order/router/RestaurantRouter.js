import express from "express";

import auth from "../middleware/auth.js";
import RestaurantController from "../controller/RestaurantController.js";
import checkRole from "../middleware/checkRole.js";
import upload from "../middleware/upload.js";
import {restaurantSchema} from "../validation/RestaurantSchema.js";
import validate from "../middleware/validate.js";

const router = express.Router();

router.post(
  "/addRestaurant",
  auth,
  checkRole("admin"),
  upload.single("RestaurantImage"),
  validate(restaurantSchema),

  RestaurantController.add,
);

export default router;