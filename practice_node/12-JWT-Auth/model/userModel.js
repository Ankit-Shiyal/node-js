
import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import JWT from "jsonwebtoken";


const userSchema = new mongoose.Schema({

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
    },
    tokens:[{
        token:{
               type:String,
               required:true
        }
     
    }]
   
},
    {
        timestamps: true
    })

userSchema.pre("save", async function () {
    const user = this;

    if (user.isModified("password")) {
        user.password = await bcrypt.hash(user.password, 10);
    }
});

userSchema.statics.findByCredentials = async function (Email, password) {
    try {
        const user = await this.findOne({ Email })
        console.log(user)
        if (!user) {
            throw new Error("unable to login");
        }

        const isMatch = await bcrypt.compare(password, user.password)

        if (!isMatch) {
            throw new Error("unable to login");
        }
        return user;
    } catch (error) {
        throw new Error(error.message);
    }
}

userSchema.methods.generateAuthToken = async function () {
    try {
        const user = this;
    
        const token = JWT.sign(
            { _id: user._id.toString() },
            process.env.JWT_SECRET,
            { expiresIn: "7d" },
        );

        if (!token) {
            throw new Error("failed to generate token");
        }

        user.tokens = user.tokens.concat({ token });

        await user.save();

        return token;
    } catch (error) {
        throw new Error(error.message);
    }
}

const modelUser = mongoose.model("user", userSchema)

export default modelUser;