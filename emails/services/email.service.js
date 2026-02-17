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

const loadTemplate = async (replacements = {}) => {
  const templatePath = path.join(
    process.cwd(),
    'emails',
    'templates',
    'emailTemplate.html',
  );
  let html = await fs.readFile(templatePath, 'utf-8');
  Object.keys(replacements).forEach((key) => {
    if (key) {
      html = html.replace(
        new RegExp(`{{${key}}}`, 'g'),
        replacements[key],
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

  const response = isProduction
    ? await resend.emails.send(mailOptions)
    : await transporter.sendMail(mailOptions);

  return response;
};

export default sendEmail;
