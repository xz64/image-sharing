const convict = require('convict');

// Define a schema
const config = convict({
  port: {
    doc: 'The port to bind.',
    format: 'port',
    default: 8080,
    env: 'PORT',
  },
  hosted_domain: {
    doc: 'The domain the site is hosted on, used for oauth callback',
    format: String,
    default: 'http://localhost:8080',
    env: 'HOSTED_DOMAIN',
  },
  log_level: {
    doc: 'The logger level',
    format: String,
    default: 'error',
    env: 'LOG_LEVEL',
  },
  mongo_uri: {
    doc: 'The mongodb URI',
    default: 'mongodb://localhost:27017/imagesharing',
    env: 'MONGODB_URI',
  },
  session_secret: {
    doc: 'Session secret',
    format: String,
    default: '',
    env: 'SESSION_SECRET',
  },
  twitter_consumer_key: {
    doc: 'twitter consumer key',
    format: String,
    default: '',
    env: 'TWITTER_CONSUMER_KEY',
  },
  twitter_consumer_secret: {
    doc: 'twitter consumer secret',
    format: String,
    default: '',
    env: 'TWITTER_CONSUMER_SECRET',
  },
});

config.validate({ allowed: 'strict' });

module.exports = config;
