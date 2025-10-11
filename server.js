import processHandler from './utils/error/processHandler.js';
import './config/dotenv.js';
import app from './app.js';
import dbConnection from './config/db.js';

const port = process.env.PORT || 3000;

dbConnection();

const server = app.listen(port, () =>
  console.log(`Sara7a is running at=>http://localhost:${port}`),
);

processHandler(server);
