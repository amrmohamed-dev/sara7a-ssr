/* eslint-disable */

const hideAlert = () => {
  const el = document.querySelector('.alert');
  if (el) el.parentElement.removeChild(el);
};

// Type is 'success' or 'error'
const showAlert = (type, msg) => {
  hideAlert();

  const markup = `<div class="alert alert--${type}">${msg}</div>`;
  document.querySelector('body').insertAdjacentHTML('afterbegin', markup);
  setTimeout(hideAlert, 5000);
};

const alertBox = document.getElementById('verifyAlert');
if (alertBox) {
  alertBox.querySelector('.close-alert').addEventListener('click', () => {
    alertBox.style.display = 'none';
  });
}

export default showAlert;
