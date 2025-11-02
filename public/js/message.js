/* eslint-disable */

import showAlert from './alerts';

const baseUrl = '/api/v1/messages/';

const sendMsg = async (body) => {
  try {
    const { text, receiver } = body;
    const response = await fetch(baseUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        text,
        receiver,
      }),
    });

    const dataSend = await response.json();
    if (!response.ok) {
      throw new Error(dataSend.message || 'Something went wrong');
    }

    showAlert('success', 'Your message sent successfully');
  } catch (err) {
    showAlert('error', err.message);
  }
};

export { sendMsg };
