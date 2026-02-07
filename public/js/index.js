/* eslint-disable */

import showAlert from './alerts.js';
import { login, register, logout } from './auth.js';
import {
  deleteAllMsgs,
  deleteOneMsg,
  sendMsg,
  toggleFavourite,
} from './message.js';
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
const addPhotoBtn = document.querySelector('#addPhotoBtn');
const sendMsgForm = document.querySelector('.form--send-msg');
const msgsSection = document.querySelector('.messages-section');

if (registerForm) {
  registerForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const registerBtn = document.querySelector('.btn--register');
    registerBtn.textContent = 'Please wait....';
    registerBtn.disabled = true;
    const username = document.getElementById('username').value;
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const passwordConfirm =
      document.getElementById('password-confirm').value;
    const registeringStatus = await register({
      username,
      name,
      email,
      password,
      passwordConfirm,
    });
    if (registeringStatus) {
      setTimeout(() => {
        location.assign('/messages');
      }, 2000);
    } else {
      registerBtn.disabled = false;
      registerBtn.textContent = 'Register';
    }
  });
}

if (loginForm) {
  loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const loginBtn = document.querySelector('.btn--login');
    loginBtn.textContent = 'Please wait....';
    loginBtn.disabled = true;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const loggingStatus = await login({ email, password });
    if (loggingStatus) {
      setTimeout(() => {
        location.assign('/messages');
      }, 1500);
    } else {
      loginBtn.disabled = false;
      loginBtn.textContent = 'Login';
    }
  });
}

if (logoutBtn) logoutBtn.addEventListener('click', logout);

if (copyBtn) {
  copyBtn.addEventListener('click', () => {
    const input = document.getElementById('profileLink');
    input.select();
    input.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(input.value);
    copyBtn.textContent = 'Copied!';
    setTimeout(() => (copyBtn.textContent = 'Copy'), 1500);
  });
}

const sendOtpFlow = async (sendBtn, email, purpose) => {
  const originalText = sendBtn.textContent;
  sendBtn.textContent = 'Sending....';
  sendBtn.disabled = true;
  const sendingStatus = await otpUtils.handleOtpSending(email, purpose);
  sendBtn.disabled = false;
  sendBtn.textContent = originalText;
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
      verifyOtpBtn.disabled = true;
      const otp = otpUtils.getOtpValue(inputs);
      const verifyingStatus = await otpUtils.handleOtpVerification(
        email,
        otp,
        purpose,
      );
      verifyOtpBtn.textContent = 'Verify OTP';
      verifyOtpBtn.disabled = false;
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
            const resetPasswordBtn =
              document.getElementById('resetPasswordBtn');
            resetPasswordBtn.textContent = 'Resetting....';
            resetPasswordBtn.disabled = true;
            const resettingStatus = await otpUtils.handlePasswordReset(
              email,
              otp,
            );
            if (resettingStatus) {
              setTimeout(() => location.assign('/'), 1500);
            } else {
              resetPasswordBtn.textContent = 'Reset Password';
              resetPasswordBtn.disabled = false;
            }
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
      btn.disabled = true;
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

if (addPhotoBtn) {
  const deletePhotoBtn = document.querySelector('#deletePhotoBtn');
  const savePhotoBtn = document.querySelector('#savePhotoBtn');
  const profilePhotoInput = document.querySelector('#profilePhotoInput');
  const profilePhotoPreview = document.querySelector(
    '#profilePhotoPreview',
  );

  let selectedPhotoFile = null;

  addPhotoBtn.addEventListener('click', () => profilePhotoInput.click());

  profilePhotoInput?.addEventListener('change', function () {
    const file = this.files[0];
    if (!file) return;

    selectedPhotoFile = file;

    const reader = new FileReader();
    reader.onload = () => {
      profilePhotoPreview.src = reader.result;
    };
    reader.readAsDataURL(file);

    addPhotoBtn.textContent = 'Change Photo';
    savePhotoBtn.classList.remove('d-none');
  });

  savePhotoBtn?.addEventListener('click', async () => {
    if (!selectedPhotoFile) return;

    savePhotoBtn.textContent = 'Uploading...';
    savePhotoBtn.disabled = true;
    if (deletePhotoBtn) deletePhotoBtn.disabled = true;
    addPhotoBtn.disabled = true;

    const uploadStatus = await settings.handleOneImage(
      'PATCH',
      selectedPhotoFile,
    );

    if (uploadStatus) {
      setTimeout(() => location.reload(), 1100);
    } else {
      savePhotoBtn.textContent = 'Save Photo';
      savePhotoBtn.disabled = false;
      if (deletePhotoBtn) deletePhotoBtn.disabled = false;
      addPhotoBtn.disabled = false;
    }
  });

  deletePhotoBtn?.addEventListener('click', async () => {
    const modal = new bootstrap.Modal(
      document.getElementById('deleteModal'),
    );
    setModalContent(
      'Delete Photo',
      `<strong>Are you sure you want to delete your profile photo?</strong><br/>This action cannot be undone.`,
    );

    modal.show();

    let confirmDeletePhotoBtn =
      document.getElementById('confirmDeleteBtn');
    confirmDeletePhotoBtn.replaceWith(
      confirmDeletePhotoBtn.cloneNode(true),
    );

    confirmDeletePhotoBtn = document.getElementById('confirmDeleteBtn');
    confirmDeletePhotoBtn?.addEventListener('click', async () => {
      modal.hide();
      deletePhotoBtn.textContent = 'Deleting...';
      deletePhotoBtn.disabled = true;
      if (savePhotoBtn) savePhotoBtn.disabled = true;
      if (addPhotoBtn) addPhotoBtn.disabled = true;

      const handlingStatus = await settings.handleOneImage('DELETE');
      if (handlingStatus) {
        setTimeout(() => location.reload(), 1100);
      } else {
        deletePhotoBtn.textContent = 'Delete';
        deletePhotoBtn.disabled = true;
        if (savePhotoBtn) savePhotoBtn.disabled = true;
        if (addPhotoBtn) addPhotoBtn.disabled = true;
      }
    });
  });

  // Delete Account
  let deleteAccountBtn = document.getElementById('deleteAccountBtn');

  deleteAccountBtn.addEventListener('click', async () => {
    const modal = new bootstrap.Modal(
      document.getElementById('deleteModal'),
    );
    setModalContent(
      'Delete Account',
      `<strong>Are you sure you want to delete your account?</strong><br/>This action will remove all your data permanently.`,
    );

    modal.show();

    let confirmDeleteAccountBtn =
      document.getElementById('confirmDeleteBtn');
    confirmDeleteAccountBtn.replaceWith(
      confirmDeleteAccountBtn.cloneNode(true),
    );

    confirmDeleteAccountBtn = document.getElementById('confirmDeleteBtn');
    confirmDeleteAccountBtn?.addEventListener('click', async () => {
      modal.hide();
      deleteAccountBtn.textContent = 'Deleting...';
      deleteAccountBtn.disabled = true;

      const deletingStatus = await settings.deleteAccount();
      if (deletingStatus) {
        setTimeout(() => {
          location.assign('/');
        }, 1300);
      } else {
        confirmDeleteAccountBtn.disabled = false;
        deleteAccountBtn.disabled = false;
        deleteAccountBtn.textContent = 'Delete My Account';
      }
    });
  });
}

function setModalContent(title, message) {
  document.getElementById('modalTitle').textContent = title;
  document.getElementById('modalMessage').innerHTML = message;
}

if (sendMsgForm) {
  const textarea = document.getElementById('msg');
  const remaining = document.getElementById('remaining');
  const updateCount = () => {
    const charsLeft = 500 - textarea.value.length;
    remaining.textContent = charsLeft;
    remaining.style.color = charsLeft < 50 ? 'red' : '#6c757d';
  };
  setTimeout(updateCount, 50);

  textarea.addEventListener('input', updateCount);

  const addImageBtn = document.querySelector('#addImageBtn');
  const msgImageInput = document.querySelector('#msgImageInput');
  const imagePreviewDiv = document.querySelector('#imagePreviewDiv');
  const previewImg = document.querySelector('#previewImg');
  const removeImageBtn = document.querySelector('#removeImageBtn');
  const originalAddImgText = addImageBtn.textContent;

  addImageBtn?.addEventListener('click', () => msgImageInput.click());

  msgImageInput?.addEventListener('change', () => {
    const file = msgImageInput.files[0];
    if (file) {
      previewImg.src = URL.createObjectURL(file);
      addImageBtn.textContent = 'Change Photo';
      imagePreviewDiv.classList.remove('d-none');
    }
  });

  removeImageBtn?.addEventListener('click', () => {
    msgImageInput.value = '';
    previewImg.src = '';
    addImageBtn.textContent = originalAddImgText;
    imagePreviewDiv.classList.add('d-none');
  });

  document.addEventListener('DOMContentLoaded', async () => {
    const switchBox = document.getElementById('anonSwitch');
    const checkbox = document.getElementById('anonymousCheckbox');

    const isLoggedIn = document.body.dataset.loggedIn === 'true';

    switchBox.addEventListener('click', () => {
      if (!isLoggedIn)
        return showAlert('error', 'You need to login first');

      checkbox.checked = !checkbox.checked;

      switchBox.classList.toggle('active', checkbox.checked);
    });
  });

  sendMsgForm?.addEventListener('submit', async (e) => {
    e.preventDefault();

    const anonymousCheckbox = document.getElementById('anonymousCheckbox');
    const isAnonymous = anonymousCheckbox.checked;

    const formData = new FormData(sendMsgForm);

    if (isAnonymous) formData.delete('sender');

    const sendMsgBtn = document.querySelector('.btn--send-msg');
    sendMsgBtn.textContent = 'Sending....';
    sendMsgBtn.disabled = true;
    textarea.disabled = true;
    addImageBtn.disabled = true;
    if (removeImageBtn) removeImageBtn.disabled = true;

    const sendingStatus = await sendMsg(formData);

    sendMsgBtn.textContent = 'Send';
    sendMsgBtn.disabled = false;
    textarea.disabled = false;
    addImageBtn.disabled = false;
    if (removeImageBtn) removeImageBtn.disabled = false;

    if (sendingStatus) {
      textarea.value = '';
      addImageBtn.textContent = originalAddImgText;
      updateCount();
      imagePreviewDiv.classList.add('d-none');
      previewImg.src = '';
    }
  });
}

if (msgsSection) {
  let deleteAllMsgsForm = document.querySelector('.form--deleteallmsgs');
  deleteAllMsgsForm.replaceWith(deleteAllMsgsForm.cloneNode(true));

  deleteAllMsgsForm = document.querySelector('.form--deleteallmsgs');
  deleteAllMsgsForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const confirmDeleteModal = new bootstrap.Modal(
      document.getElementById('confirmDeleteModal'),
    );
    confirmDeleteModal.show();

    let confirmDeleteBtn = document.getElementById('confirmDeleteBtn');
    confirmDeleteBtn.replaceWith(confirmDeleteBtn.cloneNode(true));

    confirmDeleteBtn = document.getElementById('confirmDeleteBtn');
    confirmDeleteBtn.addEventListener('click', async () => {
      const msgCards = document.querySelectorAll('.message-card');
      if (!msgCards.length) {
        showAlert('error', 'No messages to delete');
        return;
      }
      confirmDeleteBtn.disabled = true;
      confirmDeleteBtn.textContent = 'Deleting...';

      const overlay = document.getElementById('loadingAnim');
      overlay.classList.add('d-flex');

      confirmDeleteModal.hide();

      const deleteStatus = await deleteAllMsgs();

      if (deleteStatus) {
        loadTabMessages('received');
      } else {
        showAlert('error', 'Could not delete messages');
        overlay.classList.remove('d-flex');
      }

      confirmDeleteBtn.disabled = false;
      confirmDeleteBtn.textContent = 'Delete';
    });
  });

  // Sort Messages
  document.getElementById('sort').addEventListener('change', function () {
    loadTabMessages('received');
  });

  loadTabMessages('received');

  document.getElementById('received-tab').addEventListener('click', () => {
    loadTabMessages('received');
  });

  document.getElementById('fav-tab').addEventListener('click', () => {
    loadTabMessages('favourite');
  });
}

function attachCopyEvents() {
  let copyBtns = document.querySelectorAll('.copy-btn');

  copyBtns.forEach((btn) => {
    btn.replaceWith(btn.cloneNode(true));
  });

  copyBtns = document.querySelectorAll('.copy-btn');
  copyBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      navigator.clipboard.writeText(btn.dataset.text);
      btn.innerHTML = '<i class="fas fa-check text-success"></i> Copied!';
      setTimeout(
        () => (btn.innerHTML = '<i class="far fa-copy"></i> Copy'),
        1500,
      );
    });
  });
}

function attachFavouriteEvents() {
  let favouriteForms = document.querySelectorAll('.fav-form');
  favouriteForms.forEach((form) => {
    form.replaceWith(form.cloneNode(true));
  });

  favouriteForms = document.querySelectorAll('.fav-form');
  favouriteForms.forEach((form) => {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      const msgId = form.dataset.msgid;

      const toggleStatus = await toggleFavourite({ msgId });
      if (toggleStatus) {
        const icon = form.querySelector('i');
        icon.style.color =
          icon.style.color === 'rgb(241, 196, 15)' ? '#b8b8b8' : '#f1c40f';
      } else {
        showAlert('error', 'Could not update favourite status');
      }
    });
  });
}

function attachDeleteMsgEvents(type) {
  let deleteForms = document.querySelectorAll('.form--deleteonemsg');
  deleteForms.forEach((form) => {
    form.replaceWith(form.cloneNode(true));
  });

  deleteForms = document.querySelectorAll('.form--deleteonemsg');
  deleteForms.forEach((form) => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const confirmDeleteModal = new bootstrap.Modal(
        document.getElementById('confirmDeleteModal'),
      );
      confirmDeleteModal.show();

      let confirmDeleteBtn = document.getElementById('confirmDeleteBtn');
      confirmDeleteBtn.replaceWith(confirmDeleteBtn.cloneNode(true));

      confirmDeleteBtn = document.getElementById('confirmDeleteBtn');
      confirmDeleteBtn.addEventListener('click', async () => {
        const msgId = form.dataset.msgid;
        const card = form.closest('.message-card');

        card
          .querySelectorAll('button')
          .forEach((btn) => (btn.disabled = true));
        const originalText = confirmDeleteBtn.textContent;
        const deleteBtn = card.querySelector('.btn-delete');
        deleteBtn.textContent = 'Deleting...';
        confirmDeleteBtn.disabled = true;

        card.classList.add('removing');
        confirmDeleteModal.hide();

        const deleteStatus = await deleteOneMsg({ msgId });

        if (!deleteStatus) {
          card.classList.remove('removing');
          confirmDeleteBtn.textContent = originalText;
          confirmDeleteBtn.disabled = false;
          card
            .querySelectorAll('button')
            .forEach((btn) => (btn.disabled = false));
          deleteBtn.textContent = 'Delete';
          return;
        }

        card.remove();

        const countEls = document.querySelectorAll('#msgs-count');
        const countEl = type === 'favourite' ? countEls[1] : countEls[0];
        setTimeout(() => {
          const newCount = +countEl.textContent - 1;

          countEl.textContent = newCount;

          if (newCount === 0) {
            loadTabMessages(type);
          }
        }, 280);

        confirmDeleteBtn.textContent = originalText;
        confirmDeleteBtn.disabled = false;
      });
    });
  });
}

async function loadTabMessages(type) {
  const sortValue = document.getElementById('sort').value;
  const tabEl = document.getElementById(type);
  const overlay = document.getElementById('loadingAnim');
  const ctrls = document.getElementById('received-ctrls');

  ctrls.classList.toggle('d-none', type !== 'received');
  ctrls.classList.toggle('d-flex', type === 'received');

  overlay.classList.add('d-flex');

  try {
    const res = await fetch(`/messages?tab=${type}&sort=${sortValue}`);
    const html = await res.text();

    tabEl.innerHTML = html;

    attachFavouriteEvents();
    attachCopyEvents();
    attachDeleteMsgEvents(type);
  } catch (err) {
    showAlert('error', 'Could not load messages. Please try again later.');
  } finally {
    overlay.classList.remove('d-flex');
  }
}
