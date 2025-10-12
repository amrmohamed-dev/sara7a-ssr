import AppError from '../utils/error/appError.js';

const handleCastErrorDB = (err) => {
  const message = `Invalid ${err.path}: ${err.value}`;

  return new AppError(message, 400);
};

const handleDuplicateErrorDB = (err) => {
  const value = err.errmsg.match(/"(.*?)"/)[0];
  const message = `Duplicate field value: ${value}. Please use another value!`;

  return new AppError(message, 400);
};

const handleValidationErrorDB = (err) => {
  const errors = Object.values(err.errors).map((value) => value.message);
  const message = `Invalid input data. ${errors.join('. ')}`;

  return new AppError(message, 400);
};

const handlejwtError = () =>
  new AppError('Invalid or expired token, please log in again.', 401);

const handlejwtExpiredError = () =>
  new AppError('Invalid or expired token, please log in again.', 401);

const sendErrorDev = (err, req, res) => {
  //API
  if (req.originalUrl.startsWith('/api')) {
    return res.status(err.statusCode).json({
      status: err.status,
      error: err,
      message: err.message,
      stack: err.stack,
    });
  }
  //Render website
  console.error('Error |', err);

  res.status(err.statusCode).render('error', {
    title: 'Something went wrong!',
    msg: err.message,
    user: res.locals.user || null,
  });
};

const sendErrorProd = (err, req, res) => {
  if (req.originalUrl.startsWith('/api')) {
    // Operational, trusted error: send message to client
    if (err.isOperational) {
      return res.status(err.statusCode).json({
        status: err.status,
        message: err.message,
      });
    }
    // Programming or unknown error: don't leak error details
    // 1) Log error
    console.error('Error |', err);
    // 2) Send generic message
    return res.status(500).json({
      status: 'error',
      message: 'Please try again later.',
    });
  }
  if (err.isOperational) {
    return res.status(err.statusCode).render('error', {
      title: 'Something went wrong!',
      msg: err.message,
      user: res.locals.user || null,
    });
  }
  // Programming or unknown error: don't leak error details
  // 1) Log error
  console.error('Error |', err);
  // 2) Send generic message
  return res.status(500).render('error', {
    title: 'Something went wrong!',
    msg: 'Please try again later.',
    user: res.locals.user || null,
  });
};

const globalError = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';

  const { NODE_ENV } = process.env;
  if (NODE_ENV === 'development') {
    sendErrorDev(err, req, res);
  } else if (NODE_ENV === 'production') {
    let error = Object.create(err);

    if (error.name === 'CastError') error = handleCastErrorDB(error);
    if (error.code === 11000) error = handleDuplicateErrorDB(error);
    if (error.name === 'ValidationError')
      error = handleValidationErrorDB(error);
    if (error.name === 'JsonWebTokenError') error = handlejwtError();
    if (error.name === 'TokenExpiredError')
      error = handlejwtExpiredError();

    sendErrorProd(error, req, res);
  }
};

export default globalError;
