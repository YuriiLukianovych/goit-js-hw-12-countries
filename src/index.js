import './css/styles.css';
import { fetchCountries } from './js/fetchCountries';
import countriesListTpl from './templates/list-template.hbs';
import countryCardTpl from './templates/country-card-template.hbs';

const DEBOUNCE_DELAY = 300;

// получить ссылки на элементы DOM
const refs = {
   searchInput: document.querySelector('#search-box'),
   countryList: document.querySelector('.country-list'),
   countryInfoBlock: document.querySelector('.country-info'),
};

console.log(refs.searchInput, refs.countryList, refs.countryInfoBlock);

fetchCountries().then(result => {
   console.log(result[236]);
   // getCountriesList(result);
   getCountryCard(result[0]);
});

function getCountriesList(resp) {
   refs.countryList.innerHTML = '';
   const markup = countriesListTpl(resp);
   refs.countryList.innerHTML = markup;
}
function getCountryCard(resp) {
   refs.countryInfoBlock.innerHTML = '';
   const markup = countryCardTpl(resp);
   refs.countryInfoBlock.innerHTML = markup;
}
