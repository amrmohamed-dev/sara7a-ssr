import mongoose from 'mongoose';

const DB = process.env.DATABASE.replace(
  '<USERNAME>',
  process.env.DATABASE_USERNAME,
).replace('<PASSWORD>', process.env.DATABASE_PASSWORD);

// const DB = process.env.DB_LOCAL;

const dbConnection = () => {
  mongoose
    .connect(DB)
    .then(() => console.log('DB Connected successfully'))
    .catch(() => console.log('Error in DB connection'));
};

export default dbConnection;
