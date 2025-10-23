import Message from '../models/message.model.js';
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

const getMyMsgsPage = catchAsync(async (req, res, next) => {
  res.locals.fullUrl = `${req.protocol}://${req.host}`;
  const msgs = await Message.find({ receiver: req.user._id });
  res.status(200).render('messages', {
    title: 'My messages',
    msgs,
  });
});

export {
  getHome,
  getRegisterForm,
  getLoginForm,
  getForgotPasswordForm,
  getMyMsgsPage,
};
