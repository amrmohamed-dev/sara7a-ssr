/*eslint-disable*/
import showAlert from './alerts.js';

const baseUrl = '/api/v1/auth/';

const register = async (body) => {
  try {
    const { username, name, email, password, passwordConfirm } = body;
    const response = await fetch(`${baseUrl}register`, {
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
    }, 2000);
  } catch (err) {
    showAlert('error', err.message);
  }
};

const login = async (body) => {
  try {
    const { email, password } = body;
    const response = await fetch(`${baseUrl}login`, {
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
    }, 1500);
  } catch (err) {
    showAlert('error', err.message);
  }
};

const logout = async () => {
  try {
    const response = await fetch(`${baseUrl}logout`);
    if (!response.ok) {
      const errData = await response.json();
      throw new Error(errData.message || 'Something went wrong');
    }
    location.assign('/login');
  } catch (err) {
    showAlert('error', err.message);
  }
};

const sendOtp = async (body) => {
  try {
    const { email, purpose } = body;
    const response = await fetch(`${baseUrl}send-otp/${purpose}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });
    const dataSend = await response.json();
    if (!response.ok && purpose === 'Password Recovery') {
      throw new Error(dataSend.message);
    }
    showAlert('success', dataSend.message);
    return true;
  } catch (err) {
    showAlert('error', err.message);
    return false;
  }
};

const verifyOtp = async (body) => {
  try {
    const { email, otp, purpose } = body;
    const response = await fetch(`${baseUrl}verify-otp/${purpose}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, otp, purpose }),
    });
    const dataSend = await response.json();
    if (!response.ok) {
      throw new Error(dataSend.message);
    }
    showAlert('success', dataSend.message);
    return true;
  } catch (err) {
    showAlert('error', err.message);
    return false;
  }
};

const resetPassword = async (body) => {
  try {
    const { email, otp, password, passwordConfirm } = body;
    const response = await fetch(`${baseUrl}reset-password`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, otp, password, passwordConfirm }),
    });
    const dataSend = await response.json();
    if (!response.ok) {
      throw new Error(dataSend.message);
    }
    showAlert('success', dataSend.message);
    setTimeout(() => location.assign('/'), 1500);
  } catch (err) {
    showAlert('error', err.message);
  }
};

export { register, login, sendOtp, verifyOtp, resetPassword, logout };
