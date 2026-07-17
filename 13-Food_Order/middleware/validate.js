
//external module
import HttpError from "./HttpError.js";

const validate = (schema) => (req, res, next) => {
    try {
        const { error, value } = schema.validate(req.body, {
            abortEarly: true,
            allowUnknown: false,
        });

        if (error) {
            return next(new HttpError(error.details[0].message));
        }

        next();

        return value;
    } catch (error) {
        throw new Error(error.message)
    }
};

export default validate;