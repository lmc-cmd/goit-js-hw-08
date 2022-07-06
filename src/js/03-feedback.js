'use strict';

import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
formEl.addEventListener('input', throttle(onFormRecord, 500));
formEl.addEventListener('submit', onSubmitForm);

const formData = {};

function onFormRecord(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function onSubmitForm(e) {
  // console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
  e.preventDefault();
  e.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
}

(function recordsFromLocalStorage() {
  const data = JSON.parse(localStorage.getItem('feedback-form-state'));
  console.dir(data);
  const email = document.querySelector('.feedback-form input');
  const message = document.querySelector('.feedback-form textarea');

  data.email ? (email.value = data.email) : (email.value = ``);
  data.message ? (message.value = data.message) : (message.messagevalue = ``);
})();
