// import React from 'react';
// import { hydrate } from 'react-dom';
// import Router from './router';
// import { Provider } from 'react-redux';
// import store from './store';
// import '../scss/main.scss';

// hydrate(
//   <Provider store={store}>
//     <Router />
//   </Provider>,
//   document.querySelector('#root')
// );


import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import Router from './router';
import { Provider } from 'react-redux';
import configureStore from './store';
import '../scss/main.scss';

const store = configureStore()

hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);