import Message from '../models/message.model.js';
import User from '../models/user.model.js';
import AppError from '../utils/error/appError.js';
import catchAsync from '../utils/error/catchAsync.js';

const getHome = (req, res) => {
  if (res.locals.user) {
    return res.status(200).redirect('/messages');
  }
  res.status(200).render('home', {
    title: 'Home page',
  });
};

const getLoginForm = (req, res) => {
  if (res.locals.user) {
    return res.status(200).redirect('/messages');
  }
  res.status(200).render('auth/login', {
    title: 'Log into your account',
  });
};

const getRegisterForm = (req, res) => {
  if (res.locals.user) {
    return res.status(200).redirect('/messages');
  }
  res.status(200).render('auth/register', {
    title: 'Create an account',
  });
};

const getForgotPasswordForm = (req, res) => {
  if (res.locals.user) {
    return res.status(200).redirect('/messages');
  }
  res.status(200).render('auth/forgotPassword', {
    title: 'Forgotten password',
  });
};

const getMySettingsPage = (req, res) => {
  res.status(200).render('settings', {
    title: 'My settings',
  });
};

const getMyMsgsPage = catchAsync(async (req, res, next) => {
  res.locals.fullUrl = `${req.protocol}://${req.host}`;
  const msgs = await Message.find({ receiver: req.user._id });
  res.status(200).render('messages', {
    title: 'My messages',
    msgs,
  });
});

const getPublicUserPage = catchAsync(async (req, res, next) => {
  const { username } = req.params;
  const user = await User.findOne({ username });
  if (!user) {
    return next(new AppError('No user found with that username', 404));
  }
  user.visitsCount++;
  await user.save({ validateBeforeSave: false });
  res.status(200).render('publicUser', {
    title: `${user.name}-send me a Sara7a message`,
  });
});

export {
  getHome,
  getRegisterForm,
  getLoginForm,
  getForgotPasswordForm,
  getMySettingsPage,
  getMyMsgsPage,
  getPublicUserPage,
};
