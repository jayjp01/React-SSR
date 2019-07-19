import { delay } from "redux-saga";
import { takeLatest, put, call } from "redux-saga/effects";
import { REQUEST_COUNTRIES } from '../action/countries'

import { fetchCountries, fetchNews } from "./saga";

export default function* rootSaga() {
  yield takeLatest("GET_NEWS/GET", fetchNews)
  yield takeLatest(REQUEST_COUNTRIES, fetchCountries);
}
