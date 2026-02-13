import Message from '../models/message.model.js';
import User from '../models/user.model.js';
import AppError from '../utils/error/appError.js';
import catchAsync from '../utils/error/catchAsync.js';
import {
  deleteOneImage,
  deleteUserImages,
} from '../services/cloudinary.service.js';

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
  if (!checkReceiver.allowMessages) {
    return next(
      new AppError(`${checkReceiver.name} is not receiving messages`, 403),
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
  const msgs = await Message.find({ receiver }).populate(
    'sender',
    'name username photo',
  );
  res.status(200).json({
    status: 'success',
    data: {
      msgs,
    },
  });
});

const toggleFavourite = catchAsync(async (req, res, next) => {
  const { user } = req;
  const { id: msgId } = req.params;

  const msg = await Message.findOne({
    _id: msgId,
    receiver: user._id,
  });

  if (!msg) {
    return next(new AppError('Message not found or access denied', 404));
  }

  const favIndex = user.favouriteMsgs.findIndex((fav) =>
    fav.msg.equals(msgId),
  );
  let action;
  if (favIndex !== -1) {
    action = 'removed from';
    user.favouriteMsgs.splice(favIndex, 1);
  } else {
    action = 'added to';
    user.favouriteMsgs.push({ msg: msgId });
  }
  await user.save({ validateModifiedOnly: true });
  res.status(200).json({
    status: 'success',
    message: `Message ${action} favourites`,
  });
});

const getMyFavouriteMsgs = async (req, res, next) => {
  const user = await User.findById(req.user.id).populate({
    path: 'favouriteMsgs.msg',
    populate: {
      path: 'sender',
      select: 'username photo',
    },
  });

  res.status(200).json({
    status: 'success',
    data: {
      msgs: user.favouriteMsgs,
    },
  });
};

const deleteMyMsg = catchAsync(async (req, res, next) => {
  const { _id: receiver } = req.user;
  const { id } = req.params;
  const msg = await Message.findOneAndDelete({ _id: id, receiver });
  if (msg.imagePublicId) await deleteOneImage(msg.imagePublicId);
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

export {
  getMyMsgs,
  createMsg,
  toggleFavourite,
  getMyFavouriteMsgs,
  deleteMyMsg,
  deleteMyMsgs,
};
