import express from 'express';
import * as authController from '../controllers/auth.controller.js';
import * as userController from '../controllers/user.controller.js';
import validation from '../middlewares/validation.js';
import { updatePasswordSchema } from '../validations/auth.validation.js';

const userRouter = express.Router();

userRouter.use(authController.isAuthenticated);

userRouter.patch(
  '/me/update-password',
  validation(updatePasswordSchema),
  authController.updateMyPassword,
);

userRouter
  .route('/me')
  .patch(userController.updateMe)
  .delete(userController.deleteMe);

export default userRouter;
