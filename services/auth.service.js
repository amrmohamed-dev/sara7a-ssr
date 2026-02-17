import crypto from 'crypto';
import jwt from 'jsonwebtoken';
import UserModel from '../models/user.model.js';
import AppError from '../utils/error/appError.js';
import createSendEmail from '../emails/services/emailHelper.js';

const signToken = (payload) => {
  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
  return token;
};

const createSendToken = (user, statusCode, res, message, options = {}) => {
  const { demoMode = false, demoOtp } = options;
  const token = signToken({ userId: user._id, role: user.role });
  const cookieOptions = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000,
    ),
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'Strict',
    httpOnly: true,
  };

  res.cookie('jwt', token, cookieOptions);

  const responseBody = {
    status: 'success',
    message,
    data: {
      user,
    },
  };

  if (demoMode && demoOtp) {
    responseBody.demoOtp = demoOtp;
  }

  res.status(statusCode).json(responseBody);
};

const sendOtpEmail = async (user, purpose) => {
  const otp = user.generateOtp(purpose);
  await user.save({ validateBeforeSave: false });

  const options = {
    name: user.name?.split(' ')[0],
    email: user.email,
    subject: purpose,
    otp,
  };

  return await createSendEmail(options, user);
};

const verifyOtp = async (email, otp, purpose) => {
  const otpHashed = crypto.createHash('sha256').update(otp).digest('hex');
  const user = await UserModel.findOne({
    email,
    'otp.code': otpHashed,
    'otp.expires': { $gt: Date.now() },
    'otp.purpose': purpose,
  });
  if (!user) {
    throw new AppError(
      'Verification failed. Please check your OTP or request a new one',
      400,
    );
  }
  return user;
};

export { createSendToken, sendOtpEmail, verifyOtp };
