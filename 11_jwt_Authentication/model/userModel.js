
import mongoose from "mongoose";

const userScheme = new mongoose.Schema({

    name: {
        type: String,
        required: true,
        trim: true,
    },
    Email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        trim: true,
        validate: (value) => {
            if (value.toLowerCase() === "password") {
                throw new Error("password can not set as a password")
            }
        }
    }
}, 
{
    timestamps: true
})

const modelUser = mongoose.model("user", userScheme)

export default modelUser;