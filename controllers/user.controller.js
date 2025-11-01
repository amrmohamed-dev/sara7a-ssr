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

const deleteMe = catchAsync(async (req, res, next) => {
  const { _id } = req.user;
  await User.findByIdAndDelete(_id);
  res.status(204).send();
});

export { updateMe, deleteMe };
