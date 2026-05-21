import HttpError from "../middleware/httpError.js";
import Employee from "../model/employeeModel.js";

const add = async (req, res, next) => {
    try {

        const { name, EmployeeId, email, field, phoneNumber, salary } = req.body

        const newEmployee = new Employee({
            name,
            EmployeeId,
            email,
            field,
            phoneNumber,
            salary
        })

        await newEmployee.save()

        res.status(201).json({
            success: true,
            message: "Employee data added successfully",
            newEmployee
        })

    } catch (error) {
        next(new HttpError(error.message, 500))
    }
}

const getAllEmployeeData = async (req, res, next) => {
    try {

        const Employees = await Employee.find({})

        res.status(200).json({
            success: true,
            total: Employees.length,
            Employees
        })

    } catch (error) {
        next(new HttpError(error.message, 500))
    }
}

const employeeById = async (req, res, next) => {

    try {
        const { id } = req.params;

        const employeeData = await Employee.findById(id);

        if (!employeeData) {
            return next(new HttpError("employee not found with this is", 404))
        }

        res.status(200).json({ message: "employee found", employeeData })
    } catch (error) {
        next(new HttpError(error.message, 500))
    }
}

const deleteById = async (req, res, next) => {

    try {

        const { id } = req.params;

        const employeeData = await Employee.findByIdAndDelete(id)

        if (!employeeData) {
            return next(new HttpError("employee not found with this is", 404))

        }

        res.status(200).json({ success: true, message: "employee data delete successfully" })

    } catch (error) {
        next(new HttpError(error.message, 500))

    }

}


const updateById = async (req, res, next) => {

    try {

        const { id } = req.params;

        const employeeData = await Employee.findByIdAndUpdate(id)

        if (!employeeData) {
            return next(new HttpError("employee not found with this is", 404))

        }

        res.status(200).json({ success: true, message: "employee data update successfully", employeeData })

    } catch (error) {
        next(new HttpError(error.message, 500))

    }

}

const updateManually = async (req, res, next) => {

    try {


        const { id } = req.params;

        const employeeData = await Employee.findById(id)

        if (!employeeData) {
            return next(new HttpError("employee not found with this id", 404))
        }

        const updates = Object.keys(req.body)

        const allowedFiled = [
            "name",
            "email",
            "phoneNumber"
        ]

        const isValidUpdate = updates.every((field) => {
            return allowedFiled.includes(field);
        });

        if (!isValidUpdate) {
            return next(
                new HttpError("only allowed field can be updated", 400));
        }

        updates.forEach((update) => {
         employeeData[update] =
            req.body[update];
      });

      await employeeData.save();

      res.status(200).json({
         message:
            "Employee data updated successfully",
         employeeData
      });

    } catch (error) {
        next(new HttpError(error.message, 500))
    }

}

export default { add, getAllEmployeeData, employeeById, deleteById, updateById, updateManually }