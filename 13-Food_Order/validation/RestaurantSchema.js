// external module
import Joi from "joi";

export const restaurantSchema = Joi.object({
  RestaurantName: Joi.string().min(2).max(50).trim().required().messages({
    "string.base": "Restaurant Name must be in string format",
    "string.min": "Restaurant Name must be at least 2 characters long",
    "string.max": "Restaurant Name must not exceed 50 characters",
    "any.required": "Restaurant Name is required",
  }),

  Address: Joi.string().min(5).max(200).trim().required().messages({
    "string.base": "Address must be in string format",
    "string.min": "Address must be at least 5 characters long",
    "string.max": "Address must not exceed 200 characters",
    "any.required": "Address is required",
  }),

  Phone: Joi.string()
    .pattern(/^[6-9]\d{9}$/)
    .required()
    .messages({
      "string.base": "Phone must be in string format",
      "string.pattern.base":
        "Phone number must be a valid 10-digit Indian mobile number",
      "any.required": "Phone is required",
    }),

  description: Joi.string().min(10).max(1000).trim().required().messages({
    "string.base": "Description must be in string format",
    "string.min": "Description must be at least 10 characters long",
    "string.max": "Description must not exceed 1000 characters",
    "any.required": "Description is required",
  }),

  state: Joi.string().trim().required().messages({
    "string.base": "State must be in string format",
    "any.required": "State is required",
  }),

  city: Joi.string().trim().required().messages({
    "string.base": "City must be in string format",
    "any.required": "City is required",
  }),

  openTime: Joi.string().required().messages({
    "string.base": "Open Time must be in string format",
    "any.required": "Open Time is required",
  }),

  closeTime: Joi.string().required().messages({
    "string.base": "Close Time must be in string format",
    "any.required": "Close Time is required",
  }),

  
});