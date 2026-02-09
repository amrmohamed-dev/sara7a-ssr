import Message from '../models/message.model.js';
import User from '../models/user.model.js';
import AppError from '../utils/error/appError.js';
import catchAsync from '../utils/error/catchAsync.js';
import {
  deleteOneImage,
  deleteUserImages,
} from '../utils/cloudinary.service.js';

const updateMe = catchAsync(async (req, res, next) => {
  const { _id } = req.user;
  const { name, allowMessages, showLastSeen } = req.body;
  const updates = { name };
  if (typeof allowMessages === 'boolean')
    updates.allowMessages = allowMessages;
  if (typeof showLastSeen === 'boolean')
    updates.showLastSeen = showLastSeen;
  const user = await User.findByIdAndUpdate(_id, updates, {
    new: true,
    runValidators: true,
  });
  res.status(200).json({
    status: 'success',
    data: {
      user,
    },
  });
});

const updateProfilePhoto = catchAsync(async (req, res, next) => {
  const { imageUrl, imagePublicId } = req.body;
  const { _id } = req.user;
  const user = await User.findByIdAndUpdate(
    _id,
    { photo: imageUrl, photoPublicId: imagePublicId },
    { new: true, runValidators: true },
  );
  res.status(200).json({
    status: 'success',
    message: 'Your photo uploaded successfully',
    data: {
      user,
    },
  });
});

const deleteProfilePhoto = catchAsync(async (req, res, next) => {
  const { _id, photoPublicId } = req.user;

  if (!photoPublicId)
    return next(new AppError('No profile photo to delete', 400));

  await deleteOneImage(photoPublicId);
  const user = await User.findByIdAndUpdate(
    _id,
    { photo: '/img/users/static/avatar.png' },
    { new: true, runValidators: true },
  );
  res.status(200).json({
    status: 'success',
    message: 'Your photo deleted successfully',
    data: {
      user,
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

const deleteMe = catchAsync(async (req, res, next) => {
  const { _id, photoPublicId } = req.user;
  const msgs = await Message.find({ receiver: _id });
  await deleteUserImages(
    photoPublicId,
    msgs.map((msg) => msg.imagePublicId).filter(Boolean),
  );
  await User.findByIdAndDelete(_id);
  res.status(204).send();
});

export {
  updateMe,
  updateProfilePhoto,
  deleteProfilePhoto,
  toggleFavourite,
  deleteMe,
};
