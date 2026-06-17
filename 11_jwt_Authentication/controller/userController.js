import { model } from "mongoose"
import modelUser from "../model/userModel.js"
import HttpError from "../middleware/HttpError.js"
const add = async (req, res, next) => {

    try {

        const { name, Email, password } = req.body

        const newUser = new modelUser({

            name,
            Email,
            password
        })

        await newUser.save()

        res.status(201).json({ success: true, message: "new User added successfully", newUser })
    } catch (error) {
        // console.log(error);

        next(new HttpError(error.message, 500));

    }

}

const getAllUser = async (req, res, next) => {

    try {

        const Users = await modelUser.find();

        if (!Users) {
            return next(new HttpError("not user data found", 404))
        }

        res.status(200).json({ success: true, Total: Users.length, message: "User data found ", Users })

    } catch (error) {
        // console.log(error);

        next(new HttpError(error.message, 500));
    }
}

const login = async (req, res, next) => {

    try {


        const { Email, password } = req.body;

        const Users = await modelUser.findByCredentials(Email, password)

        const token = await Users.generateAuthToken();

        if (!Users) {
            return next(new HttpError("unable to login"))
        }

        res.status(200).json({ success: true, Users, token })

    } catch (error) {
        // console.log(error);

        next(new HttpError(error.message, 500));

    }
}

const AuthLogin = async function (req, res, next) {
    try {
        const user = req.user;
        // console.log("auth user", user)

        if (!user) {
            return next(new httpError("unable to login", 401));
        }

        res.status(200).json({ success: true, user });
    } catch (error) {
        // console.log(error);

        next(new HttpError(error.message, 500));

    }
};


const deleteUser = async (req, res, next) => {

    try {

        const user = req.user
        // console.log("user", user)


        await user.deleteOne()

        res.status(200).json({ success: true, message: "user delete successfully" });


    } catch (error) {
        // console.log(error);

        next(new HttpError(error.message, 500));


    }
}


const updateUser = async (req, res, next) => {

    try {

        const user = req.user
        // console.log("user", user)


        const updates = Object.keys(req.body)

        const allowedFiled = [
            "name",
            "password"
        ];

        const isValidUpdate = updates.every((field) => {
            return allowedFiled.includes(field);
        });

        if (!isValidUpdate) {
            return next(
                new HttpError("only allowed field can be updated", 400));
        }

        updates.forEach((update) => {
            user[update] =
                req.body[update];
        });

        await user.save();

        res.status(200).json({
            message:
                "user data updated successfully",
            user
        });



    } catch (error) {
        // console.log(error);
        next(new HttpError(error.message, 500));


    }
}



export default { add, getAllUser, login, AuthLogin, deleteUser, updateUser }



