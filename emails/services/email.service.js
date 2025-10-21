import fs from 'fs/promises';
import path from 'path';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const loadTemplate = async (replacements = {}) => {
  const templatePath = path.resolve(
    import.meta.dirname,
    '..',
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
  });

  const mailOptions = {
    from: `Sara7a <${process.env.EMAIL_USER}>`,
    to: email,
    subject,
    html,
  };

  return transporter.sendMail(mailOptions);
};

export default sendEmail;
