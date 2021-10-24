/* eslint-disable global-require */
const express = require('express');
const { httpStatus, messages } = require('./src/configs/constants');
const envs = require('./env.json');
const logger = require('./src/utils/logger');

// Import env configs
Object.keys(envs).forEach((key) => {
  process.env[key] = envs[key];
});

const routes = require('./src/routes');

const app = express();
app.use('/', routes);
app.use((req, res) => res.status(httpStatus.notFound).response({ message: messages.pathNotFound }));

// only define port in local
if (process.env.APP_PORT) {
  app.listen(process.env.APP_PORT, () => {
    logger.log(`App listening on port ${process.env.APP_PORT}`);
  });
}

module.exports = app;
