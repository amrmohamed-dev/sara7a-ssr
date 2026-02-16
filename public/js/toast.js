/* eslint-disable */

function showToast(type, message) {
  const isError = type === 'error';

  const icon = isError ? '!' : '✓';

  Toastify({
    text: `
      <div class="toast-content">
        <div class="toast-icon">${icon}</div>
        <div class="toast-text">${String(message ?? '')}</div>
      </div>
    `,
    duration: isError ? 4000 : 3500,
    gravity: 'top',
    position: 'right',
    close: true,
    escapeMarkup: false,
    stopOnFocus: false,
    className: isError ? 'app-toast--error' : 'app-toast--success',
    offset: {
      y: 40,
    },
  }).showToast();
}

export default showToast;
