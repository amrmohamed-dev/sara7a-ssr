import express from 'express';
import * as authController from '../controllers/auth.controller.js';
import validation from '../middlewares/validation.js';
import {
  loginSchema,
  registerSchema,
  resetPasswordSchema,
} from '../validations/auth.validation.js';
import * as rateLimiter from '../middlewares/limiter.js';
import checkOtpPurpose from '../middlewares/checkOtpPurpose.js';

const authRouter = express.Router();

authRouter.post(
  '/register',
  validation(registerSchema),
  rateLimiter.registerLimiter,
  authController.register,
);
authRouter.post(
  '/send-otp/:purpose',
  rateLimiter.otpLimiter,
  checkOtpPurpose,
  authController.sendOtp,
);
authRouter.patch(
  '/verify-email',
  rateLimiter.verifyLimiter,
  authController.isAuthenticated,
  authController.verifyEmail,
);
authRouter.post(
  '/login',
  validation(loginSchema),
  rateLimiter.loginLimiter,
  authController.login,
);
authRouter.post(
  '/verify-otp/:purpose',
  rateLimiter.verifyLimiter,
  authController.verifyOtp,
);
authRouter.patch(
  '/reset-password',
  validation(resetPasswordSchema),
  rateLimiter.resetLimiter,
  authController.resetPassword,
);

authRouter.get('/logout', authController.logout);

export default authRouter;
