const http = require('http');

const express = require('express');

const app = express();

const server = http.createServer(app);

app.use((req, res, next) => {
  console.log('In the middleware');
  next();
});

app.use((req, res, next) => {
  console.log('In another middleware');
  res.send('<h1>Hello From Express</h1>');
});

server.listen(3000, () => {
  console.log('server started');
});
