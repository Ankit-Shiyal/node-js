
import mongoose, { Types } from "mongoose";

const studentSchema = new mongoose.Schema({
    name: {
        Types: String,
        required: true,
        trim: true
    },
    GRID: {
        Types: Number,
        required: true,
        unique: true,
    },
    email: {
        Types: String,
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
        "Ui/UX",
      ],
    },
     phoneNumber: {
      type: Number,
      required: true,
      min: 10,
    },

})

const student = mongoose.model("studentData", studentSchema)