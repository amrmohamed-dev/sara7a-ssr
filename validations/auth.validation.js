import joi from 'joi';

const registerSchema = joi.object({
  username: joi.string().min(3).max(25).required(),
  name: joi.string().min(3).max(35).required(),
  email: joi.string().email().required(),
  password: joi
    .string()
    // .pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{6,30}$/)
    .pattern(/^[a-zA-Z0-9]{8,30}$/)
    .required(),
  passwordConfirm: joi.string().valid(joi.ref('password')).required(),
});

const loginSchema = joi.object({
  email: joi.string().email().required(),
  password: joi
    .string()
    // .pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{6,30}$/)
    .pattern(/^[a-zA-Z0-9]{8,30}$/)
    .required(),
});

const resetPasswordSchema = joi.object({
  email: joi.string().email().required(),
  otp: joi.string().required(),
  password: joi
    .string()
    // .pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{6,30}$/)
    .pattern(/^[a-zA-Z0-9]{8,30}$/)
    .required(),
  passwordConfirm: joi.string().valid(joi.ref('password')).required(),
});

const updatePasswordSchema = joi.object({
  currentPassword: joi
    .string()
    // .pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{6,30}$/)
    .pattern(/^[a-zA-Z0-9]{8,30}$/)
    .required(),
  password: joi
    .string()
    // .pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{6,30}$/)
    .pattern(/^[a-zA-Z0-9]{8,30}$/)
    .required(),
  passwordConfirm: joi.string().valid(joi.ref('password')).required(),
});

export {
  registerSchema,
  loginSchema,
  resetPasswordSchema,
  updatePasswordSchema,
};
