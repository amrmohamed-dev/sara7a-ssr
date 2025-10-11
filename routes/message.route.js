import express from 'express';
import * as msgController from '../controllers/message.controller.js';
import * as authController from '../controllers/auth.controller.js';

const msgRouter = express.Router();

msgRouter.post('/', msgController.setReceiverId, msgController.createMsg);

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
