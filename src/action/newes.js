export const ON_AGE_UP = `AGE_UP`
export const ON_AGE_DOWN = `AGE_DOWN`
export const ON_AGE_UP_ASYNC = `AGE_UP_ASYNC`
export const ON_AGE_DOWN_ASYNC = `AGE_DOWN_ASYNC`
export const GET_NEWS = `GET_NEWS/GET`
export const NEWS_RECEIVED = `NEWS_RECEIVED/SET`
export const NEWS_RECEIVED_ERROR = `NEWS_RECEIVED_ERROR`
export const LOGIN_API_CALL = `LOGIN_API_CALL/POST`
export const LOGIN_SUCESSFULL = `LOGIN_API_CALL/SET`

export const onAgeUp = () => ({
  type: ON_AGE_UP,
  value: 1
});

export const onAgeDown = () => ({
  type: ON_AGE_DOWN,
  value: 1
});

export const getNewesSuccess = (data) => ({
  type: NEWS_RECEIVED,
  data
});

export const getNewesError = (error) => ({
  type: NEWS_RECEIVED_ERROR,
  error
});

export const getNewes = (category) => ({
  type: GET_NEWS,
  category
});

export const doLogin = (data) => ({
  type: LOGIN_API_CALL,
  data
});

export const setLogin = (data) => ({
  type: LOGIN_SUCESSFULL,
  data
});
