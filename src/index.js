// import dependencies

import './css/styles.css';
import { fetchCountries } from './js/fetchCountries';
import { createCountryСard, createCountryList } from './js/markups';
import { refs } from './js/markups';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import debounce from 'lodash.debounce';

// adding refs for index-file

const DEBOUNCE_DELAY = 300;
refs.searchBox.addEventListener('input', debounce(onInputCountry, DEBOUNCE_DELAY));

// fn to catch country on input

function onInputCountry() {
  const inputCountryName = (refs.searchBox.value).trim();
  const countryList = refs.countryList;
  const countryInfo = refs.countryInfo;

  if (inputCountryName === '') {
    return;
  }

  fetchCountries(inputCountryName)
    .then(countries => {
      if (countries.length > 10) {
        Notify.info('Too many matches found. Please enter a more specific name.');
        return;
      }

      if (countries.length <= 10) {
        const countryListMarkup = countries.map(country => createCountryList(country)).join('');

        countryList.innerHTML = countryListMarkup;
        countryInfo.innerHTML = '';
      }

      if (countries.length === 1) {
        const countryInfoMarkup = countries.map(country => createCountryСard(country)).join('');

        countryList.innerHTML = '';
        countryInfo.innerHTML = countryInfoMarkup;
      }
    })
    .catch(error => {
      Notify.failure('Oops, there is no country with that name');;
      return error;
    });
}