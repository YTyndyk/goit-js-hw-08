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
  localStorage.removeItem('feedback-form-state');
});
feedbackForm.addEventListener('input', evt => {
  selectedDataForms[evt.target.name] = evt.target.value;
  console.log(selectedDataForms);
  localStorage.setItem(
    'feedback-form-state',
    JSON.stringify(selectedDataForms)
  );
});

function populateDataForm() {
  let persistedDatas = localStorage.getItem('feedback-form-state');
  if (persistedDatas) {
    persistedDatas = JSON.parse(persistedDatas);
    Object.entries(persistedDatas).forEach(([email, message]) => {
      selectedDataForms[email] = message;
      feedbackForm.elements[email].value = message;
    });
  }
}
