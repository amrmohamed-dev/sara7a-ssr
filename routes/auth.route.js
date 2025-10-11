import express from 'express';
import * as authController from '../controllers/auth.controller.js';
import validation from '../middlewares/validation.js';
import {
  loginSchema,
  registerSchema,
  resetPasswordSchema,
} from '../validations/auth.validation.js';

const authRouter = express.Router();

authRouter.post(
  '/register',
  validation(registerSchema),
  authController.register,
);
authRouter.post('/send-verification', authController.sendVerificationOtp);
authRouter.patch('/verify-email', authController.verifyEmail);
authRouter.post('/login', validation(loginSchema), authController.login);

authRouter.post('/forgot-password', authController.forgotPassword);
authRouter.post('/verify-otp', authController.verifyOtp);
authRouter.patch(
  '/reset-password',
  validation(resetPasswordSchema),
  authController.resetPassword,
);

authRouter.get('/logout', authController.logout);

export default authRouter;
