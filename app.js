import path from 'path';
import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import queryString from 'qs';
import cookieParser from 'cookie-parser';
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';
import xssClean from './middlewares/xssClean.js';
import mongoSanitize from './middlewares/mongoSanitize.js';
import viewRouter from './routes/view.route.js';
import authRouter from './routes/auth.route.js';
import msgRouter from './routes/message.route.js';
import userRouter from './routes/user.route.js';
import errorHandler from './controllers/error.controller.js';
import AppError from './utils/error/appError.js';

const app = express();

app.enable('trust proxy');

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use((req, res, next) => {
  res.set('Cache-Control', 'no-store');
  next();
});

app.disable('x-powered-by');

app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: [
        "'self'",
        'https://cdn.jsdelivr.net',
        'https://lottie.host',
      ],
      scriptSrc: [
        "'self'",
        'https://cdn.jsdelivr.net',
        'https://cdnjs.cloudflare.com',
        'https://lottie.host',
        "'unsafe-inline'",
        "'unsafe-eval'",
        'blob:',
        'data:',
      ],
      styleSrc: [
        "'self'",
        'https://cdn.jsdelivr.net',
        'https://fonts.googleapis.com',
        "'unsafe-inline'",
      ],
      fontSrc: ["'self'", 'https://fonts.gstatic.com'],
      imgSrc: ["'self'", 'data:', 'https:', 'blob:'],
    },
  }),
);

app.set('view engine', 'ejs');
app.set('views', path.join(process.cwd(), 'views'));
app.use(express.static(path.join(process.cwd(), 'public')));

app.use(cookieParser());
app.use(express.json({ limit: '5kb' }));
app.use(express.urlencoded({ extended: true, limit: '5kb' }));

app.set('query parser', (query) => queryString.parse(query));

app.use(mongoSanitize);
app.use(xssClean);

const swaggerDocument = YAML.load(
  path.join(process.cwd(), 'docs', 'swagger.yaml'),
);

app.use(
  '/api-docs',
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument, {
    swaggerOptions: {
      withCredentials: true,
    },
  }),
);

app.use('/', viewRouter);
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/messages', msgRouter);
app.use('/api/v1/users', userRouter);

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
