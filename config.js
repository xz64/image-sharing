const convict = require('convict');

// Define a schema
const config = convict({
  port: {
    doc: 'The port to bind.',
    format: 'port',
    default: 8080,
    env: 'PORT',
  },
  log_level: {
    doc: 'The logger level',
    format: String,
    default: 'error',
    env: 'LOG_LEVEL',
  },
});

config.validate({ allowed: 'strict' });

module.exports = config;
