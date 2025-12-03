import crypto from 'crypto';
import bcrypt from 'bcrypt';
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      trim: true,
      lowercase: true,
      unique: [true, 'Username is already in use.'],
      minlength: [3, 'Username must be at least 3 characters.'],
      maxlength: [25, 'Username must not exceed 25 characters.'],
      required: [true, 'Username is required.'],
    },
    name: {
      type: String,
      trim: true,
      minlength: [3, 'Name must be at least 3 characters.'],
      maxlength: [35, 'Name must not exceed 35 characters.'],
      required: [true, 'Name is required.'],
    },
    email: {
      type: String,
      lowercase: true,
      unique: [true, 'ُEmail is already in use.'],
      required: [true, 'Email is required.'],
    },
    password: {
      type: String,
      minlength: [8, 'Password must be at least 8 characters.'],
      maxlength: [30, 'Password must not exceed 30 characters.'],
      required: [true, 'Password is required.'],
    },
    passwordChangedAt: Date,
    role: {
      type: String,
      enum: ['user', 'admin'],
      default: 'user',
    },
    photo: String,
    favouriteMsgs: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: 'Message',
      default: [],
    },
    visitsCount: {
      type: Number,
      default: 0,
    },
    otp: {
      code: String,
      expires: Date,
      purpose: String, //verifyEmail or forgetPassword
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  },
);

const hiddenFields = (doc, ret) => {
  delete ret.__v;
  delete ret.updatedAt;
  delete ret.isVerified;
  delete ret.isActive;
  delete ret.password;
  delete ret.passwordChangedAt;
  delete ret.otp;
  return ret;
};

userSchema.virtual('msgsCount', {
  ref: 'Message',
  foreignField: 'receiver',
  localField: '_id',
  count: true,
});

userSchema.set('toJSON', { virtuals: true, transform: hiddenFields });
userSchema.set('toObject', { virtuals: true, transform: hiddenFields });

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();

  this.password = await bcrypt.hash(this.password, 10);
  next();
});

userSchema.pre('save', function (next) {
  if (this.isModified('password') && !this.isNew) {
    this.passwordChangedAt = Date.now() - 1000;
  }
  next();
});

userSchema.pre('findOneAndDelete', async function (next) {
  const user = await this.model.findOne(this.getFilter());
  if (user) {
    await mongoose.model('Message').deleteMany({ receiver: user._id });
  }
  next();
});

userSchema.pre(/^find/, function (next) {
  this.find({ isActive: { $ne: false } }).populate('favouriteMsgs');
  next();
});

userSchema.methods.correctPassword = async function (candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

userSchema.methods.generateOtp = function (otpPurpose) {
  const otp = crypto.randomInt(100000, 900000).toString();
  this.otp.code = crypto.createHash('sha256').update(otp).digest('hex');
  this.otp.expires = Date.now() + 10 * 60 * 1000;
  this.otp.purpose = otpPurpose;
  return otp;
};

userSchema.methods.changedPasswordAfter = function (jwtIat) {
  if (this.passwordChangedAt) {
    const passwordChangedTimestamp = Math.floor(
      this.passwordChangedAt.getTime() / 1000,
    );
    return passwordChangedTimestamp > jwtIat;
  }
  return false;
};

const User = mongoose.model('User', userSchema);

export default User;
