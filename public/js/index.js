/* eslint-disable */

import { login, register, logout } from './auth.js';

const registerForm = document.querySelector('.form--register');
const loginForm = document.querySelector('.form--login');
const logoutBtn = document.querySelector('.nav__el--logout');
const copyBtn = document.getElementById('copyBtn');

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
