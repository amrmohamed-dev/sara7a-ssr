import mongoose from 'mongoose';

const MessageSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      trim: true,
      minlength: [6, 'Text must be at least 6 characters'],
      maxlength: [500, 'Text must not exceed 500 characters'],
      required: [true, 'Text is required.'],
    },
    image: String,
    imagePublicId: String,
    sender: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    receiver: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
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
      .updateOne({ _id: userId }, { $pull: { favouriteMsgs: msgId } });

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
      .updateOne({ _id: userId }, { $set: { favouriteMsgs: [] } });

    next();
  } catch (err) {
    next(err);
  }
});

const Message = mongoose.model('Message', MessageSchema);

export default Message;
