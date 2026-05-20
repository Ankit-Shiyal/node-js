import HttpError from "../middleware/httpError.js";
import student from "../model/studentModel.js";

const add = async (req, res, next) => {
   try {

      const { name, GRID, email, course, phoneNumber } = req.body

      const newStudent = new student({
         name,
         GRID,
         email,
         course,
         phoneNumber
      })

      await newStudent.save()

      res.status(201).json({
         success: true,
         message: "student data added successfully",
         newStudent
      })

   } catch (error) {
      next(new HttpError(error.message, 500))
   }
}

const getAllStudentData = async (req, res, next) => {
   try {

      const students = await student.find({})

      res.status(200).json({
         success: true,
         total: students.length,
         students
      })

   } catch (error) {
      next(new HttpError(error.message, 500))
   }
}

const studentById = async (req, res, next) => {
   try {
      const { id } = req.params;

      const studentData = await student.findById(id)
      if (!studentData) {
         return next(new HttpError("student not found with this id", 404));
      }

      res.status(200).json({ message: "student found", studentData });
   } catch (error) {
      next(new HttpError("invalid student id", 400));
   }
};

const deleteById = async (req, res, next) => {

   try {
      const { id } = req.params;

      const studentData = await student.findByIdAndDelete(id)

      if (!studentData) {
         return next(new HttpError("student not found with this id", 404));

      }
      res.status(200).json({ message: "student data delete successfully" });

   }
   catch (error) {
      next(new HttpError("invalid student id", 400));
   }

}

const updateById = async (req, res, next) => {

   try {
      const { id } = req.params;

      const studentData = await student.findByIdAndUpdate(id, req.body, { new: true })

      if (!studentData) {
         return next(new HttpError("student not found with this id", 404));

      }
      res.status(200).json({ message: "student data update successfully", studentData });

   }
   catch (error) {
      next(new HttpError("invalid student id", 400));
   }

}

// update manually 

const updateManually = async (req, res, next) => {
   try {

      const { id } = req.params;

      const studentData = await student.findById(id);

      if (!studentData) {
         return next(new HttpError("student not found",404));
      }

      const updates = Object.keys(req.body);

      const allowedFiled = [
         "name",
         "email",
         "phoneNumber"
      ];

      const isValidUpdate = updates.every((field) => {
         return allowedFiled.includes(field);
      });

      if (!isValidUpdate) {
         return next(
            new HttpError("only allowed field can be updated",400));
      }

      updates.forEach((update) => {
         studentData[update] =
            req.body[update];
      });

      await studentData.save();

      res.status(200).json({
         message:
            "student data updated successfully",
         studentData
      });

   } catch (error) {
      next( new HttpError(error.message,400));
   }
}

const deleteAllStudent = async (req, res, next) => {
   try {

      const deletedStudents = await student.deleteMany({});

      res.status(200).json({
         success: true,
         message: "all student data deleted successfully",
      });

   } catch (error) {
      next(
         new HttpError(
            error.message,
            500
         )
      );
   }
};


export default {
   add,
   getAllStudentData,
   studentById,
   deleteById,
   updateById,
   updateManually,
   deleteAllStudent
}