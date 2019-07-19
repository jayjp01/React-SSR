/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./server/html.js":
/*!************************!*\
  !*** ./server/html.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* eslint-disable */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  lateChunk: function lateChunk(app, initialState, url) {\n    return \"\\n    <!DOCTYPE html>\\n      <html lang=\\\"en\\\">\\n      <head>\\n        <meta charset=\\\"UTF-8\\\">\\n        <title>Title</title>\\n      </head>\\n      <body>\\n\\n      <div id=\\\"app\\\">\" + app + \"</div>\\n      <script>window.__INITIAL_STATE__ = \" + JSON.stringify(initialState) + \"</script>\\n      <script src=\\\"dist/bundle.js\\\"></script>\\n      </body>\\n      </html>\";\n  }\n});\n\n//# sourceURL=webpack:///./server/html.js?");

/***/ }),

/***/ "./server/index.js":
/*!*************************!*\
  !*** ./server/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./render */ \"./server/render.js\");\n/* harmony import */ var _src_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/store */ \"./src/store.js\");\n/* harmony import */ var _src_router_Routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/router/Routes */ \"./src/router/Routes.js\");\n/* harmony import */ var _iso__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./iso */ \"./server/iso.js\");\n/* harmony import */ var _renderHtml__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./renderHtml */ \"./server/renderHtml.js\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\n\n\n\n\nvar brotli = __webpack_require__(/*! brotli */ \"brotli\");\nvar PORT = process.env.PORT || 8079;\nvar app = express__WEBPACK_IMPORTED_MODULE_0___default()();\n\napp.use('/dist', express__WEBPACK_IMPORTED_MODULE_0___default.a.static('dist'));\napp.use(check());\napp.use('/img', express__WEBPACK_IMPORTED_MODULE_0___default.a.static('img'));\n// brotli.compress(fs.readFileSync('dist/bundle.js'), {mode: 0, quality: 11, lgwin: 22 });\napp.use(_iso__WEBPACK_IMPORTED_MODULE_5__[\"isoMiddleware\"]);\n// app.get('*', async (req, res) => {\n//   const store = configureStore()\n//   const actions = matchRoutes(Routes, req.path).map(({ route }) => {\n//     route.component.fetching ? route.component.fetching(store) : null\n//   })\n//   // .map(async actions => await Promise.all(\n//   //   (actions || []).map(p => p && new Promise(resolve => p.then(resolve).catch(resolve)))\n//   // )\n//   // );\n//   console.log(actions);\n//   await Promise.all(actions);\n//   const context = {};\n//   const content = render(req.path, store, context);\n\n//   res.send(content);\n// });\n\nfunction check() {\n\tbrotli.compress(fs__WEBPACK_IMPORTED_MODULE_7___default.a.readFileSync('dist/bundle.js'), { mode: 0, quality: 11, lgwin: 22 });\n}\n\napp.listen(PORT, function () {\n\treturn console.log('Frontend service listening on port: ' + PORT);\n});\n\n//# sourceURL=webpack:///./server/index.js?");

/***/ }),

/***/ "./server/iso.js":
/*!***********************!*\
  !*** ./server/iso.js ***!
  \***********************/
/*! exports provided: handleRouter, isoMiddleware */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"handleRouter\", function() { return handleRouter; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isoMiddleware\", function() { return isoMiddleware; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _src_router_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/router/index */ \"./src/router/index.js\");\n/* harmony import */ var _src_sagas_rootSagas__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/sagas/rootSagas */ \"./src/sagas/rootSagas.js\");\n/* harmony import */ var _src_ConfigureStore_SSR__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/ConfigureStore.SSR */ \"./src/ConfigureStore.SSR.js\");\n/* harmony import */ var _html__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./html */ \"./server/html.js\");\n/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! redux-saga */ \"redux-saga\");\n/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_9__);\n\n\n\n\n\n\n\n\n\n\nfunction handleRouter(req, res) {\n  var store = Object(_src_ConfigureStore_SSR__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\n  var body = void 0;\n  var renderBody = function renderBody() {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n      react_redux__WEBPACK_IMPORTED_MODULE_2__[\"Provider\"],\n      { store: store },\n      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n        react_router_dom__WEBPACK_IMPORTED_MODULE_3__[\"StaticRouter\"],\n        { location: req.url, context: { location: req.headers.host } },\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_router_index__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null)\n      )\n    );\n  };\n  var rootTask = store.runSaga(_src_sagas_rootSagas__WEBPACK_IMPORTED_MODULE_6__[\"default\"]);\n  rootTask.done.then(function () {\n    body = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_1__[\"renderToString\"])(renderBody());\n    res.send(_html__WEBPACK_IMPORTED_MODULE_8__[\"default\"].lateChunk(body, store.getState(), req.headers.host));\n  }).catch(function (e) {\n    console.log(e.message);\n  });\n  // store\n  //   .runSaga(rootSagas)\n  //   .done.then(() => {\n  //     // 2nd render hydration\n  //     const context = {};\n  //     body = renderToString(renderBody());\n  //     const app = html.lateChunk(body, store.getState(), req.headers.host);\n  //     res.set('Content-Type', 'text/html');\n  //     res.end(app);\n  //   })\n  //   .catch(e => {\n  //     console.log(e.message);\n  //     res.status(500).send(e.message);\n  //   });\n\n  // 1st render - will be used to show shimmer\n  Object(react_dom_server__WEBPACK_IMPORTED_MODULE_1__[\"renderToString\"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n    react_redux__WEBPACK_IMPORTED_MODULE_2__[\"Provider\"],\n    { store: store },\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n      react_router_dom__WEBPACK_IMPORTED_MODULE_3__[\"StaticRouter\"],\n      { location: req.url, context: { location: req.headers.host } },\n      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_router_index__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null)\n    )\n  ));\n\n  store.close();\n}\nfunction isoMiddleware(req, res) {\n  handleRouter(req, res);\n}\n\n//# sourceURL=webpack:///./server/iso.js?");

/***/ }),

/***/ "./server/render.js":
/*!**************************!*\
  !*** ./server/render.js ***!
  \**************************/
/*! exports provided: handleRouter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"handleRouter\", function() { return handleRouter; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _src_router_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/router/index */ \"./src/router/index.js\");\n/* harmony import */ var _src_sagas_rootSagas__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/sagas/rootSagas */ \"./src/sagas/rootSagas.js\");\n/* harmony import */ var _src_ConfigureStore_SSR__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/ConfigureStore.SSR */ \"./src/ConfigureStore.SSR.js\");\n/* harmony import */ var _html__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./html */ \"./server/html.js\");\n/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! redux-saga */ \"redux-saga\");\n/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_9__);\n\n\n\n\n\n\n\n\n\n\n\nfunction handleRouter(req, res) {\n  var store = Object(_src_ConfigureStore_SSR__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\n  var body = void 0;\n  var renderBody = function renderBody() {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n      react_redux__WEBPACK_IMPORTED_MODULE_2__[\"Provider\"],\n      { store: store },\n      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n        react_router_dom__WEBPACK_IMPORTED_MODULE_3__[\"StaticRouter\"],\n        { location: req.url, context: { location: req.headers.host } },\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_router_index__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null)\n      )\n    );\n  };\n\n  var rootTask = store.runSaga(rootSaga);\n  body = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_1__[\"renderToString\"])(renderBody());\n  //store.dispatch(END)\n  console.log(rootTask);\n  // rootTask.done.then(() => {\n  //   res.send(renderHtmlDocument(html.lateChunk(body, store.getState(), req.headers.host)))\n\n  // }).catch((e) => {\n  //   console.log(e.message)\n\n  // })\n\n  // store\n  //   .runSaga(rootSagas)\n  //   .done.then(() => {\n  //     // 2nd render hydration\n  //     const context = {};\n  //     body = renderToString(renderBody());\n  //     const app = html.lateChunk(body, store.getState(), req.headers.host);\n  //     res.set('Content-Type', 'text/html');\n  //     res.end(app);\n  //   })\n  //   .catch(e => {\n  //     console.log(e.message);\n  //     res.status(500).send(e.message);\n  //   });\n\n  // 1st render - will be used to show shimmer\n  Object(react_dom_server__WEBPACK_IMPORTED_MODULE_1__[\"renderToString\"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n    react_redux__WEBPACK_IMPORTED_MODULE_2__[\"Provider\"],\n    { store: store },\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n      react_router_dom__WEBPACK_IMPORTED_MODULE_3__[\"StaticRouter\"],\n      { location: req.url, context: { location: req.headers.host } },\n      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_router_index__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null)\n    )\n  ));\n\n  store.close();\n}\n\n//# sourceURL=webpack:///./server/render.js?");

/***/ }),

/***/ "./server/renderHtml.js":
/*!******************************!*\
  !*** ./server/renderHtml.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _src_router_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/router/index */ \"./src/router/index.js\");\n\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (pathname, store, context) {\n  var content = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_1__[\"renderToString\"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n    react_redux__WEBPACK_IMPORTED_MODULE_2__[\"Provider\"],\n    { store: store },\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n      react_router_dom__WEBPACK_IMPORTED_MODULE_3__[\"StaticRouter\"],\n      { location: pathname, context: context },\n      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n        'div',\n        null,\n        Object(react_router_config__WEBPACK_IMPORTED_MODULE_4__[\"renderRoutes\"])(_src_router_index__WEBPACK_IMPORTED_MODULE_5__[\"default\"])\n      )\n    )\n  ));\n\n  return '\\n  <!DOCTYPE html>\\n      <html lang=\"en\">\\n      <head>\\n        <meta charset=\"UTF-8\">\\n        <title>Title</title>\\n      </head>\\n      <body>\\n      \\n      <div id=\"app\">' + content + '</div>\\n      <script>\\n        window.INITIAL_STATE = ' + JSON.stringify(store.getState()) + '\\n      </script>\\n      <script src=\"dist/bundle.js\"></script>\\n      </body>\\n      </html>\\n  ';\n});\n\n//# sourceURL=webpack:///./server/renderHtml.js?");

/***/ }),

/***/ "./src/ConfigureStore.SSR.js":
/*!***********************************!*\
  !*** ./src/ConfigureStore.SSR.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return configureStore; });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga */ \"redux-saga\");\n/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducers */ \"./src/reducers/index.js\");\n\n\n\n\nfunction configureStore(initialState) {\n  var sagaMiddleware = redux_saga__WEBPACK_IMPORTED_MODULE_1___default()();\n  var store = Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"createStore\"])(_reducers__WEBPACK_IMPORTED_MODULE_2__[\"default\"], initialState, Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"applyMiddleware\"])(sagaMiddleware));\n\n  store.runSaga = sagaMiddleware.run;\n  store.close = function () {\n    return store.dispatch(redux_saga__WEBPACK_IMPORTED_MODULE_1__[\"END\"]);\n  };\n  if (false) {}\n  return store;\n}\n\n//# sourceURL=webpack:///./src/ConfigureStore.SSR.js?");

/***/ }),

/***/ "./src/action/countries.js":
/*!*********************************!*\
  !*** ./src/action/countries.js ***!
  \*********************************/
/*! exports provided: ROOT, REQUEST_COUNTRIES, RECEIVE_COUNTRIES, REQUEST_COUNTRY, RECEIVE_COUNTRY, fetchCountries, fetchCountry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ROOT\", function() { return ROOT; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"REQUEST_COUNTRIES\", function() { return REQUEST_COUNTRIES; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RECEIVE_COUNTRIES\", function() { return RECEIVE_COUNTRIES; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"REQUEST_COUNTRY\", function() { return REQUEST_COUNTRY; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RECEIVE_COUNTRY\", function() { return RECEIVE_COUNTRY; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchCountries\", function() { return fetchCountries; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchCountry\", function() { return fetchCountry; });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar ROOT = 'https://restcountries.eu/rest/v2';\n\nvar REQUEST_COUNTRIES = 'REQUEST_COUNTRIES';\nvar RECEIVE_COUNTRIES = 'RECEIVE_COUNTRIES';\n\nvar REQUEST_COUNTRY = 'REQUEST_COUNTRY';\nvar RECEIVE_COUNTRY = 'RECEIVE_COUNTRY';\n\n// export const fetchCountries = () => async dispatch => {\n//   try {\n//     dispatch({ type: REQUEST_COUNTRIES });\n//     const res = await axios.get(`${ROOT}/all`);\n//     dispatch({ type: RECEIVE_COUNTRIES, payload: res.data });\n//   } catch(e) {\n//     console.log(e);\n//     dispatch({ type: RECEIVE_COUNTRIES, payload: [] });\n//   }\n// };\n\n\n// export const fetchCountry = name => async dispatch => {\n//   try {\n//     dispatch({ type: REQUEST_COUNTRY });\n//     const res = await axios.get(`${ROOT}/name/${name}`);\n//     dispatch({ type: RECEIVE_COUNTRY, payload: res.data[0] });\n//   } catch (e) {\n//     console.log(e);\n//     dispatch({ type: RECEIVE_COUNTRY, payload: {} });\n//   }\n// };\n\nvar fetchCountries = function fetchCountries() {\n  return {\n    type: REQUEST_COUNTRIES\n  };\n};\n\nvar fetchCountry = function fetchCountry(name) {\n  return {\n    type: REQUEST_COUNTRY,\n    name: name\n  };\n};\n\n//# sourceURL=webpack:///./src/action/countries.js?");

/***/ }),

/***/ "./src/action/newes.js":
/*!*****************************!*\
  !*** ./src/action/newes.js ***!
  \*****************************/
/*! exports provided: ON_AGE_UP, ON_AGE_DOWN, ON_AGE_UP_ASYNC, ON_AGE_DOWN_ASYNC, GET_NEWS, NEWS_RECEIVED, NEWS_RECEIVED_ERROR, LOGIN_API_CALL, LOGIN_SUCESSFULL, onAgeUp, onAgeDown, getNewesSuccess, getNewesError, getNewes, doLogin, setLogin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ON_AGE_UP\", function() { return ON_AGE_UP; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ON_AGE_DOWN\", function() { return ON_AGE_DOWN; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ON_AGE_UP_ASYNC\", function() { return ON_AGE_UP_ASYNC; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ON_AGE_DOWN_ASYNC\", function() { return ON_AGE_DOWN_ASYNC; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GET_NEWS\", function() { return GET_NEWS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NEWS_RECEIVED\", function() { return NEWS_RECEIVED; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NEWS_RECEIVED_ERROR\", function() { return NEWS_RECEIVED_ERROR; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOGIN_API_CALL\", function() { return LOGIN_API_CALL; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOGIN_SUCESSFULL\", function() { return LOGIN_SUCESSFULL; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"onAgeUp\", function() { return onAgeUp; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"onAgeDown\", function() { return onAgeDown; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getNewesSuccess\", function() { return getNewesSuccess; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getNewesError\", function() { return getNewesError; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getNewes\", function() { return getNewes; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"doLogin\", function() { return doLogin; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setLogin\", function() { return setLogin; });\nvar ON_AGE_UP = \"AGE_UP\";\nvar ON_AGE_DOWN = \"AGE_DOWN\";\nvar ON_AGE_UP_ASYNC = \"AGE_UP_ASYNC\";\nvar ON_AGE_DOWN_ASYNC = \"AGE_DOWN_ASYNC\";\nvar GET_NEWS = \"GET_NEWS/GET\";\nvar NEWS_RECEIVED = \"NEWS_RECEIVED/SET\";\nvar NEWS_RECEIVED_ERROR = \"NEWS_RECEIVED_ERROR\";\nvar LOGIN_API_CALL = \"LOGIN_API_CALL/POST\";\nvar LOGIN_SUCESSFULL = \"LOGIN_API_CALL/SET\";\n\nvar onAgeUp = function onAgeUp() {\n  return {\n    type: ON_AGE_UP,\n    value: 1\n  };\n};\n\nvar onAgeDown = function onAgeDown() {\n  return {\n    type: ON_AGE_DOWN,\n    value: 1\n  };\n};\n\nvar getNewesSuccess = function getNewesSuccess(data) {\n  return {\n    type: NEWS_RECEIVED,\n    data: data\n  };\n};\n\nvar getNewesError = function getNewesError(error) {\n  return {\n    type: NEWS_RECEIVED_ERROR,\n    error: error\n  };\n};\n\nvar getNewes = function getNewes(category) {\n  return {\n    type: GET_NEWS,\n    category: category\n  };\n};\n\nvar doLogin = function doLogin(data) {\n  return {\n    type: LOGIN_API_CALL,\n    data: data\n  };\n};\n\nvar setLogin = function setLogin(data) {\n  return {\n    type: LOGIN_SUCESSFULL,\n    data: data\n  };\n};\n\n//# sourceURL=webpack:///./src/action/newes.js?");

/***/ }),

/***/ "./src/action/types.js":
/*!*****************************!*\
  !*** ./src/action/types.js ***!
  \*****************************/
/*! exports provided: ROOT, REQUEST_COUNTRIES, RECEIVE_COUNTRIES, REQUEST_COUNTRY, RECEIVE_COUNTRY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ROOT\", function() { return ROOT; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"REQUEST_COUNTRIES\", function() { return REQUEST_COUNTRIES; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RECEIVE_COUNTRIES\", function() { return RECEIVE_COUNTRIES; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"REQUEST_COUNTRY\", function() { return REQUEST_COUNTRY; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RECEIVE_COUNTRY\", function() { return RECEIVE_COUNTRY; });\nvar ROOT = 'https://restcountries.eu/rest/v2';\n\nvar REQUEST_COUNTRIES = 'REQUEST_COUNTRIES';\nvar RECEIVE_COUNTRIES = 'RECEIVE_COUNTRIES';\n\nvar REQUEST_COUNTRY = 'REQUEST_COUNTRY';\nvar RECEIVE_COUNTRY = 'RECEIVE_COUNTRY';\n\n//# sourceURL=webpack:///./src/action/types.js?");

/***/ }),

/***/ "./src/common/Loading.js":
/*!*******************************!*\
  !*** ./src/common/Loading.js ***!
  \*******************************/
/*! exports provided: Loading */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Loading\", function() { return Loading; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar Loading = function Loading() {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n    \"div\",\n    { className: \"container\" },\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n      \"div\",\n      { className: \"loading-container\" },\n      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", { src: \"../../img/loading.svg\", alt: \"\" })\n    )\n  );\n};\n\n//# sourceURL=webpack:///./src/common/Loading.js?");

/***/ }),

/***/ "./src/common/index.js":
/*!*****************************!*\
  !*** ./src/common/index.js ***!
  \*****************************/
/*! exports provided: Loading */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Loading__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Loading */ \"./src/common/Loading.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Loading\", function() { return _Loading__WEBPACK_IMPORTED_MODULE_0__[\"Loading\"]; });\n\n\n\n//# sourceURL=webpack:///./src/common/index.js?");

/***/ }),

/***/ "./src/components/Common/Card.js":
/*!***************************************!*\
  !*** ./src/components/Common/Card.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Card */ \"@material-ui/core/Card\");\n/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/CardActionArea */ \"@material-ui/core/CardActionArea\");\n/* harmony import */ var _material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/CardActions */ \"@material-ui/core/CardActions\");\n/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/CardContent */ \"@material-ui/core/CardContent\");\n/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/CardMedia */ \"@material-ui/core/CardMedia\");\n/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Button */ \"@material-ui/core/Button\");\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Typography */ \"@material-ui/core/Typography\");\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Grid */ \"@material-ui/core/Grid\");\n/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__);\n\n\n\n\n\n\n\n\n\n\n\n\nvar styles = {\n  card: {\n    maxWidth: 345\n  },\n  media: {\n    // ⚠️ object-fit is not supported by IE 11.\n    objectFit: 'cover'\n  }\n};\n\nfunction ImgMediaCard(props) {\n  var classes = props.classes,\n      loading = props.loading,\n      articles = props.articles;\n\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n    'div',\n    { style: { padding: 30 } },\n    !loading && loading !== undefined && articles.articles.map(function (i) {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n        _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10___default.a,\n        { container: true, spacing: 24 },\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n          _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10___default.a,\n          { item: true, md: 12 },\n          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n            _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_3___default.a,\n            { className: classes.card },\n            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n              _material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_4___default.a,\n              null,\n              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_7___default.a, {\n                component: 'img',\n                alt: 'Contemplative Reptile',\n                className: classes.media,\n                height: '140',\n                image: i.urlToImage,\n                title: 'Contemplative Reptile'\n              }),\n              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_6___default.a,\n                null,\n                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                  _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9___default.a,\n                  { gutterBottom: true, variant: 'h5', component: 'h2' },\n                  i.title\n                ),\n                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                  _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9___default.a,\n                  { component: 'p' },\n                  i.description\n                )\n              )\n            ),\n            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n              _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_5___default.a,\n              null,\n              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8___default.a,\n                { size: 'small', color: 'primary' },\n                'Share'\n              ),\n              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8___default.a,\n                { size: 'small', color: 'primary' },\n                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                  'a',\n                  { href: i.url, target: '_blank' },\n                  'READ MORE'\n                )\n              )\n            )\n          )\n        )\n      );\n    })\n  );\n}\n\nImgMediaCard.propTypes = {\n  classes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__[\"withStyles\"])(styles)(ImgMediaCard));\n\n//# sourceURL=webpack:///./src/components/Common/Card.js?");

/***/ }),

/***/ "./src/components/Common/Loading.js":
/*!******************************************!*\
  !*** ./src/components/Common/Loading.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _loading_spinner_gif__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loading_spinner.gif */ \"./src/components/Common/loading_spinner.gif\");\n/* harmony import */ var _loading_spinner_gif__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_loading_spinner_gif__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nvar Laoading = function Laoading(_ref) {\n  var loading = _ref.loading;\n\n  return loading ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n    'div',\n    { style: { textAlign: 'center' } },\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('img', { src: _loading_spinner_gif__WEBPACK_IMPORTED_MODULE_2___default.a, alt: 'loading' }),\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n      'h1',\n      null,\n      'LOADING'\n    )\n  ) : null;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Laoading);\n\n//# sourceURL=webpack:///./src/components/Common/Loading.js?");

/***/ }),

/***/ "./src/components/Common/loading_spinner.gif":
/*!***************************************************!*\
  !*** ./src/components/Common/loading_spinner.gif ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"data:image/gif;base64,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\"\n\n//# sourceURL=webpack:///./src/components/Common/loading_spinner.gif?");

/***/ }),

/***/ "./src/components/Countries/CountriesItem.js":
/*!***************************************************!*\
  !*** ./src/components/Countries/CountriesItem.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (_ref) {\n  var name = _ref.name,\n      flag = _ref.flag,\n      capital = _ref.capital,\n      population = _ref.population;\n\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n    react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"NavLink\"],\n    { to: '/' + name, className: 'countries-item' },\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('img', { src: flag, alt: '' }),\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n      'div',\n      { className: 'countries-item-data' },\n      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n        'h4',\n        null,\n        name\n      ),\n      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n        'span',\n        null,\n        capital\n      ),\n      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n        'span',\n        null,\n        population,\n        ' pop.'\n      )\n    )\n  );\n});\n\n//# sourceURL=webpack:///./src/components/Countries/CountriesItem.js?");

/***/ }),

/***/ "./src/components/Countries/index.js":
/*!*******************************************!*\
  !*** ./src/components/Countries/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _action_countries__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../action/countries */ \"./src/action/countries.js\");\n/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common */ \"./src/common/index.js\");\n/* harmony import */ var _CountriesItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CountriesItem */ \"./src/components/Countries/CountriesItem.js\");\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n\n\n\n\n\n\nvar Countries = function (_Component) {\n  _inherits(Countries, _Component);\n\n  function Countries(props) {\n    _classCallCheck(this, Countries);\n\n    var _this = _possibleConstructorReturn(this, (Countries.__proto__ || Object.getPrototypeOf(Countries)).call(this, props));\n\n    props.fetchCountries();\n\n    return _this;\n  }\n\n  _createClass(Countries, [{\n    key: 'render',\n    value: function render() {\n      var _props$countries = this.props.countries,\n          isFetching = _props$countries.isFetching,\n          data = _props$countries.data;\n\n\n      if (isFetching) {\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common__WEBPACK_IMPORTED_MODULE_3__[\"Loading\"], null);\n      }\n\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n        'div',\n        { className: 'container' },\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n          'div',\n          { className: 'countries-container' },\n          data.map(function (item, i) {\n            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CountriesItem__WEBPACK_IMPORTED_MODULE_4__[\"default\"], _extends({ key: i }, item));\n          })\n        )\n      );\n    }\n  }]);\n\n  return Countries;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\n;\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    countries: state.countries\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(mapStateToProps, {\n  fetchCountries: _action_countries__WEBPACK_IMPORTED_MODULE_2__[\"fetchCountries\"]\n})(Countries));\n\n//# sourceURL=webpack:///./src/components/Countries/index.js?");

/***/ }),

/***/ "./src/components/Country/index.js":
/*!*****************************************!*\
  !*** ./src/components/Country/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _action_countries__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../action/countries */ \"./src/action/countries.js\");\n/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common */ \"./src/common/index.js\");\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n\n\n\n\n\nvar Country = function (_Component) {\n  _inherits(Country, _Component);\n\n  function Country() {\n    _classCallCheck(this, Country);\n\n    return _possibleConstructorReturn(this, (Country.__proto__ || Object.getPrototypeOf(Country)).apply(this, arguments));\n  }\n\n  _createClass(Country, [{\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      this.props.fetchCountry(this.props.match.params.name);\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _props$country = this.props.country,\n          isFetching = _props$country.isFetching,\n          flag = _props$country.flag,\n          name = _props$country.name,\n          nativeName = _props$country.nativeName,\n          capital = _props$country.capital,\n          region = _props$country.region,\n          population = _props$country.population,\n          languages = _props$country.languages;\n\n\n      if (isFetching) {\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common__WEBPACK_IMPORTED_MODULE_3__[\"Loading\"], null);\n      }\n\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n        'div',\n        { className: 'container' },\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n          'div',\n          { className: 'country-container' },\n          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('img', { src: flag, alt: '' }),\n          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n            'div',\n            { className: 'country-data' },\n            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n              'div',\n              { className: 'country-data-item' },\n              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                'span',\n                null,\n                'Name: '\n              ),\n              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                'span',\n                null,\n                name\n              )\n            ),\n            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n              'div',\n              { className: 'country-data-item' },\n              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                'span',\n                null,\n                'NativeName: '\n              ),\n              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                'span',\n                null,\n                nativeName\n              )\n            ),\n            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n              'div',\n              { className: 'country-data-item' },\n              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                'span',\n                null,\n                'Capital: '\n              ),\n              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                'span',\n                null,\n                capital\n              )\n            ),\n            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n              'div',\n              { className: 'country-data-item' },\n              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                'span',\n                null,\n                'Region: '\n              ),\n              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                'span',\n                null,\n                region\n              )\n            ),\n            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n              'div',\n              { className: 'country-data-item' },\n              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                'span',\n                null,\n                'Population: '\n              ),\n              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                'span',\n                null,\n                population\n              )\n            )\n          ),\n          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('hr', null),\n          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n            'div',\n            { className: 'languages-container' },\n            languages.map(function (item, i) {\n              return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                'span',\n                { key: i },\n                item.name\n              );\n            })\n          )\n        )\n      );\n    }\n  }]);\n\n  return Country;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    country: state.country\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(mapStateToProps, { fetchCountry: _action_countries__WEBPACK_IMPORTED_MODULE_2__[\"fetchCountry\"] })(Country));\n\n//# sourceURL=webpack:///./src/components/Country/index.js?");

/***/ }),

/***/ "./src/components/Header/Modal.js":
/*!****************************************!*\
  !*** ./src/components/Header/Modal.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Button */ \"@material-ui/core/Button\");\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Dialog */ \"@material-ui/core/Dialog\");\n/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/DialogTitle */ \"@material-ui/core/DialogTitle\");\n/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/DialogContent */ \"@material-ui/core/DialogContent\");\n/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/DialogActions */ \"@material-ui/core/DialogActions\");\n/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/IconButton */ \"@material-ui/core/IconButton\");\n/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/Close */ \"@material-ui/icons/Close\");\n/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Typography */ \"@material-ui/core/Typography\");\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__);\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n\n\n\n\n\n\n\n\n\n\n\nvar DialogTitle = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__[\"withStyles\"])(function (theme) {\n  return {\n    root: {\n      borderBottom: '1px solid ' + theme.palette.divider,\n      margin: 0,\n      padding: theme.spacing.unit * 2\n    },\n    closeButton: {\n      position: 'absolute',\n      right: theme.spacing.unit,\n      top: theme.spacing.unit,\n      color: theme.palette.grey[500]\n    }\n  };\n})(function (props) {\n  var children = props.children,\n      classes = props.classes,\n      onClose = props.onClose;\n\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n    _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_4___default.a,\n    { disableTypography: true, className: classes.root },\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n      _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9___default.a,\n      { variant: 'h6' },\n      children\n    ),\n    onClose ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n      _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7___default.a,\n      { 'aria-label': 'Close', className: classes.closeButton, onClick: onClose },\n      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_8___default.a, null)\n    ) : null\n  );\n});\n\nvar DialogContent = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__[\"withStyles\"])(function (theme) {\n  return {\n    root: {\n      margin: 0,\n      padding: theme.spacing.unit * 2\n    }\n  };\n})(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_5___default.a);\n\nvar DialogActions = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__[\"withStyles\"])(function (theme) {\n  return {\n    root: {\n      borderTop: '1px solid ' + theme.palette.divider,\n      margin: 0,\n      padding: theme.spacing.unit\n    }\n  };\n})(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_6___default.a);\n\nvar CustomizedDialogDemo = function (_React$Component) {\n  _inherits(CustomizedDialogDemo, _React$Component);\n\n  function CustomizedDialogDemo() {\n    var _ref;\n\n    var _temp, _this, _ret;\n\n    _classCallCheck(this, CustomizedDialogDemo);\n\n    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = CustomizedDialogDemo.__proto__ || Object.getPrototypeOf(CustomizedDialogDemo)).call.apply(_ref, [this].concat(args))), _this), _this.state = {\n      open: true\n    }, _this.handleClickOpen = function () {\n      _this.setState({\n        open: true\n      });\n    }, _this.handleClose = function () {\n      _this.setState({ open: false });\n    }, _temp), _possibleConstructorReturn(_this, _ret);\n  }\n\n  _createClass(CustomizedDialogDemo, [{\n    key: 'componentWillReceiveProps',\n    value: function componentWillReceiveProps(nextProps) {\n      if (nextProps.open) {\n        this.setState({\n          open: true\n        });\n      }\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n        'div',\n        null,\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n          _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_3___default.a,\n          {\n            onClose: this.handleClose,\n            'aria-labelledby': 'customized-dialog-title',\n            open: this.state.open\n          },\n          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n            DialogTitle,\n            { id: 'customized-dialog-title', onClose: this.handleClose },\n            'Modal title'\n          ),\n          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n            DialogContent,\n            null,\n            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n              _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9___default.a,\n              { gutterBottom: true },\n              'Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.'\n            ),\n            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n              _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9___default.a,\n              { gutterBottom: true },\n              'Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.'\n            ),\n            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n              _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9___default.a,\n              { gutterBottom: true },\n              'Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.'\n            )\n          ),\n          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n            DialogActions,\n            null,\n            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n              _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default.a,\n              { onClick: this.handleClose, color: 'primary' },\n              'Save changes'\n            )\n          )\n        )\n      );\n    }\n  }]);\n\n  return CustomizedDialogDemo;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (CustomizedDialogDemo);\n\n//# sourceURL=webpack:///./src/components/Header/Modal.js?");

/***/ }),

/***/ "./src/components/Header/SearchMenu.js":
/*!*********************************************!*\
  !*** ./src/components/Header/SearchMenu.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Paper */ \"@material-ui/core/Paper\");\n/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _material_ui_core_InputBase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/InputBase */ \"@material-ui/core/InputBase\");\n/* harmony import */ var _material_ui_core_InputBase__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_InputBase__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/IconButton */ \"@material-ui/core/IconButton\");\n/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/Search */ \"@material-ui/icons/Search\");\n/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_6__);\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n\n\n\n\n\n\n\nvar styles = function styles(theme) {\n  return {\n    root: {\n      width: '90%',\n      marginLeft: '5%',\n      marginRight: '5%'\n    }\n  };\n};\n\nvar CustomizedInputBase = function (_React$Component) {\n  _inherits(CustomizedInputBase, _React$Component);\n\n  function CustomizedInputBase() {\n    var _ref;\n\n    var _temp, _this, _ret;\n\n    _classCallCheck(this, CustomizedInputBase);\n\n    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = CustomizedInputBase.__proto__ || Object.getPrototypeOf(CustomizedInputBase)).call.apply(_ref, [this].concat(args))), _this), _this.state = {\n      inputValue: ''\n    }, _this.handleTab = function (param) {\n      return function (e) {\n        _this.setState({ inputValue: e.target.value });\n      };\n    }, _temp), _possibleConstructorReturn(_this, _ret);\n  }\n\n  _createClass(CustomizedInputBase, [{\n    key: 'render',\n    value: function render() {\n      var classes = this.props.classes;\n\n      console.log(classes);\n\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n        _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_3___default.a,\n        { className: classes.root, elevation: 1, borderColor: 'primary.main' },\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n          _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5___default.a,\n          { className: classes.iconButton, 'aria-label': 'Menu' },\n          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_6___default.a, null)\n        ),\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_InputBase__WEBPACK_IMPORTED_MODULE_4___default.a, { className: classes.input, placeholder: 'Search country based', value: this.state.inputValue, onChange: this.handleTab('sports') })\n      );\n    }\n  }]);\n\n  return CustomizedInputBase;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);\n\nCustomizedInputBase.propTypes = {\n  classes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__[\"withStyles\"])(styles)(CustomizedInputBase));\n\n//# sourceURL=webpack:///./src/components/Header/SearchMenu.js?");

/***/ }),

/***/ "./src/components/Header/Tab.js":
/*!**************************************!*\
  !*** ./src/components/Header/Tab.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/AppBar */ \"@material-ui/core/AppBar\");\n/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Tabs */ \"@material-ui/core/Tabs\");\n/* harmony import */ var _material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Tab */ \"@material-ui/core/Tab\");\n/* harmony import */ var _material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Typography */ \"@material-ui/core/Typography\");\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__);\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n\n\n\n\n\n\n\n\nfunction TabContainer(_ref) {\n  var children = _ref.children,\n      dir = _ref.dir;\n\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n    _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default.a,\n    { component: 'div', dir: dir, style: { padding: 8 * 3 } },\n    children\n  );\n}\n\nTabContainer.propTypes = {\n  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node.isRequired,\n  dir: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired\n};\n\nvar FullWidthTabs = function (_React$Component) {\n  _inherits(FullWidthTabs, _React$Component);\n\n  function FullWidthTabs() {\n    var _ref2;\n\n    var _temp, _this, _ret;\n\n    _classCallCheck(this, FullWidthTabs);\n\n    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = FullWidthTabs.__proto__ || Object.getPrototypeOf(FullWidthTabs)).call.apply(_ref2, [this].concat(args))), _this), _this.state = {\n      value: 0\n    }, _this.handleTab = function (param) {\n      return function (e) {\n        _this.setState({ 'categories': param }, function () {});\n      };\n    }, _temp), _possibleConstructorReturn(_this, _ret);\n  }\n\n  _createClass(FullWidthTabs, [{\n    key: 'componentDidUpdate',\n    value: function componentDidUpdate(prevProps, prevState) {\n      if (this.state.categories !== prevState.categories) {\n        this.props.getNewes(this.state.categories);\n      }\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _props = this.props,\n          classes = _props.classes,\n          theme = _props.theme;\n\n\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n        'div',\n        { className: classes.root },\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n          _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_3___default.a,\n          { position: 'static', color: 'default' },\n          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n            _material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_4___default.a,\n            {\n              value: this.state.value,\n              onChange: this.handleChange,\n              indicatorColor: 'primary',\n              textColor: 'primary',\n              variant: 'fullWidth',\n              tabItemContainerStyle: { position: \"fixed\", bottom: \"0\" }\n            },\n            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_5___default.a, { label: 'Latest', onClick: this.handleTab('latest') }),\n            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_5___default.a, { label: 'Entertainment', onClick: this.handleTab('entertainment') }),\n            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_5___default.a, { label: 'sports', onClick: this.handleTab('sports') })\n          )\n        )\n      );\n    }\n  }]);\n\n  return FullWidthTabs;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);\n\nFullWidthTabs.propTypes = {\n  classes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,\n  theme: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__[\"withStyles\"])({ withTheme: true })(FullWidthTabs));\n\n//# sourceURL=webpack:///./src/components/Header/Tab.js?");

/***/ }),

/***/ "./src/components/Header/index.js":
/*!****************************************!*\
  !*** ./src/components/Header/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/AppBar */ \"@material-ui/core/AppBar\");\n/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Toolbar */ \"@material-ui/core/Toolbar\");\n/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Typography */ \"@material-ui/core/Typography\");\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/IconButton */ \"@material-ui/core/IconButton\");\n/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/Menu */ \"@material-ui/icons/Menu\");\n/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/AccountCircle */ \"@material-ui/icons/AccountCircle\");\n/* harmony import */ var _material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Switch */ \"@material-ui/core/Switch\");\n/* harmony import */ var _material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/FormControlLabel */ \"@material-ui/core/FormControlLabel\");\n/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _material_ui_core_FormGroup__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/FormGroup */ \"@material-ui/core/FormGroup\");\n/* harmony import */ var _material_ui_core_FormGroup__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormGroup__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/MenuItem */ \"@material-ui/core/MenuItem\");\n/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Menu */ \"@material-ui/core/Menu\");\n/* harmony import */ var _material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Modal */ \"./src/components/Header/Modal.js\");\n/* harmony import */ var _SearchMenu__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./SearchMenu */ \"./src/components/Header/SearchMenu.js\");\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar styles = {\n  root: {\n    flexGrow: 1\n  },\n  grow: {\n    flexGrow: 1\n  },\n  headerHight: {\n    height: 114\n  },\n  menuButton: {\n    marginLeft: -12,\n    marginRight: 20\n  }\n};\n\nvar MenuAppBar = function (_React$Component) {\n  _inherits(MenuAppBar, _React$Component);\n\n  function MenuAppBar() {\n    var _ref;\n\n    var _temp, _this, _ret;\n\n    _classCallCheck(this, MenuAppBar);\n\n    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = MenuAppBar.__proto__ || Object.getPrototypeOf(MenuAppBar)).call.apply(_ref, [this].concat(args))), _this), _this.state = {\n      auth: true,\n      anchorEl: null,\n      open: true\n    }, _this.handleChange = function (event) {\n      _this.setState({ auth: event.target.checked });\n    }, _this.handleMenu = function (event) {\n      _this.setState({ anchorEl: event.currentTarget });\n    }, _this.handleClose = function () {\n      _this.setState({ anchorEl: null });\n    }, _this.handleClickOpen = function () {\n      _this.setState({\n        openModal: true\n      });\n      _this.handleClose();\n    }, _this.logOut = function () {\n      //localStorage.removeItem('x-access-token');\n      window.location.href = \"/login\";\n    }, _temp), _possibleConstructorReturn(_this, _ret);\n  }\n\n  _createClass(MenuAppBar, [{\n    key: 'componentWillReceiveProps',\n    value: function componentWillReceiveProps(nextProps) {\n      if (nextProps.LoginData && nextProps.LoginData.token) {\n        window.location.href = \"/\";\n      }\n      console.log(nextProps);\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _props = this.props,\n          classes = _props.classes,\n          heading = _props.heading;\n      var _state = this.state,\n          auth = _state.auth,\n          anchorEl = _state.anchorEl,\n          openModal = _state.openModal;\n\n      var open = Boolean(anchorEl);\n\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n        'div',\n        { className: classes.root },\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n          _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_3___default.a,\n          { position: 'static', className: classes.headerHight },\n          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n            _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_4___default.a,\n            null,\n            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n              _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_6___default.a,\n              { className: classes.menuButton, color: 'inherit', 'aria-label': 'Menu' },\n              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_7___default.a, null)\n            ),\n            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n              _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a,\n              { variant: 'h6', color: 'inherit', className: classes.grow },\n              heading\n            ),\n            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n              _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_6___default.a,\n              {\n                'aria-owns': open ? 'menu-appbar' : undefined,\n                'aria-haspopup': 'true',\n                onClick: this.handleMenu,\n                color: 'inherit'\n              },\n              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_8___default.a, null)\n            ),\n            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n              _material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_13___default.a,\n              {\n                id: 'menu-appbar',\n                anchorEl: anchorEl,\n                anchorOrigin: {\n                  vertical: 'top',\n                  horizontal: 'right'\n                },\n                transformOrigin: {\n                  vertical: 'top',\n                  horizontal: 'right'\n                },\n                open: open,\n                onClose: this.handleClose\n              },\n              auth && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                'div',\n                null,\n                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                  _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_12___default.a,\n                  { onClick: this.handleClickOpen },\n                  'Profile'\n                ),\n                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                  _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_12___default.a,\n                  { onClick: this.handleClose },\n                  'My account'\n                ),\n                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                  _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_12___default.a,\n                  { onClick: this.logOut },\n                  'Logout'\n                )\n              )\n            )\n          ),\n          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SearchMenu__WEBPACK_IMPORTED_MODULE_15__[\"default\"], null)\n        ),\n        openModal && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n          'div',\n          null,\n          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Modal__WEBPACK_IMPORTED_MODULE_14__[\"default\"], { open: openModal })\n        )\n      );\n    }\n  }]);\n\n  return MenuAppBar;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);\n\nMenuAppBar.propTypes = {\n  classes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__[\"withStyles\"])(styles)(MenuAppBar));\n\n//# sourceURL=webpack:///./src/components/Header/index.js?");

/***/ }),

/***/ "./src/pages/newes/index.js":
/*!**********************************!*\
  !*** ./src/pages/newes/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _action_newes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../action/newes */ \"./src/action/newes.js\");\n/* harmony import */ var _components_Common_Loading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../components/Common/Loading */ \"./src/components/Common/Loading.js\");\n/* harmony import */ var _components_Common_Card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../components/Common/Card */ \"./src/components/Common/Card.js\");\n/* harmony import */ var _components_Header_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../components/Header/index */ \"./src/components/Header/index.js\");\n/* harmony import */ var _components_Header_Tab__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../components/Header/Tab */ \"./src/components/Header/Tab.js\");\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n\n\n\n\n\n\n\n\nvar Search = function (_Component) {\n  _inherits(Search, _Component);\n\n  function Search(props) {\n    _classCallCheck(this, Search);\n\n    var _this = _possibleConstructorReturn(this, (Search.__proto__ || Object.getPrototypeOf(Search)).call(this, props));\n\n    props.getNewes('latest');\n\n    return _this;\n  }\n\n  _createClass(Search, [{\n    key: \"render\",\n    value: function render() {\n      var _props = this.props,\n          loading = _props.loading,\n          article = _props.article,\n          getNewes = _props.getNewes;\n\n      console.log(loading);\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n        \"div\",\n        null,\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Header_index__WEBPACK_IMPORTED_MODULE_5__[\"default\"], { heading: \"News\" }),\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Header_Tab__WEBPACK_IMPORTED_MODULE_6__[\"default\"], { getNewes: getNewes }),\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Common_Card__WEBPACK_IMPORTED_MODULE_4__[\"default\"], { loading: loading, articles: article }),\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Common_Loading__WEBPACK_IMPORTED_MODULE_3__[\"default\"], { loading: loading })\n      );\n    }\n  }]);\n\n  return Search;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    categories: state.newes.categories,\n    loading: state.newes.loading,\n    article: state.newes.news\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(mapStateToProps, {\n  onAgeUp: _action_newes__WEBPACK_IMPORTED_MODULE_2__[\"onAgeUp\"],\n  onAgeDown: _action_newes__WEBPACK_IMPORTED_MODULE_2__[\"onAgeDown\"],\n  getNewes: _action_newes__WEBPACK_IMPORTED_MODULE_2__[\"getNewes\"]\n})(Search));\n\n//# sourceURL=webpack:///./src/pages/newes/index.js?");

/***/ }),

/***/ "./src/reducers/Country.js":
/*!*********************************!*\
  !*** ./src/reducers/Country.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _action_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../action/types */ \"./src/action/types.js\");\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\n\n\nvar INITIAL_STATE = {\n  name: '',\n  nativeName: '',\n  flag: '',\n  capital: '',\n  region: '',\n  population: '',\n  languages: [],\n  isFetching: false,\n  lastUpdate: Date.now()\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;\n  var action = arguments[1];\n\n  switch (action.type) {\n    case _action_types__WEBPACK_IMPORTED_MODULE_0__[\"REQUEST_COUNTRY\"]:\n      {\n        return _extends({}, state, { isFetching: true });\n      }\n    case _action_types__WEBPACK_IMPORTED_MODULE_0__[\"RECEIVE_COUNTRY\"]:\n      {\n        return _extends({}, state, { isFetching: false }, action.payload);\n      }\n    default:\n      return state;\n  }\n});\n\n//# sourceURL=webpack:///./src/reducers/Country.js?");

/***/ }),

/***/ "./src/reducers/countries.js":
/*!***********************************!*\
  !*** ./src/reducers/countries.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _action_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../action/types */ \"./src/action/types.js\");\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\n\n\nvar INITIAL_STATE = {\n  data: [],\n  isFetching: false,\n  lastUpdate: Date.now()\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;\n  var action = arguments[1];\n\n  switch (action.type) {\n    case _action_types__WEBPACK_IMPORTED_MODULE_0__[\"REQUEST_COUNTRIES\"]:\n      {\n        return _extends({}, state, { isFetching: true });\n      }\n    case _action_types__WEBPACK_IMPORTED_MODULE_0__[\"RECEIVE_COUNTRIES\"]:\n      {\n        return _extends({}, state, { isFetching: false, data: action.payload });\n      }\n    default:\n      return state;\n  }\n});\n\n//# sourceURL=webpack:///./src/reducers/countries.js?");

/***/ }),

/***/ "./src/reducers/index.js":
/*!*******************************!*\
  !*** ./src/reducers/index.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _countries__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./countries */ \"./src/reducers/countries.js\");\n/* harmony import */ var _Country__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Country */ \"./src/reducers/Country.js\");\n/* harmony import */ var _newes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./newes */ \"./src/reducers/newes.js\");\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"combineReducers\"])({\n  countries: _countries__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  country: _Country__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  newes: _newes__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n}));\n\n//# sourceURL=webpack:///./src/reducers/index.js?");

/***/ }),

/***/ "./src/reducers/newes.js":
/*!*******************************!*\
  !*** ./src/reducers/newes.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _action_newes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../action/newes */ \"./src/action/newes.js\");\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\n\n\nvar initialState = {\n  categories: 'latest',\n  loading: true\n};\n\nvar reducer = function reducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _extends({}, initialState);\n  var action = arguments[1];\n\n\n  switch (action.type) {\n    case _action_newes__WEBPACK_IMPORTED_MODULE_0__[\"ON_AGE_UP_ASYNC\"]:\n      state.age += action.value;\n      return _extends({}, state);\n\n    case _action_newes__WEBPACK_IMPORTED_MODULE_0__[\"ON_AGE_DOWN_ASYNC\"]:\n      state.age -= action.value;\n      return _extends({}, state);\n\n    case _action_newes__WEBPACK_IMPORTED_MODULE_0__[\"GET_NEWS\"]:\n      state.categories = action.category;\n      return _extends({}, state, { loading: true });\n\n    case _action_newes__WEBPACK_IMPORTED_MODULE_0__[\"NEWS_RECEIVED\"]:\n      return _extends({}, state, { news: action.data, loading: false });\n\n    case _action_newes__WEBPACK_IMPORTED_MODULE_0__[\"LOGIN_SUCESSFULL\"]:\n      return _extends({}, state, { loginResponse: action.data, loading: false });\n    default:\n      return _extends({}, state);\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (reducer);\n\n//# sourceURL=webpack:///./src/reducers/newes.js?");

/***/ }),

/***/ "./src/router/Routes.js":
/*!******************************!*\
  !*** ./src/router/Routes.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_Countries__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Countries */ \"./src/components/Countries/index.js\");\n/* harmony import */ var _components_Country__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Country */ \"./src/components/Country/index.js\");\n/* harmony import */ var _pages_newes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/newes */ \"./src/pages/newes/index.js\");\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ([{\n  component: _components_Countries__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  path: '/',\n  exact: true\n}, {\n  component: _pages_newes__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  path: '/newes',\n  exact: true\n}, {\n  component: _components_Country__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  path: '/:name'\n}]);\n\n//# sourceURL=webpack:///./src/router/Routes.js?");

/***/ }),

/***/ "./src/router/index.js":
/*!*****************************!*\
  !*** ./src/router/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Countries__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Countries */ \"./src/components/Countries/index.js\");\n/* harmony import */ var _pages_newes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/newes */ \"./src/pages/newes/index.js\");\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n//import Routes from './Routes';\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n    react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Switch\"],\n    null,\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], { exact: true, path: '/', component: _components_Countries__WEBPACK_IMPORTED_MODULE_2__[\"default\"] }),\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], { exact: true, path: '/search/newes', component: _pages_newes__WEBPACK_IMPORTED_MODULE_3__[\"default\"] })\n  );\n});\n\n//# sourceURL=webpack:///./src/router/index.js?");

/***/ }),

/***/ "./src/sagas/rootSagas.js":
/*!********************************!*\
  !*** ./src/sagas/rootSagas.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return rootSaga; });\n/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/regenerator */ \"babel-runtime/regenerator\");\n/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga */ \"redux-saga\");\n/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-saga/effects */ \"redux-saga/effects\");\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _action_countries__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../action/countries */ \"./src/action/countries.js\");\n/* harmony import */ var _saga__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./saga */ \"./src/sagas/saga.js\");\n\n\nvar _marked = /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(rootSaga);\n\n\n\n\n\n\n\nfunction rootSaga() {\n  return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function rootSaga$(_context) {\n    while (1) {\n      switch (_context.prev = _context.next) {\n        case 0:\n          _context.next = 2;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__[\"takeLatest\"])(\"GET_NEWS/GET\", _saga__WEBPACK_IMPORTED_MODULE_4__[\"fetchNews\"]);\n\n        case 2:\n          _context.next = 4;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__[\"takeLatest\"])(_action_countries__WEBPACK_IMPORTED_MODULE_3__[\"REQUEST_COUNTRIES\"], _saga__WEBPACK_IMPORTED_MODULE_4__[\"fetchCountries\"]);\n\n        case 4:\n        case \"end\":\n          return _context.stop();\n      }\n    }\n  }, _marked, this);\n}\n\n//# sourceURL=webpack:///./src/sagas/rootSagas.js?");

/***/ }),

/***/ "./src/sagas/saga.js":
/*!***************************!*\
  !*** ./src/sagas/saga.js ***!
  \***************************/
/*! exports provided: fetchCountries, fetchNews */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchCountries\", function() { return fetchCountries; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchNews\", function() { return fetchNews; });\n/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/regenerator */ \"babel-runtime/regenerator\");\n/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga */ \"redux-saga\");\n/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-saga/effects */ \"redux-saga/effects\");\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _src_utils_sagasManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../src/utils/sagasManager */ \"./src/utils/sagasManager.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _src_action_newes_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../src/action/newes.js */ \"./src/action/newes.js\");\n/* harmony import */ var _src_action_countries__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../src/action/countries */ \"./src/action/countries.js\");\n\n\nvar _marked = /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(fetchCountries),\n    _marked2 = /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(fetchCountrie),\n    _marked3 = /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(fetchNews),\n    _marked4 = /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(doLogin);\n\n\n\n\n\n\n\n\n\nvar BASE_URL = 'http://localhost:5000';\nvar LATEST = \"https://newsapi.org/v2/top-headlines?country=in&apiKey=015289d55d1747abb049212dc2a4566f\";\nvar ENTERTAINEMENT = \"https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=015289d55d1747abb049212dc2a4566f\";\nvar SPORTS = \"https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=015289d55d1747abb049212dc2a4566f\";\n\nfunction fetchCountries(action) {\n  var response, data;\n  return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function fetchCountries$(_context) {\n    while (1) {\n      switch (_context.prev = _context.next) {\n        case 0:\n\n          console.log('ayaa');\n          _context.prev = 1;\n          _context.next = 4;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__[\"call\"])(axios__WEBPACK_IMPORTED_MODULE_4___default.a.get, _src_action_countries__WEBPACK_IMPORTED_MODULE_6__[\"ROOT\"] + \"/all\");\n\n        case 4:\n          response = _context.sent;\n          data = response.data;\n          //console.log(data)\n\n          _context.next = 8;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__[\"put\"])({ type: _src_action_countries__WEBPACK_IMPORTED_MODULE_6__[\"RECEIVE_COUNTRIES\"], payload: data });\n\n        case 8:\n          _context.next = 15;\n          break;\n\n        case 10:\n          _context.prev = 10;\n          _context.t0 = _context[\"catch\"](1);\n\n          console.log(_context.t0);\n          _context.next = 15;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__[\"put\"])({ type: _src_action_countries__WEBPACK_IMPORTED_MODULE_6__[\"RECEIVE_COUNTRIES\"], payload: [] });\n\n        case 15:\n        case \"end\":\n          return _context.stop();\n      }\n    }\n  }, _marked, this, [[1, 10]]);\n}\n\nfunction fetchCountrie(action) {\n  var response, data;\n  return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function fetchCountrie$(_context2) {\n    while (1) {\n      switch (_context2.prev = _context2.next) {\n        case 0:\n          _context2.prev = 0;\n          _context2.next = 3;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__[\"call\"])(axios__WEBPACK_IMPORTED_MODULE_4___default.a.get, _src_action_countries__WEBPACK_IMPORTED_MODULE_6__[\"ROOT\"] + \"/name/\" + action.name);\n\n        case 3:\n          response = _context2.sent;\n          data = response.data;\n          _context2.next = 7;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__[\"put\"])({ type: _src_action_countries__WEBPACK_IMPORTED_MODULE_6__[\"RECEIVE_COUNTRY\"], payload: data[0] });\n\n        case 7:\n          _context2.next = 14;\n          break;\n\n        case 9:\n          _context2.prev = 9;\n          _context2.t0 = _context2[\"catch\"](0);\n\n          console.log(_context2.t0);\n          _context2.next = 14;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__[\"put\"])({ type: _src_action_countries__WEBPACK_IMPORTED_MODULE_6__[\"RECEIVE_COUNTRY\"], payload: {} });\n\n        case 14:\n        case \"end\":\n          return _context2.stop();\n      }\n    }\n  }, _marked2, this, [[0, 9]]);\n}\n\nfunction fetchNews(action) {\n  var URL, response, data;\n  return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function fetchNews$(_context3) {\n    while (1) {\n      switch (_context3.prev = _context3.next) {\n        case 0:\n          _context3.prev = 0;\n          URL = \"\";\n\n          if (action.category === 'entertainment') {\n            URL = ENTERTAINEMENT;\n          } else if (action.category === 'sports') {\n            URL = SPORTS;\n          } else {\n            URL = LATEST;\n          }\n          _context3.next = 5;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__[\"call\"])(axios__WEBPACK_IMPORTED_MODULE_4___default.a.get, URL);\n\n        case 5:\n          response = _context3.sent;\n\n          if (!(response.status === 200)) {\n            _context3.next = 12;\n            break;\n          }\n\n          data = response.data;\n          _context3.next = 10;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__[\"put\"])(Object(_src_action_newes_js__WEBPACK_IMPORTED_MODULE_5__[\"getNewesSuccess\"])(data));\n\n        case 10:\n          _context3.next = 14;\n          break;\n\n        case 12:\n          _context3.next = 14;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__[\"put\"])(Object(_src_action_newes_js__WEBPACK_IMPORTED_MODULE_5__[\"getNewesError\"])('Some error'));\n\n        case 14:\n          _context3.next = 21;\n          break;\n\n        case 16:\n          _context3.prev = 16;\n          _context3.t0 = _context3[\"catch\"](0);\n\n          console.log(_context3.t0);\n          _context3.next = 21;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__[\"put\"])(Object(_src_action_newes_js__WEBPACK_IMPORTED_MODULE_5__[\"getNewesError\"])(_context3.t0));\n\n        case 21:\n        case \"end\":\n          return _context3.stop();\n      }\n    }\n  }, _marked3, this, [[0, 16]]);\n}\n\nfunction doLogin(action) {\n  var response, data;\n  return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function doLogin$(_context4) {\n    while (1) {\n      switch (_context4.prev = _context4.next) {\n        case 0:\n          _context4.prev = 0;\n          _context4.next = 3;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__[\"call\"])(axios__WEBPACK_IMPORTED_MODULE_4___default.a.post, BASE_URL + \"/api/auth\", { name: action.data.name, password: action.data.password });\n\n        case 3:\n          response = _context4.sent;\n\n          if (!(response.status === 200)) {\n            _context4.next = 10;\n            break;\n          }\n\n          data = response.data;\n          //localStorage.setItem('x-access-token', data.token);\n          //localStorage.setItem('x-access-token-expiration', Date.now() + 2 * 60 * 60 * 1000);\n\n          _context4.next = 8;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__[\"put\"])(Object(_src_action_newes_js__WEBPACK_IMPORTED_MODULE_5__[\"setLogin\"])(data));\n\n        case 8:\n          _context4.next = 12;\n          break;\n\n        case 10:\n          _context4.next = 12;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__[\"put\"])(Object(_src_action_newes_js__WEBPACK_IMPORTED_MODULE_5__[\"getNewesError\"])('Some error'));\n\n        case 12:\n          _context4.next = 19;\n          break;\n\n        case 14:\n          _context4.prev = 14;\n          _context4.t0 = _context4[\"catch\"](0);\n\n          console.log(_context4.t0);\n          _context4.next = 19;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__[\"put\"])(Object(_src_action_newes_js__WEBPACK_IMPORTED_MODULE_5__[\"getNewesError\"])(_context4.t0));\n\n        case 19:\n        case \"end\":\n          return _context4.stop();\n      }\n    }\n  }, _marked4, this, [[0, 14]]);\n}\n_src_utils_sagasManager__WEBPACK_IMPORTED_MODULE_3__[\"default\"].addSagaToRoot( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function searchWatcher() {\n  return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function searchWatcher$(_context5) {\n    while (1) {\n      switch (_context5.prev = _context5.next) {\n        case 0:\n          _context5.t0 = redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__[\"all\"];\n          _context5.next = 3;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__[\"takeLatest\"])(_src_action_countries__WEBPACK_IMPORTED_MODULE_6__[\"REQUEST_COUNTRIES\"], fetchCountries);\n\n        case 3:\n          _context5.t1 = _context5.sent;\n          _context5.next = 6;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__[\"takeLatest\"])(_src_action_countries__WEBPACK_IMPORTED_MODULE_6__[\"REQUEST_COUNTRY\"], fetchCountrie);\n\n        case 6:\n          _context5.t2 = _context5.sent;\n          _context5.next = 9;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__[\"takeLatest\"])(\"GET_NEWS/GET\", fetchNews);\n\n        case 9:\n          _context5.t3 = _context5.sent;\n          _context5.next = 12;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__[\"takeLatest\"])(_src_action_newes_js__WEBPACK_IMPORTED_MODULE_5__[\"LOGIN_API_CALL\"], doLogin);\n\n        case 12:\n          _context5.t4 = _context5.sent;\n          _context5.t5 = [_context5.t1, _context5.t2, _context5.t3, _context5.t4];\n          _context5.next = 16;\n          return (0, _context5.t0)(_context5.t5);\n\n        case 16:\n        case \"end\":\n          return _context5.stop();\n      }\n    }\n  }, searchWatcher, this);\n}));\n\n//# sourceURL=webpack:///./src/sagas/saga.js?");

/***/ }),

/***/ "./src/store.js":
/*!**********************!*\
  !*** ./src/store.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return configureStore; });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducers */ \"./src/reducers/index.js\");\n/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-saga */ \"redux-saga\");\n/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _sagas_saga__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sagas/saga */ \"./src/sagas/saga.js\");\n/* harmony import */ var _utils_sagasManager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/sagasManager */ \"./src/utils/sagasManager.js\");\n// import { applyMiddleware, createStore } from \"redux\";\n// import rootReducer from \"./reducers\";\n// import reduxThunk from \"redux-thunk\";\n\n// export default createStore(rootReducer, {}, applyMiddleware(reduxThunk));\n\n\n\n\n\n\n\n\nvar sagaMiddleware = redux_saga__WEBPACK_IMPORTED_MODULE_2___default()();\nvar isProd = \"development\" === 'production';\nvar composeEnhancers = redux__WEBPACK_IMPORTED_MODULE_0__[\"compose\"];\nif (!isProd && typeof window !== 'undefined' && window) {\n  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || redux__WEBPACK_IMPORTED_MODULE_0__[\"compose\"];\n}\nfunction configureStore(initialState) {\n  var finalCreateStore = void 0;\n  if (isProd) {\n    finalCreateStore = composeEnhancers(Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"applyMiddleware\"])(sagaMiddleware))(redux__WEBPACK_IMPORTED_MODULE_0__[\"createStore\"]);\n  } else {\n    finalCreateStore = composeEnhancers(Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"applyMiddleware\"])(sagaMiddleware)\n    // window.devToolsExtension ? window.devToolsExtension() : f => f\n    )(redux__WEBPACK_IMPORTED_MODULE_0__[\"createStore\"]);\n  }\n\n  var store = finalCreateStore(_reducers__WEBPACK_IMPORTED_MODULE_1__[\"default\"], initialState);\n  sagaMiddleware.run(_utils_sagasManager__WEBPACK_IMPORTED_MODULE_4__[\"default\"].getRootSaga());\n  return store;\n}\n\n//# sourceURL=webpack:///./src/store.js?");

/***/ }),

/***/ "./src/utils/sagasManager.js":
/*!***********************************!*\
  !*** ./src/utils/sagasManager.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/regenerator */ \"babel-runtime/regenerator\");\n/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ \"redux-saga/effects\");\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-saga */ \"redux-saga\");\n/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_2__);\n\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n/**\n * Sagas file\n * 1.Saga intercepts all the actions before they go to reducer\n * 2.yield method pauses the execution until it is finished\n * 3.yield has several functions\n *  i. takeEvery(intercepts the action types i.e listens to that type of action)\n *  ii. put(dispatch the action to reducer)\n *  iii. call(call some external functions like API calls)\n *  iv. select(get the state of any object from the store)\n * 4.Saga methods passes the action object to the saga so we can access the data in action object\n */\n\n/*\n* This is a utility class\n* import this class in our individual sagas and call the function addSagaToRoot and push all our\n* action listeners getRootSagaSaga is called from store file which activates all our listeners\n*/\n\n\n\nvar TRUE = true;\n\nvar SagasManager = function () {\n  function SagasManager() {\n    _classCallCheck(this, SagasManager);\n\n    var intialBuffers = redux_saga__WEBPACK_IMPORTED_MODULE_2__[\"buffers\"].expanding(10);\n    this.sagasWithArguments = Object(redux_saga__WEBPACK_IMPORTED_MODULE_2__[\"channel\"])(intialBuffers);\n  }\n\n  /**\n   * Function to add our yielded sagas from individual saga files\n   * @param {array} sagaWithArguments array of yielded watchers\n   *\n   * @memberOf SagasManager\n   */\n\n\n  _createClass(SagasManager, [{\n    key: \"addSagaToRoot\",\n    value: function addSagaToRoot() {\n      for (var _len = arguments.length, sagaWithArguments = Array(_len), _key = 0; _key < _len; _key++) {\n        sagaWithArguments[_key] = arguments[_key];\n      }\n\n      this.sagasWithArguments.put([].concat(sagaWithArguments));\n    }\n\n    /**\n     * Function to activate root saga.\n     * This function forks all the watchers and registers them in the root.\n     * @returns rootSaga function which is registered in store\n     *\n     * @memberOf SagasManager\n     */\n\n  }, {\n    key: \"getRootSaga\",\n    value: function getRootSaga() {\n      var sagasChannel = this.sagasWithArguments;\n      return (/*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function rootSaga() {\n          var initialSagas, dynamicSaga;\n          return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function rootSaga$(_context) {\n            while (1) {\n              switch (_context.prev = _context.next) {\n                case 0:\n                  _context.next = 2;\n                  return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"flush\"])(sagasChannel);\n\n                case 2:\n                  initialSagas = _context.sent;\n                  _context.next = 5;\n                  return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"all\"])(initialSagas.map(function (initialSagaWithArguments) {\n                    return redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"fork\"].apply(undefined, _toConsumableArray(initialSagaWithArguments));\n                  }));\n\n                case 5:\n                  if (!TRUE) {\n                    _context.next = 13;\n                    break;\n                  }\n\n                  _context.next = 8;\n                  return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"take\"])(sagasChannel);\n\n                case 8:\n                  dynamicSaga = _context.sent;\n                  _context.next = 11;\n                  return redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"fork\"].apply(undefined, _toConsumableArray(dynamicSaga));\n\n                case 11:\n                  _context.next = 5;\n                  break;\n\n                case 13:\n                case \"end\":\n                  return _context.stop();\n              }\n            }\n          }, rootSaga, this);\n        })\n      );\n    }\n  }]);\n\n  return SagasManager;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (new SagasManager());\n\n//# sourceURL=webpack:///./src/utils/sagasManager.js?");

/***/ }),

/***/ "@material-ui/core/AppBar":
/*!*******************************************!*\
  !*** external "@material-ui/core/AppBar" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/AppBar\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/AppBar%22?");

/***/ }),

/***/ "@material-ui/core/Button":
/*!*******************************************!*\
  !*** external "@material-ui/core/Button" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Button\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/Button%22?");

/***/ }),

/***/ "@material-ui/core/Card":
/*!*****************************************!*\
  !*** external "@material-ui/core/Card" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Card\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/Card%22?");

/***/ }),

/***/ "@material-ui/core/CardActionArea":
/*!***************************************************!*\
  !*** external "@material-ui/core/CardActionArea" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/CardActionArea\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/CardActionArea%22?");

/***/ }),

/***/ "@material-ui/core/CardActions":
/*!************************************************!*\
  !*** external "@material-ui/core/CardActions" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/CardActions\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/CardActions%22?");

/***/ }),

/***/ "@material-ui/core/CardContent":
/*!************************************************!*\
  !*** external "@material-ui/core/CardContent" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/CardContent\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/CardContent%22?");

/***/ }),

/***/ "@material-ui/core/CardMedia":
/*!**********************************************!*\
  !*** external "@material-ui/core/CardMedia" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/CardMedia\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/CardMedia%22?");

/***/ }),

/***/ "@material-ui/core/Dialog":
/*!*******************************************!*\
  !*** external "@material-ui/core/Dialog" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Dialog\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/Dialog%22?");

/***/ }),

/***/ "@material-ui/core/DialogActions":
/*!**************************************************!*\
  !*** external "@material-ui/core/DialogActions" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/DialogActions\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/DialogActions%22?");

/***/ }),

/***/ "@material-ui/core/DialogContent":
/*!**************************************************!*\
  !*** external "@material-ui/core/DialogContent" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/DialogContent\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/DialogContent%22?");

/***/ }),

/***/ "@material-ui/core/DialogTitle":
/*!************************************************!*\
  !*** external "@material-ui/core/DialogTitle" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/DialogTitle\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/DialogTitle%22?");

/***/ }),

/***/ "@material-ui/core/FormControlLabel":
/*!*****************************************************!*\
  !*** external "@material-ui/core/FormControlLabel" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/FormControlLabel\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/FormControlLabel%22?");

/***/ }),

/***/ "@material-ui/core/FormGroup":
/*!**********************************************!*\
  !*** external "@material-ui/core/FormGroup" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/FormGroup\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/FormGroup%22?");

/***/ }),

/***/ "@material-ui/core/Grid":
/*!*****************************************!*\
  !*** external "@material-ui/core/Grid" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Grid\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/Grid%22?");

/***/ }),

/***/ "@material-ui/core/IconButton":
/*!***********************************************!*\
  !*** external "@material-ui/core/IconButton" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/IconButton\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/IconButton%22?");

/***/ }),

/***/ "@material-ui/core/InputBase":
/*!**********************************************!*\
  !*** external "@material-ui/core/InputBase" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/InputBase\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/InputBase%22?");

/***/ }),

/***/ "@material-ui/core/Menu":
/*!*****************************************!*\
  !*** external "@material-ui/core/Menu" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Menu\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/Menu%22?");

/***/ }),

/***/ "@material-ui/core/MenuItem":
/*!*********************************************!*\
  !*** external "@material-ui/core/MenuItem" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/MenuItem\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/MenuItem%22?");

/***/ }),

/***/ "@material-ui/core/Paper":
/*!******************************************!*\
  !*** external "@material-ui/core/Paper" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Paper\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/Paper%22?");

/***/ }),

/***/ "@material-ui/core/Switch":
/*!*******************************************!*\
  !*** external "@material-ui/core/Switch" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Switch\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/Switch%22?");

/***/ }),

/***/ "@material-ui/core/Tab":
/*!****************************************!*\
  !*** external "@material-ui/core/Tab" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Tab\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/Tab%22?");

/***/ }),

/***/ "@material-ui/core/Tabs":
/*!*****************************************!*\
  !*** external "@material-ui/core/Tabs" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Tabs\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/Tabs%22?");

/***/ }),

/***/ "@material-ui/core/Toolbar":
/*!********************************************!*\
  !*** external "@material-ui/core/Toolbar" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Toolbar\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/Toolbar%22?");

/***/ }),

/***/ "@material-ui/core/Typography":
/*!***********************************************!*\
  !*** external "@material-ui/core/Typography" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Typography\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/Typography%22?");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/styles\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/styles%22?");

/***/ }),

/***/ "@material-ui/icons/AccountCircle":
/*!***************************************************!*\
  !*** external "@material-ui/icons/AccountCircle" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/icons/AccountCircle\");\n\n//# sourceURL=webpack:///external_%22@material-ui/icons/AccountCircle%22?");

/***/ }),

/***/ "@material-ui/icons/Close":
/*!*******************************************!*\
  !*** external "@material-ui/icons/Close" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/icons/Close\");\n\n//# sourceURL=webpack:///external_%22@material-ui/icons/Close%22?");

/***/ }),

/***/ "@material-ui/icons/Menu":
/*!******************************************!*\
  !*** external "@material-ui/icons/Menu" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/icons/Menu\");\n\n//# sourceURL=webpack:///external_%22@material-ui/icons/Menu%22?");

/***/ }),

/***/ "@material-ui/icons/Search":
/*!********************************************!*\
  !*** external "@material-ui/icons/Search" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/icons/Search\");\n\n//# sourceURL=webpack:///external_%22@material-ui/icons/Search%22?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//# sourceURL=webpack:///external_%22axios%22?");

/***/ }),

/***/ "babel-runtime/regenerator":
/*!********************************************!*\
  !*** external "babel-runtime/regenerator" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"babel-runtime/regenerator\");\n\n//# sourceURL=webpack:///external_%22babel-runtime/regenerator%22?");

/***/ }),

/***/ "brotli":
/*!*************************!*\
  !*** external "brotli" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"brotli\");\n\n//# sourceURL=webpack:///external_%22brotli%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"prop-types\");\n\n//# sourceURL=webpack:///external_%22prop-types%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ }),

/***/ "react-router-config":
/*!**************************************!*\
  !*** external "react-router-config" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-config\");\n\n//# sourceURL=webpack:///external_%22react-router-config%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");\n\n//# sourceURL=webpack:///external_%22redux%22?");

/***/ }),

/***/ "redux-saga":
/*!*****************************!*\
  !*** external "redux-saga" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-saga\");\n\n//# sourceURL=webpack:///external_%22redux-saga%22?");

/***/ }),

/***/ "redux-saga/effects":
/*!*************************************!*\
  !*** external "redux-saga/effects" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-saga/effects\");\n\n//# sourceURL=webpack:///external_%22redux-saga/effects%22?");

/***/ })

/******/ });