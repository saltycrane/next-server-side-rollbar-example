const express = require("express");
const next = require("next");
const Rollbar = require("rollbar");

/**
 * forked from https://github.com/zeit/next.js/issues/1852#issuecomment-353671222
 */
function installRollbarErrorHandler(app) {
  const _renderErrorToHTML = app.renderErrorToHTML.bind(app);
  const rollbar = new Rollbar({
    accessToken: "insert rollbar post_server_item token here",
    captureUncaught: true,
    captureUnhandledRejections: true,
  });
  const errorHandler = rollbar.errorHandler();
  app.renderErrorToHTML = (err, req, res, pathname, query) => {
    if (err) {
      errorHandler(err, req, res, () => {});
    }
    return _renderErrorToHTML(err, req, res, pathname, query);
  };
  return app;
}

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const appWithRollbar = installRollbarErrorHandler(app);
const handle = appWithRollbar.getRequestHandler();

appWithRollbar.prepare().then(() => {
  const server = express();

  server.all("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
