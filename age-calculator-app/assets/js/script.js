const dayInput = document.querySelector('#day');
const monthInput = document.querySelector('#month');
const yearInput = document.querySelector('#year');
const daysResult = document.querySelector('#daysResult');
const monthsResult = document.querySelector('#monthsResult');
const yearsResult = document.querySelector('#yearsResult');
const form = document.querySelector('#form');
const dayError = document.querySelector('.day-error');
const monthError = document.querySelector('.month-error');
const yearError = document.querySelector('.year-error');

let currentDate = new Date();
let currentDay = currentDate.getDate();
let currentMonth = currentDate.getMonth() + 1;
let currentYear = currentDate.getFullYear();

function dateIsValid() {
  let numOfDaysAtMonth = new Date(Number(yearInput.value), Number(monthInput.value), 0).getDate();

  if(dayInput.value > numOfDaysAtMonth) {
    dayError.innerHTML = 'Must be a valid day'
    dayInput.previousElementSibling.classList.add('error-label');
    monthInput.previousElementSibling.classList.add('error-label');
    yearInput.previousElementSibling.classList.add('error-label');
    dayInput.classList.add('error-input');
    monthInput.classList.add('error-input');
    yearInput.classList.add('error-input');
    return false;
  } else {
    dayInput.previousElementSibling.classList.remove('error-label');
    monthInput.previousElementSibling.classList.remove('error-label');
    yearInput.previousElementSibling.classList.remove('error-label');
    dayInput.classList.remove('error-input');
    monthInput.classList.remove('error-input');
    yearInput.classList.remove('error-input');
    return true;
  }
}

function yearIsValid() {
  if(yearInput.value.trim() === '') {
    yearInput.previousElementSibling.classList.add('error-label');
    yearInput.classList.add('error-input');
    yearError.innerHTML = 'This field is required';
    return false;
  } else if(yearInput.value > currentYear) {
    yearInput.previousElementSibling.classList.add('error-label');
    yearInput.classList.add('error-input');
    yearError.innerHTML = 'Must be in the past';
    return false;
  } else {
    yearInput.previousElementSibling.classList.remove('error-label');
    yearInput.classList.remove('error-input');
    yearError.innerHTML = '';
    return true;
  }
}
 
function monthIsValid() {
  if(monthInput.value.trim() === '') {
    monthInput.previousElementSibling.classList.add('error-label');
    monthInput.classList.add('error-input');
    monthError.innerHTML = 'This field is required';
    return false;
  } else if (monthInput.value < 1 || monthInput.value > 12) {
    monthInput.previousElementSibling.classList.add('error-label');
    monthInput.classList.add('error-input');
    monthError.innerHTML = 'Must be a valid month';
    return false;
  } else {
    monthInput.previousElementSibling.classList.remove('error-label');
    monthInput.classList.remove('error-input');
    monthError.innerHTML = '';
    return true;
  }
}

function dayIsValid() {
  if(dayInput.value.trim() === '') {
    dayInput.previousElementSibling.classList.add('error-label');
    dayInput.classList.add('error-input');
    dayError.innerHTML = 'This field is required';
    return false
  } else if(dayInput.value < 1 || dayInput.value > 31) {
    dayInput.previousElementSibling.classList.add('error-label');
    dayInput.classList.add('error-input');
    dayError.innerHTML = 'Must be a valid day';
    return false;
  } else {
    dayInput.previousElementSibling.classList.remove('error-label');
    dayInput.classList.remove('error-input');
    dayError.innerHTML = '';
    return true;
  }
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    dateIsValid();
    dayIsValid();
    monthIsValid();
    yearIsValid();
  
    if(dayIsValid() && yearIsValid() && monthIsValid() && dateIsValid()) {
      let year = currentYear - Number(yearInput.value);
      let month = currentMonth - Number(monthInput.value);
      let day = currentDay - Number(dayInput.value); 
  
      if(day < 0) {
        month -= 1;
        const daysInPreviousMonth = new Date(Number(yearInput.value), Number(monthInput.value) - 1, 0).getDate();
        day += daysInPreviousMonth;
      }
  
      if(month < 0) {
        year--;
        month += 12;
      }
  
      yearsResult.innerHTML = year;
      monthsResult.innerHTML = month;
      daysResult.innerHTML = day;  
    } 
});


