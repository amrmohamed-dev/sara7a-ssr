import path from 'path';
import express from 'express';
import morgan from 'morgan';
import queryString from 'qs';
import cookieParser from 'cookie-parser';
import viewRouter from './routes/view.route.js';
import authRouter from './routes/auth.route.js';
import msgRouter from './routes/message.route.js';
import errorHandler from './controllers/error.controller.js';
import AppError from './utils/error/appError.js';

const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use((req, res, next) => {
  res.set('Cache-Control', 'no-store');
  next();
});

app.set('view engine', 'ejs');
app.set('views', path.join(process.cwd(), 'views'));
app.use(express.static(path.join(process.cwd(), 'public')));

app.use(cookieParser());
app.use(express.json({ limit: '5kb' }));

app.set('query parser', (query) => queryString.parse(query));

app.use('/', viewRouter);
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/messages', msgRouter);

app.use((req, res, next) => {
  next(
    new AppError(
      `Can't find this route '${req.originalUrl}' on this server!`,
      404,
    ),
  );
});

app.use(errorHandler);

export default app;
