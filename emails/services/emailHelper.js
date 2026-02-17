import sendEmail, { isResendValidationError } from './email.service.js';
import AppError from '../../utils/error/appError.js';

const createSendEmail = async (options, user) => {
  try {
    const response = await sendEmail(options);

    if (response?.error && isResendValidationError(response.error)) {
      return {
        success: true,
        demoMode: true,
        demoOtp: options.otp,
      };
    }

    if (response?.demoMode) {
      return {
        success: true,
        demoMode: true,
        demoOtp: response.demoOtp || options.otp,
      };
    }

    if (response?.error) {
      throw new Error(response.error.message);
    }

    return { success: true };
  } catch {
    user.set('otp.code', undefined);
    user.set('otp.expires', undefined);
    user.set('otp.purpose', undefined);
    await user.save({ validateBeforeSave: false });

    throw new AppError(
      'We could not send the email. Please try again later.',
      500,
    );
  }
};

export default createSendEmail;
