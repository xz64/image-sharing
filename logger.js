const winston = require('winston');

const config = require('./config');

const logger = new (winston.Logger)({
  level: config.get('log_level'),
  transports: [
    new (winston.transports.Console)(),
  ],
});

module.exports = logger;
