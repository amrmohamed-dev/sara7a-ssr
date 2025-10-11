import Message from '../models/message.model.js';
import catchAsync from '../utils/error/catchAsync.js';

const getHome = catchAsync(async (req, res) => {
  if (res.locals.user) {
    return res.status(200).redirect('/messages');
  }
  res.status(200).render('home', {
    title: 'Home page',
  });
});

const getLoginForm = (req, res) => {
  if (res.locals.user) {
    return res.status(200).redirect('/messages');
  }
  res.status(200).render('login', {
    title: 'Log into your account',
  });
};

const getRegisterForm = (req, res) => {
  if (res.locals.user) {
    return res.status(200).redirect('/messages');
  }
  res.status(200).render('register', {
    title: 'Create an account',
  });
};

const getMyMsgsPage = catchAsync(async (req, res) => {
  res.locals.fullUrl = `${req.protocol}://${req.host}`;
  const msgs = await Message.find({ receiver: req.user._id });
  res.status(200).render('messages', {
    title: 'My messages',
    msgs,
  });
});

export { getHome, getRegisterForm, getLoginForm, getMyMsgsPage };
