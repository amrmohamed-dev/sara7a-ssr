import '../config/dotenv.js';
import mongoose from 'mongoose';
import dbConnection from '../config/db.js';
import User from '../models/user.model.js';

(async () => {
  try {
    dbConnection();

    await mongoose.connection.asPromise();

    const result = await User.updateMany(
      { 'otp.expires': { $lt: Date.now() } },
      { $unset: { otp: 1 } },
    );

    console.log(`Cleanup done. Modified: ${result.modifiedCount}`);

    await mongoose.connection.close();
    process.exit(0);
  } catch (err) {
    console.error('Cleanup failed:', err);
    process.exit(1);
  }
})();
