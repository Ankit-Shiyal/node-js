// local module
import modelUser from "../model/UserModel.js";
import HttpError from "../middleware/HttpError.js";
import cloudinary from "../config/cloudinary.js";

// add user
const add = async (req, res, next) => {
  try {
    const { Name, Email, Password, Role, Address, Phone } = req.body;

    const newUser = await modelUser({
      Name,
      Email,
      Password,
      Role,
      Address,
      Phone,
      Profile_Pic:req.file?.path,
      Cloudinary_Id:req.file.filename,
    });

    await newUser.save();
 
    res.status(201).json({ success: true, message: "new User added", newUser });
  } catch (error) {
    next(new HttpError(error.message, 500));
  }
};



// login user
const login = async (req, res, next) => {
  try {
    const { Email, Password } = req.body;

    const user = await modelUser.findByCredential(Email, Password);

    if (!user) {
      return next(new HttpError("unable to login"));
    }

    const token = await user.generateAuthToken();

    res.status(200).json({
      success: true,
      message: "user logged in successfully",
      user,
      token,
    });
  } catch (error) {
    next(new HttpError(error.message, 500));
  }
};

// auth login
const authLogin = async (req, res, next) => {
  const user = req.user;

  console.log(user);

  res
    .status(200)
    .json({ success: true, message: "auth login successfully", user });
};

// delete user

const deleteUser = async (req, res, next) => {
  try {
    const user = req.user;

    await user.deleteOne();

    res
      .status(200)
      .json({ success: true, message: "user data delete successfully" });
  } catch (error) {
    next(new HttpError(error.message));
  }
};

// update user
const updateUser = async (req, res, next) => {
  try {
    const user = req.user;

    const updates = Object.keys(req.body);

    const allowedFiled = ["Name", "Password", "Address", "Phone"];

    const isValidUpdate = updates.every((filed) => {
      return allowedFiled.includes(filed);
    });

    if (!isValidUpdate) {
      return next(new HttpError("only allowed filed can update", 404));
    }

    updates.forEach((update) => {
      user[update] = req.body[update];
    });

    await user.save();

    res.status(200).json({
      message: "user data updated successfully",
      user,
    });
  } catch (error) {
    next(new HttpError(error.message));
  }
};

// update logout
const logout = async (req, res, next) => {
  try {
    const user = req.user;

    user.tokens = user.tokens.filter((t) => t.token != req.token);
    await user.save();

    res
      .status(200)
      .json({ success: true, message: "user logout successfully" });
  } catch (error) {
    next(new HttpError(error.message));
  }
};

// logout from all dives
const logoutAll = async (req, res, next) => {
  try {
    req.user.tokens = [];

    await req.user.save();

    res.status(200).json({
      success: true,
      message: "user logout from all device successfully",
    });
  } catch (error) {
    next(new HttpError(error.message));
  }
};

// get all user
const getAllUser = async (req, res, next) => {
  try {
    const user = await modelUser.find({});

    if (user.length === 0) {
      return next(new HttpError("User data not found", 404));
    }

    res.status(200).json({
      success: true,
      message: "All user data",
      Total: user.length,
      user,
    });
  } catch (error) {
    next(new HttpError(error.message, 500));
  }
};

export default {
  add,
  getAllUser,
  login,
  authLogin,
  deleteUser,
  updateUser,
  logout,
  logoutAll,
};
