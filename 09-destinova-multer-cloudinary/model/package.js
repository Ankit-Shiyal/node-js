
import mongoose, { Schema, Types } from "mongoose";

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
    packageDestination: {
        type: String,
        required: true,
        trim: true
    },
    StartDate: {
        type: Date,
        required: true
    },
    EndDate: {

        type: Date,
        required: true
    },
    packageDescription: {
        type: String,
        required: true,
    },
    packageImages: {
        type: String,
        required: true
    }
},{
    timestamps:true
})

const package = mongoose.model("package", packageScheme)

export default package;