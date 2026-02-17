import sendEmail from './email.service.js';
import AppError from '../../utils/error/appError.js';

const createSendEmail = async (options, user) => {
  try {
    const response = await sendEmail(options);
    if (response?.error) {
      // Free tier restriction (Demo mode)
      if (
        response.error.statusCode === 403 &&
        response.error.name === 'validation_error'
      ) {
        console.log(
          `OTP (demo mode): ${options.otp} valid for 10 minutes.`,
        );
        return true;
      }

      // Another Error
      throw new Error(response.error.message);
    }
    return true;
  } catch (err) {
    const resetFields = ['otp.code', 'otp.expires', 'otp.purpose'];
    resetFields.forEach((field) => {
      user[field] = undefined;
    });
    await user.save({ validateBeforeSave: false });
    throw new AppError(
      'We could not send the email. Please try again later.',
      500,
    );
  }
};

export default createSendEmail;
