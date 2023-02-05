import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');
const formData = {};

const onFormInput = event => {
  formData[event.target.name] = event.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
};

const restoreForm = () => {
  let storageData = localStorage.getItem(STORAGE_KEY);
  if (storageData) {
    storageData = JSON.parse(storageData);
    form.elements.email.value = storageData.email ? storageData.email : '';
    form.elements.message.value = storageData.message
      ? storageData.message
      : '';
  }
};

const onFormSubmit = event => {
  event.preventDefault();

  const submitData = {};
  submitData.email = event.target.elements.email.value;
  submitData.message = event.target.elements.message.value;
  console.log(submitData);

  event.target.reset();
  formData.email = '';
  formData.message = '';
  localStorage.removeItem(STORAGE_KEY);
};

restoreForm();
form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);
