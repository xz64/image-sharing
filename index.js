const server = require('./server');
const logger = require('./logger');

logger.info('starting server');
server.start();

function shutdown() {
  logger.info('shutting down server');
  server.stop();
}

process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);
