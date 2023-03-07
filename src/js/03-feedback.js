import throttle from 'lodash.throttle';
const STORAGE_KEY = 'feedback-form-state';
const feedbackForm = document.querySelector('.feedback-form');
const selectedDataForms = {};

populateDataForm();

feedbackForm.addEventListener('submit', evt => {
  evt.preventDefault();

  const formData = new FormData(feedbackForm);
  formData.forEach((value, name) => {
    console.log(value, name);
  });
  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
});
feedbackForm.addEventListener('input', evt => {
  selectedDataForms[evt.target.name] = evt.target.value.trim();
  console.log(selectedDataForms);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(selectedDataForms));
});

function populateDataForm() {
  let persistedDatas = localStorage.getItem(STORAGE_KEY);
  if (persistedDatas) {
    persistedDatas = JSON.parse(persistedDatas);
    Object.entries(persistedDatas).forEach(([email, message]) => {
      selectedDataForms[email] = message;
      feedbackForm.elements[email].value = message;
    });
  }
}
