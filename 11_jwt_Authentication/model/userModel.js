
import mongoose from "mongoose";
import bcrypt from "bcryptjs";

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

userScheme.pre("save", async function () {
  const user = this;

  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, 10);
  }
});

const modelUser = mongoose.model("user", userScheme)

export default modelUser;