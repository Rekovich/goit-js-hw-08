// Відстежуй на формі подію input, і щоразу записуй у локальне сховище об'єкт з полями email і message, у яких зберігай поточні значення
// полів форми. Нехай ключем для сховища буде рядок "feedback-form-state".
// Під час завантаження сторінки перевіряй стан сховища, і якщо там є збережені дані, заповнюй ними поля форми. В іншому випадку поля
// повинні бути порожніми.
// Під час сабміту форми очищуй сховище і поля форми, а також виводь у консоль об'єкт з полями email, message та їхніми поточними значеннями.
// Зроби так, щоб сховище оновлювалось не частіше, ніж раз на 500 мілісекунд. Для цього додай до проекту і використовуй бібліотеку
// lodash.throttle.

import { throttle } from 'lodash';

const form = document.querySelector('.feedback-form');
const email = document.querySelector('[name="email"]');
const message = document.querySelector('[name="message"]');

const formData = {email: '', message: ''};

loadData();
form.addEventListener('input', throttle(setData, 500));

function setData(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function loadData() {
  const data = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (data) {
    data.email ? (formData.email = data.email) : (formData.email = '');
    data.message ? (formData.message = data.message) : (formData.message = ''); 
  }
  email.value = formData.email;
  message.value = formData.message;
}

form.addEventListener('submit', onSubmitForm);

function onSubmitForm(event) {
  event.preventDefault();

  if (email.value === '' || message.value === '') {
    alert('Будь ласка, заповніть всі поля');
  } else {
    event.target.reset();
    console.log(formData);
    localStorage.removeItem('feedback-form-state');
    formData.email = '';
    formData.message = '';
  }
}
