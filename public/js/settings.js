/*eslint-disable*/

import showAlert from './alerts.js';

const baseUrl = '/api/v1/users/me/';

const updateUserData = async (body) => {
  const { name, allowMessages, showLastSeen } = body;
  const response = await fetch(baseUrl, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, allowMessages, showLastSeen }),
  });
  return response;
};

const updateUserPassword = async (body) => {
  const { currentPassword, password, passwordConfirm } = body;
  const response = await fetch(`${baseUrl}update-password`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ currentPassword, password, passwordConfirm }),
  });
  return response;
};

const updateSettings = async (body, type) => {
  try {
    const response =
      type === 'data'
        ? await updateUserData(body)
        : await updateUserPassword(body);
    const dataSend = await response.json();
    if (!response.ok) {
      throw new Error(dataSend.message || 'Something went wrong');
    }
    showAlert(
      'success',
      `${type.toUpperCase()} was updated successfully!`,
    );
    return true;
  } catch (err) {
    if (err.message.includes('ref')) {
      showAlert('error', 'Password and confirmation do not match');
    } else {
      showAlert('error', err.message);
    }
    return false;
  }
};

const deleteAccount = async () => {
  try {
    const response = await fetch(baseUrl, {
      method: 'DELETE',
    });
    if (!response.ok) {
      const errData = await response.json();
      throw new Error(errData.message || 'Something went wrong');
    }
    showAlert('success', `Your account was deleted successfully!`);
    return true;
  } catch (err) {
    showAlert('error', err.message);
    return false;
  }
};

const handleOneImage = async (method, photo = null) => {
  try {
    let formData;
    if (photo) {
      formData = new FormData();
      formData.append('avatar', photo);
    }
    const response = await fetch(`${baseUrl}photo`, {
      method,
      body: method === 'PATCH' ? formData : null,
    });
    const dataSend = await response.json();
    if (!response.ok) {
      throw new Error(dataSend.message || 'Something went wrong');
    }
    showAlert('success', dataSend.message);
    return true;
  } catch (err) {
    showAlert('error', err.message);
    return false;
  }
};

export { updateSettings, handleOneImage, deleteAccount };
