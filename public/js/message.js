/* eslint-disable */

import showAlert from './alerts';

const baseUrl = '/api/v1/messages/';

const sendMsg = async (body) => {
  try {
    const response = await fetch(baseUrl, {
      method: 'POST',
      body,
    });

    const dataSend = await response.json();
    if (!response.ok) {
      throw new Error(dataSend.message || 'Something went wrong');
    }

    showAlert('success', 'Your message sent successfully');
    return true;
  } catch (err) {
    showAlert('error', err.message);
    return false;
  }
};

const toggleFavourite = async (body) => {
  try {
    const { msgId } = body;
    const response = await fetch(`/api/v1/users/messages/favourite/${msgId}`, {
      method: 'PATCH',
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

const deleteOneMsg = async (body) => {
  try {
    const { msgId } = body;
    const response = await fetch(`${baseUrl}${msgId}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      const errData = await response.json();
      throw new Error(errData.message || 'Something went wrong');
    }
    return true;
  } catch (err) {
    showAlert('error', err.message);
    return false;
  }
};

const deleteAllMsgs = async () => {
  try {
    const response = await fetch(baseUrl, {
      method: 'DELETE',
    });

    if (!response.ok) {
      const errData = await response.json();
      throw new Error(errData.message || 'Something went wrong');
    }
    showAlert('success', 'All messages deleted successfully');
    return true;
  } catch (err) {
    showAlert('error', err.message);
    return false;
  }
};

export { sendMsg, toggleFavourite, deleteOneMsg, deleteAllMsgs };
