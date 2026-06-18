
import PackageModels from "../model/packageModel.js";

import HttpError from "../middlewares/HttpError.js";

import cloudinary from "../config/cloudinary.js";

const add = async (req, res, next) => {
    try {
        const {
            packageName,
            packagePrice,
            packageDestination,
            StartDate,
            EndDate,
            packageDescription,

        } = req.body;

        const packageImages = req.file.path;

        // console.log("package image", packageImages);

        const newPackage = new PackageModels({
            packageName,
            packagePrice,
            packageDestination,
            StartDate,
            EndDate,
            packageDescription,
            packageImages: req.file.path,
            cloudinary_id: req.file.filename,
        });

        await newPackage.save();

        res
            .status(201)
            .json({ success: true, message: "new package added", newPackage });
    } catch (error) {
        next(new HttpError(error.message, 500));
    }
};


const getAllPackage = async (req, res, next) => {

    try {

        const PackageData = await PackageModels.find({})

        if (!PackageData) {
            return next(new HttpError("package data not Available", 404))
        }

        res.status(200).json({ success: true, Total: PackageData.length, message: "package data", PackageData })

    } catch (error) {
        next(new HttpError(error.message, 500))


    }
}



const getById = async (req, res, next) => {

    try {

        const { id } = req.params

        const PackageData = await PackageModels.findById(id)

        if (!PackageData) {
            return next(new HttpError("package data not Available", 404))
        }

        res.status(200).json({ success: true, message: "package data", PackageData })

    } catch (error) {
        next(new HttpError(error.message, 500))


    }
}





export default { add, getAllPackage, getById };