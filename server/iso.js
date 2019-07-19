import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import Routes from '../src/router/index';
import rootSagas from "../src/sagas/rootSagas";
import configureStore from "../src/ConfigureStore.SSR";
import html from "./html";
import { END } from "redux-saga"
export function handleRouter(req, res) {
  const store = configureStore();
  let body;
  const renderBody = () => {
    return (
      <Provider store={store}>
        <StaticRouter location={req.url} context={{ location: req.headers.host }}>
          <Routes />
        </StaticRouter>
      </Provider>
    )
  }
  const rootTask = store.runSaga(rootSagas)
  rootTask.done.then(() => {
    body = renderToString(renderBody());
    res.send(html.lateChunk(body, store.getState(), req.headers.host))

  }).catch((e) => {
    console.log(e.message)

  })
  // store
  //   .runSaga(rootSagas)
  //   .done.then(() => {
  //     // 2nd render hydration
  //     const context = {};
  //     body = renderToString(renderBody());
  //     const app = html.lateChunk(body, store.getState(), req.headers.host);
  //     res.set('Content-Type', 'text/html');
  //     res.end(app);
  //   })
  //   .catch(e => {
  //     console.log(e.message);
  //     res.status(500).send(e.message);
  //   });

  // 1st render - will be used to show shimmer
  renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url} context={{ location: req.headers.host }}>
        <Routes />
      </StaticRouter>
    </Provider>
  );

  store.close();
}
export function isoMiddleware(req, res) {
  handleRouter(req, res);
}