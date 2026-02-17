/* eslint-disable */
import { sendOtp, verifyOtp, resetPassword, verifyEmail } from './auth.js';

const getOtpValue = (inputs) => {
  const otp = Array.from(inputs)
    .map((i) => i.value)
    .join('');
  return otp;
};

const handleEnterOtp = (inputs) => {
  inputs.forEach((input, index) => {
    input.addEventListener('paste', (e) => {
      e.preventDefault();
      const pastedData = e.clipboardData.getData('text').trim();

      if (/^\d{6}$/.test(pastedData)) {
        pastedData.split('').forEach((char, i) => {
          if (inputs[i]) inputs[i].value = char;
        });
        inputs[5].focus();
      }
    });

    input.addEventListener('input', (e) => {
      const value = e.target.value.replace(/\D/g, '');
      e.target.value = value;
      if (e.target.value.length === 1 && index < inputs.length - 1) {
        inputs[index + 1].focus();
      }
    });

    input.addEventListener('keydown', (e) => {
      if (e.key === 'Backspace' && index > 0 && !e.target.value) {
        inputs[index - 1].focus();
      }
      if (e.key === 'Enter') {
        e.preventDefault();
        document.getElementById('verifyOtpBtn').click();
      }
      if (e.key === 'ArrowRight' && index < inputs.length - 1) {
        e.preventDefault();
        inputs[index + 1].focus();
      }
      if (e.key === 'ArrowLeft' && index > 0) {
        e.preventDefault();
        inputs[index - 1].focus();
      }
    });
  });
};

const handleOtpSending = async (email, purpose) => {
  return await sendOtp({
    email,
    purpose,
  });
};

const handleOtpVerification = async (email, otp, purpose) => {
  return await verifyOtp({ email, otp, purpose });
};

const handlePasswordReset = async (email, otp) => {
  const password = document.getElementById('password').value;
  const passwordConfirm =
    document.getElementById('password-confirm').value;
  return await resetPassword({
    email,
    otp,
    password,
    passwordConfirm,
  });
};

const handleEmailVerification = async (otp) => {
  await verifyEmail({ otp });
};

const startCountdown = (resendBtn, countdownEl) => {
  let countdown = 60;
  resendBtn.disabled = true;
  countdownEl.textContent = `(${countdown})`;

  const countdownInterval = setInterval(() => {
    countdown--;
    countdownEl.textContent = `(${countdown})`;

    if (countdown <= 0) {
      clearInterval(countdownInterval);
      resendBtn.disabled = false;
      countdownEl.textContent = '';
    }
  }, 1000);
};

export {
  handleEnterOtp,
  getOtpValue,
  handleOtpSending,
  handleOtpVerification,
  handlePasswordReset,
  handleEmailVerification,
  startCountdown,
};
