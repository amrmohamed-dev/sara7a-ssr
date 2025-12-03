import mongoose from 'mongoose';

const MessageSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      trim: true,
      minLength: [6, 'Text must be at least 6 characters'],
      maxLength: [500, 'Text must not exceed 500 characters'],
      required: [true, 'Text is required.'],
    },
    receiver: {
      type: mongoose.Schema.Types.ObjectId,
      required: [true, 'Receiver is required.'],
    },
  },
  {
    timestamps: true,
  },
);

MessageSchema.pre('findOneAndDelete', async function (next) {
  try {
    const userId = this._conditions.receiver;
    const msgId = this._conditions._id;

    await mongoose
      .model('User')
      .updateMany({ _id: userId }, { $pull: { favouriteMsgs: msgId } });

    next();
  } catch (err) {
    next(err);
  }
});

MessageSchema.pre('deleteMany', async function (next) {
  try {
    const userId = this._conditions.receiver;

    await mongoose
      .model('User')
      .updateMany({ _id: userId }, { $set: { favouriteMsgs: [] } });

    next();
  } catch (err) {
    next(err);
  }
});

const Message = mongoose.model('Message', MessageSchema);

export default Message;
