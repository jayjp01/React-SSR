import axios from 'axios';

export const ROOT = 'https://restcountries.eu/rest/v2';

export const REQUEST_COUNTRIES = 'REQUEST_COUNTRIES';
export const RECEIVE_COUNTRIES = 'RECEIVE_COUNTRIES';


export const REQUEST_COUNTRY = 'REQUEST_COUNTRY';
export const RECEIVE_COUNTRY = 'RECEIVE_COUNTRY';


// export const fetchCountries = () => async dispatch => {
//   try {
//     dispatch({ type: REQUEST_COUNTRIES });
//     const res = await axios.get(`${ROOT}/all`);
//     dispatch({ type: RECEIVE_COUNTRIES, payload: res.data });
//   } catch(e) {
//     console.log(e);
//     dispatch({ type: RECEIVE_COUNTRIES, payload: [] });
//   }
// };


// export const fetchCountry = name => async dispatch => {
//   try {
//     dispatch({ type: REQUEST_COUNTRY });
//     const res = await axios.get(`${ROOT}/name/${name}`);
//     dispatch({ type: RECEIVE_COUNTRY, payload: res.data[0] });
//   } catch (e) {
//     console.log(e);
//     dispatch({ type: RECEIVE_COUNTRY, payload: {} });
//   }
// };

export const fetchCountries = () => ({
  type: REQUEST_COUNTRIES
});

export const fetchCountry = (name) => ({
  type: REQUEST_COUNTRY,
  name
});


