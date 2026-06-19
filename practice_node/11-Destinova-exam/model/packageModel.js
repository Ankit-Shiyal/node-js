import mongoose from "mongoose";
const packageScheme = new mongoose.Schema({

    packageName: {
        type: String,
        required: true,
        trim: true
    },
    packagePrice: {
        type: Number,
        required: true
    },
    StartDate: {
        type: Date,
        required: true
    },
    EndDate: {

        type: Date,
        required: true
    },
    Description: {
        type: String,
        required: true,
    },
    packageImages: {
        type: String,
        required: true
    }
    ,cloudinary_id: {
      type: String,
    },
},{
    timestamps:true
})

const PackageModels = mongoose.model("package", packageScheme)

export default PackageModels;