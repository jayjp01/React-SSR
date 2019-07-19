
import {
  ON_AGE_UP,
  ON_AGE_DOWN,
  ON_AGE_UP_ASYNC,
  ON_AGE_DOWN_ASYNC,
  GET_NEWS,
  NEWS_RECEIVED,
  LOGIN_SUCESSFULL
} from "../action/newes";


const initialState = {
  categories: 'latest',
  loading: true
};

const reducer = (state = { ...initialState }, action) => {

  switch (action.type) {
    case ON_AGE_UP_ASYNC:
      state.age += action.value;
      return { ...state }

    case ON_AGE_DOWN_ASYNC:
      state.age -= action.value;
      return { ...state }

    case GET_NEWS:
      state.categories = action.category;
      return { ...state, loading: true }

    case NEWS_RECEIVED:
      return { ...state, news: action.data, loading: false }

    case LOGIN_SUCESSFULL:
      return { ...state, loginResponse: action.data, loading: false }
    default:
      return { ...state };
  }

};

export default reducer;

