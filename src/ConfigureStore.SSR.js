import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware, { END } from "redux-saga";
import rootReducer from "./reducers";

export default function configureStore(initialState) {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(sagaMiddleware)
  );

  store.runSaga = sagaMiddleware.run;
  store.close = () => store.dispatch(END);
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept("./reducers/", () => {
      const nextReducer = reducer;
      store.replaceReducer(nextReducer);
    });
  }
  return store;
}
