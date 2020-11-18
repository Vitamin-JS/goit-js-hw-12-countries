import './css/styles.css';
import fetchCountriesAPI from './js/fetchCountries.js';
import foundCountriesList from './hbs/countries-list.hbs';
import countryCardMarkup from './hbs/country-card.hbs';
import debounce from 'lodash.debounce';
import { info, error } from '@pnotify/core';  //  Проверить info =====================

const cardContainer = document.querySelector('.js-card-container');
const inputField = document.querySelector('.input-field');

inputField.addEventListener('input', debounce(onSearch, 500));

function onSearch() {
    cardContainer.innerHTML = "";
    const countryForSearch = inputField.value;

    if (countryForSearch === "") return;

    fetchCountriesAPI.fetchCountries(countryForSearch).then(isFetchSucces).catch(isFetchError)
};

function renderCardMarkup(template, counrty) {
    const markup = template(counrty);
    cardContainer.insertAdjacentHTML('beforeend', markup);
};

function isFetchSucces(value) {
    if (value.length === 1) { renderCardMarkup(countryCardMarkup, value[0]) }  //  Убрать []   скобки ============================================
    else if (value.length > 1 && value.length <= 10) { renderCardMarkup(foundCountriesList, value) }
    else if (value.length > 10) { ManyMatchesAlarm() }
    else { isFetchError() };
};

function ManyMatchesAlarm() {
    error({
        title: 'Too many results were found',
        text: 'Please enter correct country name',
        delay: 3000,
        width: '600px',
    })
};

function isFetchError() {
    error({
        title: 'You entered invalid country name ',
        text: 'Please enter correct country name',
        delay: 2000,
        width: '600px',
    })
};
