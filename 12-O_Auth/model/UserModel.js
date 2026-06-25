

import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    googleId: {
        type: String,
        required: true,
    }
}, {
    timestamps: true
})


const UserModel = mongoose.model(UserSchema);

export default UserModel;