import sendEmail from './email.service.js';
import AppError from '../../utils/error/appError.js';

const createSendEmail = async (options, user) => {
  try {
    await sendEmail(options);
    return true;
  } catch (err) {
    const resetFields = ['otp.code', 'otp.expires', 'otp.purpose'];
    resetFields.forEach((field) => {
      user[field] = undefined;
    });
    await user.save({ validateModifiedOnly: true });
    throw new AppError(
      'We could not send the email. Please try again later.',
      500,
    );
  }
};

export default createSendEmail;
