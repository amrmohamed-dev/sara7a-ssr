/*eslint-disable*/
import showAlert from './alerts.js';

const baseUrl = 'http://localhost:3000/api/v1/';

const register = async (body) => {
  try {
    const { username, name, email, password, passwordConfirm } = body;
    const response = await fetch(`${baseUrl}auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        name,
        email,
        password,
        passwordConfirm,
      }),
    });

    const dataSend = await response.json();
    if (!response.ok) {
      throw new Error(dataSend.message || 'Something went wrong');
    }

    showAlert('success', dataSend.message);
    setTimeout(() => {
      location.assign('/messages');
    }, 2500);
  } catch (err) {
    showAlert('error', err.message);
  }
};

const login = async (body) => {
  try {
    const { email, password } = body;
    const response = await fetch(`${baseUrl}auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const dataSend = await response.json();
    if (!response.ok) {
      throw new Error(dataSend.message || 'Something went wrong');
    }

    showAlert('success', dataSend.message);
    setTimeout(() => {
      location.assign('/messages');
    }, 2500);
  } catch (err) {
    showAlert('error', err.message);
  }
};

const logout = async () => {
  try {
    const response = await fetch(`${baseUrl}auth/logout`);
    if (!response.ok) {
      const errData = await response.json();
      throw new Error(errData.message || 'Something went wrong');
    }
    location.assign('/');
  } catch (err) {
    showAlert('error', err.message);
  }
};

export { register, login, logout };
