import './css/styles.css';
import fetchCountriesAPI from './js/fetchCountries.js';
import countryMarkup from './hbs/country.hbs';
import coumtriesListMarkup from './hbs/countries-list.hbs';
import debounce from 'lodash.debounce';
import { info, error } from '@pnotify/core';