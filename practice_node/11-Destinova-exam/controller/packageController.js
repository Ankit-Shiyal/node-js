import PackageModels from "../model/packageModel.js";
import HttpError from "../middlewares/HttpError.js";
import cloudinary from "../config/cloudinary.js";

const add = async (req, res, next) => {
    try {
        const {
            packageName,
            packagePrice,
            StartDate,
            EndDate,
            Description,
        } = req.body;

        const packageImages = req.file.path;

        const newPackage = new PackageModels({
            packageName,
            packagePrice,
            StartDate,
            EndDate,
            Description,
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

const getAll = async (req, res, next) => {
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

const deletePackage = async (req, res, next) => {
    try {
        const { id } = req.params;
        const deletedPackages = await PackageModels.findById(id);

        if (!deletedPackages) {
            return next(new HttpError("Event not found", 404));
        }

        await cloudinary.uploader.destroy(deletedPackages.cloudinary_id);

        await deletedPackages.deleteOne();

        res.status(200).json({ success: true, message: "package deleted successfully" });

    } catch (error) {
        next(new HttpError(error.message, 500));
    }
};

const updatePackage = async (req, res, next) => {
    try {
        const { id } = req.params
        const PackageUpdate = await PackageModels.findById(id)

        if (!PackageUpdate) {
            return next(new HttpError("package data not found with this id"))
        }

        const updates = Object.keys(req.body);

        const allowedUpdates = ["packageName", "packagePrice",  "StartDate", "EndDate", "Description"];

        const isValidUpdates = updates.every((field) =>
            allowedUpdates.includes(field),
        );

        if (!isValidUpdates) {
            return next(new HttpError("only allowed field can be updated", 400));
        }

        updates.forEach((update) => {
            PackageUpdate[update] = req.body[update];
        });

        if (req.file) {
            await cloudinary.uploader.destroy(PackageUpdate.cloudinary_id);

            PackageUpdate.packageImages = req.file.path;
            PackageUpdate.cloudinary_id = req.file.filename;
        }

        await PackageUpdate.save();

        res.status(200).json({
            success: true,
            message: "Package updated successfully",
            data: PackageUpdate,
        });

    } catch (error) {
        next(new HttpError(error.message, 500));
    }
}

export default { add, getAll, getById, deletePackage, updatePackage };