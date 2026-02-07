import Message from '../models/message.model.js';
import User from '../models/user.model.js';
import AppError from '../utils/error/appError.js';
import catchAsync from '../utils/error/catchAsync.js';
import {
  deleteOneImage,
  deleteUserImages,
} from '../utils/cloudinary.service.js';

const createMsg = catchAsync(async (req, res, next) => {
  const { receiver, sender } = req.body;
  const checkReceiver =
    await User.findById(receiver).populate('msgsCount');
  if (!checkReceiver) {
    return next(new AppError('No user found with that ID', 404));
  }
  if (sender) {
    const checkSender = await User.findById(sender);
    if (!checkSender) {
      return next(new AppError('No user found with that ID', 404));
    }
  }
  const { imageUrl, imagePublicId, text } = req.body;
  if (!checkReceiver.isVerified && checkReceiver.msgsCount >= 5) {
    return next(
      new AppError(
        `${checkReceiver.name} cannot receive more messages`,
        403,
      ),
    );
  }
  const msg = await Message.create({
    image: imageUrl,
    imagePublicId,
    text,
    receiver,
    sender,
  });
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
  const msg = await Message.findOne({ _id: id, receiver });
  if (msg.imagePublicId) await deleteOneImage(msg.imagePublicId);
  await msg.deleteOne();
  res.status(204).send();
});

const deleteMyMsgs = catchAsync(async (req, res, next) => {
  const { _id: receiver } = req.user;
  const msgs = await Message.find({ receiver });
  await deleteUserImages(
    null,
    msgs.map((msg) => msg.imagePublicId).filter(Boolean),
  );
  await Message.deleteMany({ receiver });
  res.status(204).send();
});

export { getMyMsgs, createMsg, deleteMyMsg, deleteMyMsgs };
