import { model } from "mongoose"
import modelUser from "../model/userModel.js"
import HttpError from "../middleware/HttpError.js"
const add = async (req, res, next)=>{

    try {
        
        const {name, Email , password}= req.body

        const newUser = new modelUser({
            
            name,
            Email,
            password
        })

        await newUser.save()

        res.status(201).json({success:true , message:"new User added successfully", newUser})
    } catch (error) {
         next(new HttpError(error.message, 500));
        
    }

}

const getAllUser = async (req, res, next)=>{

    try {
        
        const Users = await modelUser.find();

        if(!Users){
            return next(new HttpError ("not user data found", 404))
        }

        res.status(200).json({success : true, Total:Users.length ,message:"User data found ", Users})

    } catch (error) {
         next(new HttpError(error.message, 500));
    }
}

const login = async (req, res, next)=>{

    try {
        

        const {Email, password}= req.body;

        const Users = await modelUser.findByCredentials(Email , password)

         const token = await Users.generateAuthToken();

        if(!Users){
            return next (new HttpError ("unable to login"))
        }

        res.status(200).json({success:true, Users, token})

    } catch (error) {
         next(new HttpError(error.message, 500));
        
    }
}

const AuthLogin = async function (req, res, next) {
  try {
    const user = req.user;

    if (!user) {
      return next(new httpError("unable to login", 401));
    }

    res.status(200).json({ success: true, user });
  } catch (error) {
    next(new httpError(error.message));
  }
};



export default {add , getAllUser, login}



