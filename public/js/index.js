/* eslint-disable */

import { login, register, logout } from './auth.js';
import * as otpUtils from './otpUtils.js';

const registerForm = document.querySelector('.form--register');
const loginForm = document.querySelector('.form--login');
const logoutBtn = document.querySelector('.nav__el--logout');
const copyBtn = document.getElementById('copyBtn');
const forgotPasswordBtn = document.querySelector('.btn-sendOtp');

if (registerForm) {
  registerForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const registerBtn = document.querySelector('.btn--register');
    registerBtn.textContent = 'Please wait....';
    const username = document.getElementById('username').value;
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const passwordConfirm =
      document.getElementById('password-confirm').value;
    await register({ username, name, email, password, passwordConfirm });
    registerBtn.textContent = 'Register';
  });
}

if (loginForm) {
  loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const loginBtn = document.querySelector('.btn--login');
    loginBtn.textContent = 'Please wait....';
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    await login({ email, password });
    loginBtn.textContent = 'Login';
  });
}

if (logoutBtn) logoutBtn.addEventListener('click', logout);

if (copyBtn) {
  copyBtn.addEventListener('click', () => {
    const input = document.getElementById('profileLink');
    input.select();
    input.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(input.value);
    document.getElementById('copyBtn').textContent = 'Copied!';
    setTimeout(
      () => (document.getElementById('copyBtn').textContent = 'Copy'),
      1500,
    );
  });
}

// ---------- Forgot Password Flow ----------
if (forgotPasswordBtn) {
  forgotPasswordBtn.addEventListener('click', async () => {
    const emailInput = document.getElementById('email');
    if (!emailInput.checkValidity()) {
      emailInput.classList.add('is-invalid');
      emailInput.reportValidity();
      return;
    }
    else{
      emailInput.classList.remove('is-invalid');
    }
    const email = emailInput.value.trim();
    forgotPasswordBtn.textContent = 'Sending....';
    const sendingStatus = await otpUtils.handleOtpSending(
      email,
      'Password Recovery',
    );
    forgotPasswordBtn.textContent = 'Send OTP';
    if (sendingStatus) {
      const otpModal = new bootstrap.Modal(
        document.getElementById('otpModal'),
      );
      otpModal.show();

      let resendBtn = document.getElementById('resendOtpBtn');
      resendBtn.replaceWith(resendBtn.cloneNode(true));
      resendBtn = document.getElementById('resendOtpBtn');
      const countdownEl = document.getElementById('countdown');
      otpUtils.startCountdown(resendBtn, countdownEl);

      // Move between OTP inputs automatically & Paste OTP
      const inputs = document.querySelectorAll('.otp-input');
      otpUtils.handleEnterOtp(inputs);

      resendBtn.addEventListener('click', async () => {
        resendBtn.disabled = true;
        resendBtn.textContent = 'Resending....';
        const email = emailInput.value.trim();
        const sendingStatus = await otpUtils.handleOtpSending(
          email,
          'Password Recovery',
        );
        if (sendingStatus) {
          otpUtils.startCountdown(resendBtn, countdownEl);
        } else {
          resendBtn.textContent = 'Resend OTP';
          resendBtn.disabled = false;
        }
      });

      // Verify OTP
      let verifyOtpBtn = document.getElementById('verifyOtpBtn');
      // remove oldest listeners
      verifyOtpBtn.replaceWith(verifyOtpBtn.cloneNode(true));
      verifyOtpBtn = document.getElementById('verifyOtpBtn');

      verifyOtpBtn.addEventListener('click', async () => {
        let allFilled = true;
        Array.from(inputs).forEach((input) => {
          if (input.value.trim() === '') {
            input.classList.add('is-invalid');
            allFilled = false;
          } else input.classList.remove('is-invalid');
        });
        if (!allFilled) {
          return;
        }
        verifyOtpBtn.textContent = 'Verifying....';
        const otp = otpUtils.getOtpValue(inputs);
        const verifyingStatus = await otpUtils.handleOtpVerification(
          email,
          otp,
        );
        verifyOtpBtn.textContent = 'Verify OTP';
        if (verifyingStatus) {
          otpModal.hide();

          const resetModal = new bootstrap.Modal(
            document.getElementById('resetModal'),
          );
          resetModal.show();

          //Reset Password
          let resetPasswordForm = document.querySelector(
            '.form--reset-password',
          );
          resetPasswordForm.replaceWith(resetPasswordForm.cloneNode(true));
          resetPasswordForm = document.querySelector(
            '.form--reset-password',
          );
          resetPasswordForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            await otpUtils.handlePasswordReset(email, otp);
          });
        }
      });
    }
  });
}
