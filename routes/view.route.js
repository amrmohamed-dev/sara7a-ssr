import express from 'express';
import * as viewController from '../controllers/view.controller.js';
import * as authController from '../controllers/auth.controller.js';
import redirectIfLoggedIn from '../middlewares/redirectIfLoggedIn.js';

const viewRouter = express.Router();

viewRouter.get(
  '/messages',
  authController.isAuthenticated,
  viewController.getMyMsgsPage,
);
viewRouter.get(
  '/settings',
  authController.isAuthenticated,
  viewController.getMySettingsPage,
);

viewRouter.use(authController.isLoggedIn);

viewRouter.get('/u/:username', viewController.getPublicUserPage);

viewRouter.use(redirectIfLoggedIn);

viewRouter.get('/', viewController.getHome);
viewRouter.get('/login', viewController.getLoginForm);
viewRouter.get('/register', viewController.getRegisterForm);
viewRouter.get('/forgot-password', viewController.getForgotPasswordForm);

export default viewRouter;
