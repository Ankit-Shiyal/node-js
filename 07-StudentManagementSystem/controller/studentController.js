import HttpError from "../middleware/httpError.js";
import student from "../model/studentModel.js";

const add = async(req, res, next)=>{
   try {

      const {name, GRID, email, course, phoneNumber} = req.body

      const newStudent = new student({
         name,
         GRID,
         email,
         course,
         phoneNumber
      })

      await newStudent.save()

      res.status(201).json({
         success:true,
         message:"student data added successfully",
         newStudent
      })

   } catch(error){
      next(new HttpError(error.message,500))
   }
}

const getAllStudentData = async(req,res,next)=>{
   try {

      const students = await student.find({})

      res.status(200).json({
         success:true,
         total:students.length,
         students
      })

   } catch(error){
      next(new HttpError(error.message,500))
   }
}

export default {
   add,
   getAllStudentData
}