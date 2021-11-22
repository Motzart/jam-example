const express  = require('express');
const next  = require('next');
const helmet  = require('helmet');
const path = require('path');

const api =  require('./api/router');
const routes = require('../routes');

const app = next({
  dev: process.env.NODE_ENV !== 'production',
  dir: path.join(__dirname, '../'),
});

const handle = routes.getRequestHandler(app)

app.prepare().then(() => {
  const server = express();

  // Set header to help you mitigate clickjacking attacks
  server.use(
    helmet.frameguard({
      action: 'sameorigin'
    })
  );

  server.get('/health', (req, res) => {
    res.send('Server is running');
  });

  // Handle API request
  
  server.use('/api', api);

  server.get('*', handle);

  server.listen(3000, (err) => {
    if (err) throw err;
    console.log('Ready on ...');
  })
})