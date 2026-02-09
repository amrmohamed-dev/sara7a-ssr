import express from 'express';
import * as msgController from '../controllers/message.controller.js';
import * as authController from '../controllers/auth.controller.js';
import { uploadImage } from '../services/cloudinary.service.js';
import fileUpload from '../middlewares/fileUpload.js';

const msgRouter = express.Router();

msgRouter.post(
  '/',
  fileUpload('msgImage'),
  uploadImage('msgs'),
  msgController.createMsg,
);

msgRouter.use(
  authController.isAuthenticated,
  authController.restrictTo('user'),
);

msgRouter
  .route('/')
  .get(msgController.getMyMsgs)
  .delete(msgController.deleteMyMsgs);

msgRouter.route('/:id').delete(msgController.deleteMyMsg);

export default msgRouter;
