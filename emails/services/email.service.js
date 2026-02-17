import fs from 'fs/promises';
import path from 'path';
import nodemailer from 'nodemailer';
import { Resend } from 'resend';

const isProduction = process.env.NODE_ENV === 'production';

const resend = isProduction
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

const transporter = !isProduction
  ? nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })
  : null;

const emailTemplatePath = path.join(
  process.cwd(),
  'emails',
  'templates',
  'emailTemplate.html',
);

const isResendValidationError = (error) => {
  const statusCode = Number(error?.statusCode);
  const errorName = String(error?.name ?? '').toLowerCase();

  return statusCode === 403 && errorName === 'validation_error';
};

const loadTemplate = async (replacements = {}) => {
  let html = await fs.readFile(emailTemplatePath, 'utf-8');

  Object.keys(replacements).forEach((key) => {
    if (key) {
      html = html.replace(
        new RegExp(`{{${key}}}`, 'g'),
        String(replacements[key] ?? ''),
      );
    }
  });
  return html;
};

const sendEmail = async (options) => {
  const { name, email, subject, otp } = options;

  const html = await loadTemplate({
    templateTitle: subject,
    name,
    otp,
    year: new Date().getFullYear(),
  });

  const mailOptions = {
    from: `Sara7a <${process.env.EMAIL_USER}>`,
    to: email,
    subject,
    html,
  };

  if (!isProduction) {
    await transporter.sendMail(mailOptions);
    return { success: true };
  }

  let response;
  try {
    response = await resend.emails.send(mailOptions);
  } catch (error) {
    if (isResendValidationError(error)) {
      return {
        success: true,
        demoMode: true,
        demoOtp: otp,
      };
    }

    throw error;
  }

  if (response?.error) {
    if (isResendValidationError(response.error)) {
      return {
        success: true,
        demoMode: true,
        demoOtp: otp,
        error: response.error,
      };
    }

    throw new Error(response.error.message || 'Failed to send email.');
  }

  return { success: true };
};

export { isResendValidationError };
export default sendEmail;
