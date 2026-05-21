import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
        trim: true
    },

    EmployeeId: {
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

    field: {
        type: String,
        enum: [
            "Fullstack Development",
            "Graphic Design",
            "Video Editing",
            "Ui/UX",
            "web Development"
        ],

        default: "Fullstack Development"
    },

    phoneNumber: {
        type: Number,
        required: true,
    },
    salary:{
        type: Number,
        required: true

    }

})

const Employee = mongoose.model(
    "employeeData",
    employeeSchema
)

export default Employee;