/* eslint-disable */

import { login, register, logout } from './auth.js';
import * as otpUtils from './otpUtils.js';
import * as settings from './settings.js';

const registerForm = document.querySelector('.form--register');
const loginForm = document.querySelector('.form--login');
const logoutBtn = document.querySelector('.nav__el--logout');
const copyBtn = document.getElementById('copyBtn');
const forgotPasswordBtn = document.querySelector('.btn-sendOtp');
const verifyEmailBtn = document.querySelectorAll('#verifyEmailBtn');
const updatePasswordForm = document.querySelector(
  '.form--update-password',
);
const userDataForm = document.querySelector('.form--user-data');
const deleteMyAccount = document.getElementById('deleteAccountBtn');
const confirmDeleteBtn = document.getElementById('confirmDeleteAccount');

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

const sendOtpFlow = async (sendBtn, email, purpose) => {
  sendBtn.textContent = 'Sending....';
  const sendingStatus = await otpUtils.handleOtpSending(email, purpose);
  sendBtn.textContent =
    purpose === 'Password Recovery' ? 'Send OTP' : 'Not Verified';
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
        purpose,
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
        purpose,
      );
      verifyOtpBtn.textContent = 'Verify OTP';
      if (verifyingStatus) {
        otpModal.hide();

        if (purpose === 'Password Recovery') {
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
        } else {
          await otpUtils.handleEmailVerification(otp);
        }
      }
    });
  }
};

if (forgotPasswordBtn) {
  forgotPasswordBtn.addEventListener('click', async () => {
    const emailInput = document.getElementById('email');
    if (!emailInput.checkValidity()) {
      emailInput.classList.add('is-invalid');
      emailInput.reportValidity();
      return;
    } else {
      emailInput.classList.remove('is-invalid');
    }
    const email = emailInput.value.trim();
    await sendOtpFlow(forgotPasswordBtn, email, 'Password Recovery');
  });
}

if (verifyEmailBtn.length) {
  verifyEmailBtn.forEach((btn) =>
    btn.addEventListener('click', async () => {
      const email = btn.dataset.email.trim();
      await sendOtpFlow(btn, email, 'Email Confirmation');
    }),
  );
}

if (updatePasswordForm) {
  updatePasswordForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const updatePasswordBtn = document.querySelector(
      '.btn--update-password',
    );
    updatePasswordBtn.textContent = 'Updating....';
    const currentPassword =
      document.getElementById('current-password').value;
    const password = document.getElementById('password').value;
    const passwordConfirm =
      document.getElementById('password-confirm').value;
    updatePasswordBtn.disabled = true;
    const updatingStatus = await settings.updateSettings(
      { currentPassword, password, passwordConfirm },
      'password',
    );
    updatePasswordBtn.textContent = 'Update Password';
    if (updatingStatus) updatePasswordForm.reset();
    updatePasswordBtn.disabled = false;
  });
}

if (userDataForm) {
  userDataForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const saveDataBtn = document.querySelector('.btn--save-data');
    saveDataBtn.textContent = 'Updating....';
    const name = document.getElementById('name').value;
    saveDataBtn.disabled = true;
    const savingStatus = await settings.updateSettings({ name }, 'data');
    saveDataBtn.textContent = 'Save Changes';
    if (savingStatus) {
      setTimeout(() => location.reload(), 1100);
    } else {
      saveDataBtn.disabled = false;
    }
  });
}

if (deleteMyAccount) {
  deleteMyAccount.addEventListener('click', () => {
    const modal = new bootstrap.Modal(
      document.getElementById('deleteAccountModal'),
    );
    modal.show();
  });
}

if (confirmDeleteBtn) {
  confirmDeleteBtn.addEventListener('click', async () => {
    confirmDeleteBtn.textContent = 'Deleting...';
    confirmDeleteBtn.disabled = true;
    const deletingStatus = await settings.deleteAccount();
    if (deletingStatus) {
      setTimeout(() => {
        location.assign('/');
      }, 1300);
    } else {
      confirmDeleteBtn.disabled = false;
      confirmDeleteBtn.textContent = 'Delete My Account';
    }
  });
}
