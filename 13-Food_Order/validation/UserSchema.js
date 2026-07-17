
// // external module
import Joi from "joi";

// validation
const userSchema = Joi.object({
  Name: Joi.string().min(2).max(30).trim().required().messages({
    "string.base": "Name must be in String format",
    "string.min": "Name must be at least 2 character long",
    "string.max": "Name must be 30 character long",
    "any.required": "Name ir required",
  }),
  Email: Joi.string().email().required().messages({
    "string.base": "Email must be in String format",
    "any.required": "Email ir required",
  }),
  Password: Joi.string().min(6).max(20).required().messages({
    "string.base": "Password must be in string format",
    "string.min": "Password must be at least 6 character long",
    "string.max": "Password must be 20 character long",
    "any.required": "Password ir required",
  }),
  Role: Joi.string().valid("customer", "admin").default("customer"),
  Address:Joi.string().min(5).max(100).required().messages({
    "string.base": "Address must be in string format",
    "string.min": "Address must be at least 5 character long",
    "string.max": "Address must be 100 character long",
    "any.required": "Address ir required",
  }),
  Phone: Joi.string()
    .pattern(/^[6-9]\d{9}$/)
    .required()
    .messages({
      "string.base": "Phone must be in string format",
      "string.pattern.base": "Phone number must be a valid 10-digit Indian mobile number",
      "any.required": "Phone is required",
    }),
});

export default userSchema;
