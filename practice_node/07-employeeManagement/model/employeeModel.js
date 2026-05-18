import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
        trim: true
    },

    GRID: {
        type: Number,
        required: true,
        unique: true
    },

    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },

    course: {
        type: String,
        required: true,

        enum: [
            "Fullstack Development",
            "Graphic Design",
            "Video Editing",
            "Ui/UX"
        ],

        default: "Fullstack Development"
    },

    phoneNumber: {
        type: Number,
        required: true,
        min: 10
    }

});

const employee = mongoose.model(
    "employeeData",
    employeeSchema
)

export default employee;