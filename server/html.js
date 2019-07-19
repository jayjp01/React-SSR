/* eslint-disable */

export default {
  lateChunk(app, initialState, url) {
    return `
    <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <title>Title</title>
      </head>
      <body>

      <div id="app">${app}</div>
      <script>window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}</script>
      <script src="dist/bundle.js"></script>
      </body>
      </html>`;
  }
};
