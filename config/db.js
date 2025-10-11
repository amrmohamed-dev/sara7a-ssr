import mongoose from 'mongoose';

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD,
);

const dbConnection = () => {
  mongoose
    .connect(DB)
    .then(() => console.log('DB Connected successfully'))
    .catch(() => console.log('Error in DB connection'));
};

export default dbConnection;
