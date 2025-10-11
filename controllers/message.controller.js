import Message from '../models/message.model.js';
import User from '../models/user.model.js';
import AppError from '../utils/error/appError.js';
import catchAsync from '../utils/error/catchAsync.js';

const setReceiverId = catchAsync(async (req, res, next) => {
  const { receiver } = req.body;
  const checkUser = await User.findById(receiver);
  if (!checkUser) {
    return next(new AppError('No user found with that ID', 404));
  }
  next();
});

const createMsg = catchAsync(async (req, res, next) => {
  const { text, receiver } = req.body;
  const msg = await Message.create({ text, receiver });
  res.status(201).json({
    status: 'success',
    data: {
      msg,
    },
  });
});

const getMyMsgs = catchAsync(async (req, res, next) => {
  const { _id: receiver } = req.user;
  const msgs = await Message.find({ receiver });
  res.status(200).json({
    status: 'success',
    msgs,
  });
});

const deleteMyMsg = catchAsync(async (req, res, next) => {
  const { _id: receiver } = req.user;
  const { id } = req.params;
  await Message.findOneAndDelete({ _id: id, receiver });
  res.status(204).send();
});

const deleteMyMsgs = catchAsync(async (req, res, next) => {
  const { _id: receiver } = req.user;
  await Message.deleteMany({ receiver });
  res.status(204).send();
});

export { getMyMsgs, setReceiverId, createMsg, deleteMyMsg, deleteMyMsgs };
