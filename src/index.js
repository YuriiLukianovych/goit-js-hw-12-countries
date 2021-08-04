import './css/styles.css';

const DEBOUNCE_DELAY = 300;

const searchInput = document.querySelector('#search-box');
const countryList = document.querySelector('.country-list');
const countryInfoBlock = document.querySelector('.country-info');
console.log(searchInput, countryList, countryInfoBlock);

// функция, которая делает запрос на сервер и возвращает промис с ответом
function fetchCountries() {
   return fetch(
      'https://restcountries.eu/rest/v2/all?fields=name;capital;population;flag;languages',
   ).then(response => {
      if (!response.ok) {
         throw new Error(response.status);
      }
      return response.json();
   });
}
fetchCountries().then(res => {
   console.log(res[236].flag);
});
// ====================================================================================
// ЗАГОТОВКИ:

// fetch('https://jsonplaceholder.typicode.com/users')
//    .then(response => {
//       if (!response.ok) {
//          throw new Error(response.status);
//       }
//       return response.json();
//    })
//    .then(data => {
//       // Data handling
//    })
//    .catch(error => {
//       // Error handling
//    });

//  пример  параметов запроса
// const searchParams = new URLSearchParams({
//   _limit: 5,
//   _sort: "name",
// });

// console.log(searchParams.toString()); // "_limit=5&_sort=name"

// const url = `https://jsonplaceholder.typicode.com/users?${searchParams}`;
// console.log(url); // "https://jsonplaceholder.typicode.com/users?_limit=5&_sort=name"
