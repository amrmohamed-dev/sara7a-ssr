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

const Message = mongoose.model('Message', MessageSchema);

export default Message;
