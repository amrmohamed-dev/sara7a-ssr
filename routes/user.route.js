import express from 'express';
import * as authController from '../controllers/auth.controller.js';
import * as userController from '../controllers/user.controller.js';
import validation from '../middlewares/validation.js';
import { updatePasswordSchema } from '../validations/auth.validation.js';
import checkVerified from '../middlewares/checkVerified.js';

const userRouter = express.Router();

userRouter.use(authController.isAuthenticated);

userRouter.patch(
  '/messages/favourite/:id',
  userController.toggleFavourite,
);

userRouter.patch(
  '/me/update-password',
  checkVerified,
  validation(updatePasswordSchema),
  authController.updateMyPassword,
);

userRouter
  .route('/me')
  .patch(checkVerified, userController.updateMe)
  .delete(userController.deleteMe);

export default userRouter;
