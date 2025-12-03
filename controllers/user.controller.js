import User from '../models/user.model.js';
import catchAsync from '../utils/error/catchAsync.js';

const updateMe = catchAsync(async (req, res, next) => {
  const { _id } = req.user;
  const { name } = req.body;
  const user = await User.findByIdAndUpdate(
    _id,
    { name },
    { new: true, runValidators: true },
  );
  res.status(200).json({
    status: 'success',
    data: {
      user,
    },
  });
});

const toggleFavourite = catchAsync(async (req, res, next) => {
  const { user } = req;
  const { id: msgId } = req.params;

  const alreadyFav = user.favouriteMsgs.some((id) => id.equals(msgId));
  let message;
  if (alreadyFav) {
    message = 'Message removed from favourites';
    user.favouriteMsgs = user.favouriteMsgs.filter(
      (id) => !id.equals(msgId),
    );
  } else {
    message = 'Message added to favourites';
    user.favouriteMsgs.unshift(msgId);
  }
  await user.save({ validateModifiedOnly: true });
  res.status(200).json({
    status: 'success',
    message,
  });
});

const deleteMe = catchAsync(async (req, res, next) => {
  const { _id } = req.user;
  await User.findByIdAndDelete(_id);
  res.status(204).send();
});

export { updateMe, toggleFavourite, deleteMe };
