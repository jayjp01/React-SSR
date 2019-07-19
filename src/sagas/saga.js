import { delay } from "redux-saga";
import { takeLatest, put, call, all } from "redux-saga/effects";
import sagasManager from "../../src/utils/sagasManager";
import axios from 'axios'
import {
  ON_AGE_UP,
  ON_AGE_DOWN,
  ON_AGE_UP_ASYNC,
  ON_AGE_DOWN_ASYNC,
  LOGIN_API_CALL,
  getNewesSuccess,
  getNewesError,
  setLogin
} from "../../src/action/newes.js";

import {
  REQUEST_COUNTRIES,
  RECEIVE_COUNTRIES,
  RECEIVE_COUNTRY,
  REQUEST_COUNTRY,
  ROOT
} from "../../src/action/countries";

const BASE_URL = 'http://localhost:5000';
var LATEST = "https://newsapi.org/v2/top-headlines?country=in&apiKey=015289d55d1747abb049212dc2a4566f"
let ENTERTAINEMENT = "https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=015289d55d1747abb049212dc2a4566f"
let SPORTS = "https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=015289d55d1747abb049212dc2a4566f"

export function* fetchCountries(action) {

  console.log('ayaa')
  try {
    const response = yield call(axios.get, `${ROOT}/all`);
    const data = response.data
    //console.log(data)
    yield put({ type: RECEIVE_COUNTRIES, payload: data })
  } catch (error) {
    console.log(error)
    yield put({ type: RECEIVE_COUNTRIES, payload: [] })
  }
}

function* fetchCountrie(action) {
  try {
    const response = yield call(axios.get, `${ROOT}/name/${action.name}`);
    const data = response.data
    yield put({ type: RECEIVE_COUNTRY, payload: data[0] })
  } catch (error) {
    console.log(error)
    yield put({ type: RECEIVE_COUNTRY, payload: {} })
  }
}

export function* fetchNews(action) {
  try {
    let URL = "";
    if (action.category === 'entertainment') {
      URL = ENTERTAINEMENT;
    } else if (action.category === 'sports') {
      URL = SPORTS;
    } else {
      URL = LATEST
    }
    const response = yield call(axios.get, URL)
    if (response.status === 200) {
      const data = response.data
      yield put(getNewesSuccess(data))
    } else {
      yield put(getNewesError('Some error'))
    }
  } catch (error) {
    console.log(error)
    yield put(getNewesError(error))
  }

}

function* doLogin(action) {
  try {
    const response = yield call(axios.post, `${BASE_URL}/api/auth`, { name: action.data.name, password: action.data.password })
    if (response.status === 200) {
      const data = response.data
      //localStorage.setItem('x-access-token', data.token);
      //localStorage.setItem('x-access-token-expiration', Date.now() + 2 * 60 * 60 * 1000);
      yield put(setLogin(data))
    } else {
      yield put(getNewesError('Some error'))
    }
  } catch (error) {
    console.log(error)
    yield put(getNewesError(error))
  }

}
sagasManager.addSagaToRoot(function* searchWatcher() {
  yield all([
    yield takeLatest(REQUEST_COUNTRIES, fetchCountries),
    yield takeLatest(REQUEST_COUNTRY, fetchCountrie),
    yield takeLatest("GET_NEWS/GET", fetchNews),
    yield takeLatest(LOGIN_API_CALL, doLogin)
  ]);
});
