import { promisify } from 'util';
import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';
import catchAsync from '../utils/error/catchAsync.js';
import AppError from '../utils/error/appError.js';
import * as authService from '../services/auth.service.js';

const register = catchAsync(async (req, res, next) => {
  const { name, username, email, password } = req.body;
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return next(
      new AppError(
        'An account with this email already exists. Please login instead.',
        409,
      ),
    );
  }
  const user = await User.create({
    username,
    name,
    email,
    password,
  });
  authService.createSendToken(
    user,
    201,
    res,
    'Your account created successfully!',
  );
});

const sendVerificationOtp = catchAsync(async (req, res, next) => {
  const { email } = req.body;
  const user = await User.findOne({ email, isVerified: false });

  if (!user) {
    return next(
      new AppError(
        'This email is either already verified or does not exist.',
        400,
      ),
    );
  }

  await authService.sendOtpEmail(
    user,
    'Email Confirmation',
    res,
    'If a verification code was sent, please check your email.',
  );
});

const verifyEmail = catchAsync(async (req, res, next) => {
  const { email, otp } = req.body;
  const user = await authService.verifyOtp(
    email,
    otp,
    'Email Confirmation',
  );

  user.isVerified = true;
  user.otp = {};
  await user.save({ validateModifiedOnly: true });

  authService.createSendToken(
    user,
    200,
    res,
    'Email confirmed successfully!',
  );
});

const login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email }).select('+password');
  if (!user || !(await user.correctPassword(password))) {
    return next(new AppError('Incorrect email or password.', 400));
  }
  authService.createSendToken(user, 200, res, 'Logged in successfully!');
});

const forgotPassword = catchAsync(async (req, res, next) => {
  const { email } = req.body;
  const user = await User.findOne({ email, isVerified: true });
  if (!user) {
    return next(
      new AppError(
        'This email is not eligible for password recovery.',
        400,
      ),
    );
  }
  await authService.sendOtpEmail(user, 'Password Recovery', null);

  res.status(200).json({
    status: 'success',
    message: 'If an OTP was sent, please check your email.',
  });
});

const verifyOtp = catchAsync(async (req, res, next) => {
  const { email, otp, purpose } = req.body;
  await authService.verifyOtp(email, otp, purpose);
  res.status(200).json({
    status: 'success',
    message: 'OTP verified successfully',
  });
});

const resetPassword = catchAsync(async (req, res, next) => {
  const { email, otp } = req.body;
  const user = await authService.verifyOtp(
    email,
    otp,
    'Password Recovery',
  );
  user.otp = {};
  const { password } = req.body;
  user.password = password;
  await user.save();
  authService.createSendToken(
    user,
    200,
    res,
    'Password updated successfully',
  );
});

const updateMyPassword = catchAsync(async (req, res, next) => {
  const { _id } = req.user;
  const { currentPassword, password } = req.body;
  const user = await User.findById(_id).select('+password');
  if (!(await user.correctPassword(currentPassword))) {
    return next(new AppError('Your current password is wrong!', 400));
  }
  user.password = password;
  await user.save({ validateModifiedOnly: true });

  const token = authService.createSendToken(user, res);
  res.status(200).json({
    status: 'success',
    message: 'Password updated successfully',
    token,
    data: {
      user,
    },
  });
});

const isAuthenticated = catchAsync(async (req, res, next) => {
  const token = req.cookies?.jwt;
  if (!token) {
    return next(
      new AppError('Authentication required. Please log in.', 401),
    );
  }
  const decoded = await promisify(jwt.verify)(
    token,
    process.env.JWT_SECRET,
  );
  const user = await User.findById(decoded.userId);
  if (!user || user.changedPasswordAfter(decoded.iat)) {
    return next(
      new AppError('Authentication failed. Please log in again.', 401),
    );
  }
  req.user = user;
  res.locals.user = user || null;
  next();
});

// Protect Route in render pages only
const isLoggedIn = async (req, res, next) => {
  const token = req.cookies?.jwt;
  try {
    if (token) {
      const decoded = await promisify(jwt.verify)(
        token,
        process.env.JWT_SECRET,
      );

      const user = await User.findById(decoded.userId);
      if (!user) {
        throw Error();
      }

      if (user.changedPasswordAfter(decoded.iat)) {
        throw Error();
      }

      // There is a logged in user
      res.locals.user = user;
    }
  } catch (err) {
    res.locals.user ||= null;
  }
  res.locals.user ||= null;
  next();
};

const restrictTo =
  (...roles) =>
  (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(
        new AppError(
          'You do not have permission to perform this action.',
          403,
        ),
      );
    }
    next();
  };

const logout = (req, res) => {
  res.clearCookie('jwt');
  res.status(200).json({
    status: 'success',
  });
};

export {
  register,
  sendVerificationOtp,
  verifyEmail,
  login,
  forgotPassword,
  verifyOtp,
  resetPassword,
  updateMyPassword,
  isAuthenticated,
  isLoggedIn,
  restrictTo,
  logout,
};
