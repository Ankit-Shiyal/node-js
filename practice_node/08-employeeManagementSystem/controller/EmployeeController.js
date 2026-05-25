
import HttpError from "../middleware/HttpError.js";
import Employee from "../model/EmployeeModel.js";

const add = async (req, res, next) => {
    try {
        const { name, id, email, phoneNumber, department, salary } = req.body;

        const newEmployee = await new Employee({

            name,
            id,
            email,
            phoneNumber,
            department,
            salary

        })

        await newEmployee.save();

        res.status(201).json({ success: true, message: "employee data added success fully", newEmployee })

    } catch (error) {
        next(new HttpError(error.message, 500))
    }
}

const getAllEmployee = async (req, res, next) => {
    try {

        const Employees = await Employee.find({})

        if (Employees.length <= 0) {
            res.status(200).json({
                success: true, message: "employee data not found"
            })
        }

        res.status(200).json({
            success: true, message: "employee data",
            total:Employees.length, Employees
        })

    } catch (error) {
        next(new HttpError(error.message, 500))

    }
}

const employeeById= async(req, res, next)=>{

    try {
        const {id}= req.params;

        const EmployeeData = await Employee.findById(id)

        if(!EmployeeData){
            return next (new HttpError ("Employee not found with this id", 404))
        }

        res.status(200).json({success:true , message:"Employee data", EmployeeData})

    } catch (error) {
        next (new HttpError(error.message), 500)
    }
}

const deleteById = async(req,res, next)=>{

    try {
        
        const {id} = req.params;

        const EmployeeData = await Employee.findByIdAndDelete(id)

        if(!EmployeeData){
            return next(new HttpError ("Employee not found with this id", 404))
        }

        res.status(200).json({success:true, message:"Employee data deleted successfully"})

    } catch (error) {
        next (new HttpError(error.message), 500)
        
    }

}

const updateManually = async(req, res, next)=>{

    try {
        
        const {id} =req.params;

        const EmployeeData = await Employee.findById(id)

        if(!EmployeeData){
            return next(new HttpError ("Employee not found with this id", 404))
        }

        const updates = Object.keys(req.body);

        const allowedFiled =[
            "name",
            "email",
            "phoneNumber"
        ] 

        const idValidUpdate= updates.every((field)=>{
            return allowedFiled.includes(field);
        })

        if(!allowedFiled){
            return next(new HttpError("only allowed field can update", 404 ))
        }

        updates.forEach((update)=>{
            EmployeeData[update]=req.body[update]
        })

        await EmployeeData.save();

        res.status(200).json({ success:true, message:"Employee data update successfully" , EmployeeData})

    } catch (error) {
        next (new HttpError(error.message), 500)
        

    }

}

export default { add, getAllEmployee, employeeById ,deleteById ,updateManually}