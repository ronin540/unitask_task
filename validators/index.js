const joi = require("joi");

module.exports = {
  signupSchema: joi.object({
    email: joi.string().email().lowercase().required(),
    password: joi.string().required().min(6),
    firstName: joi.string(),
    lastName: joi.string(),
    mobile: joi.number().integer().min(10),
  }),
  signInSchema: joi.object({
    email: joi.string().email().lowercase().required(),
    password: joi.string().required().min(6),
  }),
};
