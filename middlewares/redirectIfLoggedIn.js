const redirectIfLoggedIn = (req, res, next) => {
  if (res.locals.user) {
    return res.status(200).redirect('/messages');
  }
  next();
};

export default redirectIfLoggedIn;
