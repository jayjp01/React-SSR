import express from 'express';
import { matchRoutes } from 'react-router-config';
import { handleRouter } from './render';
import configureStore from '../src/store';
import Routes from '../src/router/Routes';
import { isoMiddleware } from './iso';
import render from './renderHtml';
import fs from 'fs'
var brotli = require('brotli');
const PORT = process.env.PORT || 8079;
const app = express();

app.use('/dist', express.static('dist'));
app.use(check());
app.use('/img', express.static('img'));
// brotli.compress(fs.readFileSync('dist/bundle.js'), {mode: 0, quality: 11, lgwin: 22 });
app.use(isoMiddleware);
// app.get('*', async (req, res) => {
//   const store = configureStore()
//   const actions = matchRoutes(Routes, req.path).map(({ route }) => {
//     route.component.fetching ? route.component.fetching(store) : null
//   })
//   // .map(async actions => await Promise.all(
//   //   (actions || []).map(p => p && new Promise(resolve => p.then(resolve).catch(resolve)))
//   // )
//   // );
//   console.log(actions);
//   await Promise.all(actions);
//   const context = {};
//   const content = render(req.path, store, context);

//   res.send(content);
// });

function check(){
	brotli.compress(fs.readFileSync('dist/bundle.js'), {mode: 0, quality: 11, lgwin: 22 })
}

app.listen(PORT, () => console.log(`Frontend service listening on port: ${PORT}`));