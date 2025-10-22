import express from 'express';
import * as viewController from '../controllers/view.controller.js';
import * as authController from '../controllers/auth.controller.js';

const viewRouter = express.Router();

viewRouter.get(
  '/messages',
  authController.isAuthenticated,
  viewController.getMyMsgsPage,
);

viewRouter.use(authController.isLoggedIn);

viewRouter.get('/', viewController.getHome);
viewRouter.get('/login', viewController.getLoginForm);
viewRouter.get('/register', viewController.getRegisterForm);
viewRouter.get('/forgot-password', viewController.getForgotPasswordForm);

export default viewRouter;
