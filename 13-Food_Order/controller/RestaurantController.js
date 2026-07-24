import RestaurantModel from "../model/RestaurantModel.js";
import HttpError from "../middleware/HttpError.js";

const add = async (req, res, next) => {
  try {
    const {
      RestaurantName,
      Address,
      Phone,
      description,
      state,
      city,
      openTime,
      closeTime,
      owner,
    } = req.body;

    const newRestaurant = await RestaurantModel({
      RestaurantName,
      Address,
      Phone,
      description,
      state,
      city,
      openTime,
      closeTime,
      owner:req.user._id,
      RestaurantImage: req.file?.path || null,
      Cloudinary_Id: req.file.filename || null,

    });

    await newRestaurant.save();

    res
      .status(201)
      .json({
        success: true,
        message: "newRestaurant added successfully",
        newRestaurant,
      });
  } catch (error) {
    next(new HttpError(error.message, 500));
  }
};
export default { add };