import jwt from "jsonwebtoken";

import HttpError from "./HttpError.js";
import User from "../model/userModel.js";

const auth = async (req, res, next) => {
    try {
        const authHeader = req.header("Authorization");

        // console.log("authHeader :",authHeader)

        if (!authHeader) {
            return next(new HttpError("auth header is required", 401));
        }

        const token = authHeader.replace("Bearer ", "");

        // console.log("token",token)

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const user = await User.findOne({
            _id: decoded._id,
            "tokens.token": token,
        });

        if (!user) {
            return next(new HttpError("authentication failed", 401));
        }

        req.user = user;

        // console.log("user:", user)
        
        req.token = token;

        // console.log("token: ", token)

        next();
    } catch (error) {
        next(new HttpError("please authenticate", 401));
    }
};

export default auth;
