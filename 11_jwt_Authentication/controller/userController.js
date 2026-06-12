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

export default {add}



