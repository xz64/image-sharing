const mongoose = require('mongoose');

const logger = require('./logger');
const config = require('./config');

mongoose.Promise = Promise;

mongoose.connect(config.get('mongo_uri'), {
  useMongoClient: true,
});

const db = mongoose.connection;

const initPromise = new Promise((resolve, reject) => {
  db.once('open', resolve);
  db.once('error', reject);
});

module.exports = {
  start() {
    return initPromise
    .then(() => {
      logger.info('database initialized');
    })
    .catch((err) => {
      logger.error('database initialization problem', err);
    });
  },
  stop() {
    return db.close();
  },
};
