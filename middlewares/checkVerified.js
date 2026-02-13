import AppError from '../utils/error/appError.js';

const checkVerified = (req, res, next) => {
  if (!req.user.isVerified) {
    return next(
      new AppError('You need to verify your account first', 403),
    );
  }
  next();
};

export default checkVerified;
