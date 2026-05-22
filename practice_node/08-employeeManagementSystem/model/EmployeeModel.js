
import mongoose from "mongoose";

const EmployeeSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
        trim: true
    },
    id: {
        type: Number,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    phoneNumber: {
        type: String,
        minlength: 10,
        required: true
    },
    department: {
        type: String,
        required: true,
        enum: [
            "fullstack",
            "graphic design",
            "ui/ux design",
            "video editing"
        ],

    }
    ,
    salary: {
        type: Number,
        required: true
    }

})

const Employee = mongoose.model("EmployeeSchema", EmployeeSchema)

export default Employee;