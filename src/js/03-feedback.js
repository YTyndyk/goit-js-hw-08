import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
const feedbackForm = document.querySelector('.feedback-form');

populateDataForm();

feedbackForm.addEventListener('submit', onFormSubmit);
feedbackForm.addEventListener('input', throttle(onInputData, 500));

function onFormSubmit(evt) {
  evt.preventDefault();
  const { email, message } = feedbackForm.elements;

  if (email.value === '' || message.value === '') {
    return alert('Не всі поля заповнені!');
  } else {
    console.log({ email: email.value, message: message.value });
  }

  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function onInputData(evt) {
  let persistedDatas = localStorage.getItem(STORAGE_KEY);
  persistedDatas = persistedDatas ? JSON.parse(persistedDatas) : {};
  persistedDatas[evt.target.name] = evt.target.value.trim();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(persistedDatas));
}

function populateDataForm() {
  let persistedDatas = localStorage.getItem(STORAGE_KEY);
  if (persistedDatas) {
    persistedDatas = JSON.parse(persistedDatas);
    Object.entries(persistedDatas).forEach(([email, message]) => {
      feedbackForm.elements[email].value = message;
    });
  }
}
