const express = require('express');

const app = express();

module.exports = options => {

  options.directories.forEach(directory => {
    app.use(express.static(directory));
  });

  app.use((req, res, next) => {
    const resEnd = res.end;

    res.end = (...args) => {
      console.log(req.method, req.originalUrl, res.statusCode);
      resEnd.call(res, ...args);
    };
    next();
  });

  app.listen(options.port, () => {
    console.log(`listening at http://localhost:${options.port}/`);
  });

};
