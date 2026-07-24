import mongoose from "mongoose";

const RestaurantSchema = new mongoose.Schema(
  {
    RestaurantName: {
      type: String,
      required: true,
    },
    Address: {
      type: String,
      required: true,
    },
    Phone: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    openTime: {
      type: String,
      required: true,
    },
    closeTime: {
      type: String,
      required: true,
    },
    owner: {
      type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
    RestaurantImage: {
      type: String,
      required: true,
    },
    Cloudinary_Id: {
      type: String,
    },
  },
  { timestamps: true },
);

const RestaurantModel = mongoose.model("Restaurant", RestaurantSchema);

export default RestaurantModel;