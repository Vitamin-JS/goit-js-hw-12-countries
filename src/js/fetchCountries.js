const BASE_URL = 'https://restcountries.eu/rest/v2/name';  //https://restcountries.eu/rest/v2/name

function fetchCountries(country) {
    return fetch(`${BASE_URL}/${country}`).then(response => { return response.json(); })
};

export default { fetchCountries };

// console.log(fetchCountries());
