import HttpError from "../middlewares/HttpError.js";
// import cloudinary from "../config/cloudinary.js";

import PackageModel from "../model/package.js";



const addPackage = async (req, res, next) => {
    try {

        console.log("Controller Hit");
        console.log(req.file);

        const { packageName, packagePrice, packageDestination, StartDate, EndDate, packageDescription } = req.body;

        const newPackage = new PackageModel({
            packageName,
            packagePrice,
            packageDestination,
            StartDate,
            EndDate,
            packageDescription,
            packageImages: req.file.path,
        });

        await newPackage.save();

        res.status(201).json({
            success: true,
            message: "package Added Successfully",
            newPackage
        });

    } catch (error) {

        console.log("ERROR =>", error); 

        next(new HttpError(error.message, 500));
    }
}

export default { addPackage}

