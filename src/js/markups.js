
//   fn to create country card markup

  export function createCountryСard({ flags, name, capital, population, languages }) {
    return `
      <div class="country-info__container">
        <div class="country-info__wrapper">
          <img class="country-info__flag" src="${flags.svg}" alt="${name.official}" width="75" />
          <h2 class="country-info__name">${name.official}</h2>
        </div>
        <ul class="country-info__list">
        <li class="country-info__list-item"><span class="country-info__list-span">Capital:</span> ${capital}</li>
        <li class="country-info__list-item"><span class="country-info__list-span">Population:</span> ${population}</li>
        <li class="country-info__list-item"><span class="country-info__list-span">Languages:</span> ${Object.values(languages)}</li>
        <ul>
      </div>
    `;

  }

//   fn to create country list markup
  
  export function createCountryList({ flags, name }) {
    return `
    <li class="country-list__item">
      <img class="country-list__flags" src="${flags.svg}" alt="${name.official}" width="50"/>
      <h2 class="country-list__name">${name.official}</h2>
    </li>
    `
  };

//   adding refs

  export const refs = {
    searchBox: document.getElementById('search-box'),
    countryList: document.querySelector('ul.country-list'),
    countryInfo: document.querySelector('div.country-info'),
  };