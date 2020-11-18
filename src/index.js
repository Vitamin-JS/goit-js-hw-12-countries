import './css/styles.css';
import fetchCountriesAPI from './js/fetchCountries.js';
import countryMarkup from './hbs/country-name.hbs';
import coumtriesListMarkup from './hbs/country-card.hbs';
import debounce from 'lodash.debounce';
import { info, error } from '@pnotify/core';