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

viewRouter.get('/', redirectIfLoggedIn, viewController.getHome);
viewRouter.get('/login', redirectIfLoggedIn, viewController.getLoginForm);
viewRouter.get(
  '/register',
  redirectIfLoggedIn,
  viewController.getRegisterForm,
);
viewRouter.get(
  '/forgot-password',
  redirectIfLoggedIn,
  viewController.getForgotPasswordForm,
);

export default viewRouter;
