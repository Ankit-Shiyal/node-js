import HttpError from "../middlewares/HttpError.js";
import cloudinary from "../config/cloudinary.js";

import PackageModel from "../model/package.js";


const addPackage = async (req, res, next) => {
    try {


        const { packageName, packagePrice, packageDestination, StartDate, EndDate, packageDescription } = req.body

       const packageImages = req.file?.path;


        const newPackage = new PackageModel({

            packageName,
            packagePrice,
            packageDestination,
            StartDate,
            EndDate,
            packageDescription,
            packageImages,

        })
         await newPackage.save();

        res.status(201).json({ success: true, message: "package Added Successfully", newPackage });

    } catch (error) {
        next(new HttpError(error.message, 500));
    }

    
const getPackage = async (req, res, next) => {

    try {

        const packageData = await PackageModel.find({})

        if (!packageData) {
            return next(new HttpError("package data not Available", 404))
        }

        res.status(200).json({ success: true, Total: EventData.length, message: "package data", packageData })

    } catch (error) {
        next(new HttpError(error.message, 500))


    }
}
}

export default { addPackage}