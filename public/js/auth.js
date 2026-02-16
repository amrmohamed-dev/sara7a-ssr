/*eslint-disable*/
import showToast from './toast.js';

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

    showToast('success', dataSend.message);
    return true;
  } catch (err) {
    showToast('error', err.message);
    return false;
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

    showToast('success', dataSend.message);
    return true;
  } catch (err) {
    showToast('error', err.message);
    return false;
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
    showToast('error', err.message);
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
    if (!response.ok) {
      throw new Error(dataSend.message);
    }
    showToast('success', dataSend.message);
    return true;
  } catch (err) {
    showToast('error', err.message);
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
    showToast('success', dataSend.message);
    return true;
  } catch (err) {
    showToast('error', err.message);
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
    showToast('success', dataSend.message);
    return true;
  } catch (err) {
    showToast('error', err.message);
    return false;
  }
};

const verifyEmail = async (body) => {
  try {
    const { otp } = body;
    const response = await fetch(`${baseUrl}verify-email`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ otp }),
    });
    const dataSend = await response.json();
    if (!response.ok) {
      throw new Error(dataSend.message);
    }
    showToast('success', dataSend.message);
    setTimeout(() => location.reload(), 1500);
  } catch (err) {
    showToast('error', err.message);
  }
};

export { register, login, logout, sendOtp, verifyOtp, resetPassword, verifyEmail };
