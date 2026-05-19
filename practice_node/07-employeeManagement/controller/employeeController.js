
import HttpError from "../middleware/httpError.js"
import employee from "../model/employeeModel.js"


const add = async (req, res, next) => {
    try {

        const { name, GRID, email, course, phoneNumber } = req.body

        const newEmployee = await new employee({
            name,
            GRID,
            email,
            course,
            phoneNumber,
        })

        await newEmployee.save()
        res.status(201).json({
            success: true,
            message: "employee data added successfully",
            newEmployee,
        })

    } catch (error) {

        next(new HttpError(error.message, 500))
    }
}

const getAllEmployeeData = async (req, res, next) => {

    try {
        const employees = await employee.find({})
        if (employees.length <= 0) {
            res.status(200).json({ success: true, message: "no employees data found" });
        }

        res.status(200).json({
            success: true,
            total: employees.length,
            message: "employees data fetched successfully",
            employees,
        });
    } catch (error) {
        next(new HttpError(error.message, 500));
    }
};

const employeeById = async(req, res, next)=>{
    try {
        
        const {id}= req.params;

        const employeeData= await employee.find(id)

        if(!employeeData){
            return next(new HttpError("employee not found with this id", 404))
        }

        res.status(200).json({success: true, message:"employee found", employeeData})

    } catch (error) {
        next(new HttpError(error.message, 500))
    }
}

const deleteById = async(req, res, next)=>{
    try {
        
        const {id}= req.params;

        const employeeData = await employee.findByIdAndDelete(id)

        if(!employeeData){
            return next(new HttpError("employee not found with this id", 404))
        }
        res.status(200).json({success: true, message:"employee data delete successfully"})

    } catch (error) {
        next (new HttpError (error.message, 500))
    }
}

export default { add, getAllEmployeeData, employeeById, deleteById };