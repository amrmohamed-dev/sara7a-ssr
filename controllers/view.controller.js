import Message from '../models/message.model.js';
import User from '../models/user.model.js';
import AppError from '../utils/error/appError.js';
import catchAsync from '../utils/error/catchAsync.js';
import timeSince from '../utils/timeSince.js';

const getHome = (req, res) => {
  res.status(200).render('home', {
    title: 'Home page',
  });
};

const getLoginForm = (req, res) => {
  res.status(200).render('auth/login', {
    title: 'Log into your account',
  });
};

const getRegisterForm = (req, res) => {
  res.status(200).render('auth/register', {
    title: 'Create an account',
  });
};

const getForgotPasswordForm = (req, res) => {
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
  const sort = req.query.sort === 'oldest' ? 1 : -1;
  const { tab } = req.query;

  res.locals.fullUrl = `${req.protocol}://${req.host}`;

  const user = await User.findById(req.user._id).populate({
    path: 'favouriteMsgs.msg',
    populate: {
      path: 'sender',
      select: 'name username photo',
    },
  });

  const favSet = new Set(
    user.favouriteMsgs
      .map((fav) => fav.msg?.id)
      .filter(Boolean)
      .map(String),
  );

  const getUserMsgs = () =>
    Message.find({ receiver: user._id })
      .populate('sender', 'name username photo')
      .sort({ createdAt: sort });

  let msgs;
  if (tab) {
    if (tab === 'favourite') {
      msgs = user.favouriteMsgs
        .sort((a, b) => b.addedAt - a.addedAt)
        .map((fav) => fav.msg)
        .filter(Boolean);
    } else {
      msgs = await getUserMsgs();
    }

    return res.status(200).render('shared/showMessages', {
      msgs,
      favSet,
      id: tab,
      timeSince,
      layout: false,
    });
  }

  msgs = await getUserMsgs();

  res.status(200).render('messages', {
    title: 'My messages',
    msgs,
    favSet,
    sort: req.query.sort || 'newest',
  });
});

const getPublicUserPage = catchAsync(async (req, res, next) => {
  const { username } = req.params;
  const user = await User.findOne({ username }).populate('msgsCount');
  if (!user) {
    return next(new AppError('No user found with that username', 404));
  }
  user.visitsCount++;
  await user.save({ validateBeforeSave: false });
  res.status(200).render('publicUser', {
    title: `${user.name}-send me a Sara7a message`,
    publicUser: user,
    timeSince,
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
