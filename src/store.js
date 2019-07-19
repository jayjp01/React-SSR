// import { applyMiddleware, createStore } from "redux";
// import rootReducer from "./reducers";
// import reduxThunk from "redux-thunk";

// export default createStore(rootReducer, {}, applyMiddleware(reduxThunk));




import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from "./reducers";
import createSagaMiddleware from 'redux-saga'
import { watchAge } from "./sagas/saga";
import sagasManager from "./utils/sagasManager";

const sagaMiddleware = createSagaMiddleware()
const isProd = process.env.NODE_ENV === 'production'
let composeEnhancers = compose
if (!isProd && (typeof window !== 'undefined') && window) {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
}
export default function configureStore(initialState) {
  let finalCreateStore
  if (isProd) {
    finalCreateStore = composeEnhancers(applyMiddleware(sagaMiddleware))(
      createStore
    )
  } else {
    finalCreateStore = composeEnhancers(
      applyMiddleware(sagaMiddleware)
      // window.devToolsExtension ? window.devToolsExtension() : f => f
    )(createStore)
  }

  const store = finalCreateStore(rootReducer, initialState)
  sagaMiddleware.run(sagasManager.getRootSaga());
  return store
}