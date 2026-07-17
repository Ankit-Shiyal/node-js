// external module
import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";


// mongoose schema
const userScheme = await mongoose.Schema(
  {
    Name: {
      type: String,
      required: true,
      trim: true,
    },
    Email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    Password: {
      type: String,
      required: true,
      validate: (value) => {
        if (value.toLowerCase() === "password") {
          throw new Error("password can not set as a password");
        }
      },
    },
    Role: {
      type: String,
      enum: ["customer", "admin"],
      default: "customer",
    },
    Address: {
      type: String,
      required: true,
    },
    Phone: {
      type: Number,
      required: true,
    },
    Profile_Pic:{
      type:String
    },
    Cloudinary_Id:{
      type:String
    }
    ,
    isVerified: {
      type: Boolean,
      default: false,
    },
    tokens: [
      {
        token: {
          type: String,
          required: true,
        },
      },
    ],
  },
  {
    timestamps: true,
  },
);

// hash Password
userScheme.pre("save", async function () {
  const user = this;
  if (user.isModified("Password")) {
    user.Password = await bcrypt.hash(user.Password, 10);
  }
});

// find user for login

userScheme.statics.findByCredential = async function (Email, Password) {
  try {
    const users = await this.findOne({ Email });

    if (!users) {
      throw new Error("unable to login");
    }

    const isMatched = await bcrypt.compare(Password, users.Password);

    if (!isMatched) {
      throw new Error("unable to login");
    }

    return users;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Generate Auth Token

userScheme.methods.generateAuthToken = async function () {
  try {
    const user = this;

    const token = jwt.sign(
      { _id: user._id.toString() },
      process.env.JWT_SECRET,
      { expiresIn: "7d" },
    );

    if (!token) {
      throw new Error("failed to generate auth token");
    }

    user.tokens = user.tokens.concat({ token });

    await user.save();

    return token;
  } catch (error) {
    throw new Error(error.message);
  }
};


userScheme.methods.toJSON = function () {


  const user = this;

//   console.log("user", user)

  const userObject = user.toObject();


//   console.log("userObject", userObject)

  delete userObject.Password;

  delete userObject.tokens;

  delete userObject.__v

  delete userObject.createdAt

  delete userObject.updatedAt

  return userObject

}

const modelUser = mongoose.model("user", userScheme);

export default modelUser;
