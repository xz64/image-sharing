const TwitterStrategy = require('passport-twitter').Strategy;

const config = require('./config');

const twitterStrategy = new TwitterStrategy({
  consumerKey: config.get('twitter_consumer_key'),
  consumerSecret: config.get('twitter_consumer_secret'),
  callbackURL: `${config.get('hosted_domain')}/api/auth/twitter/callback`,
}, (token, tokenSecret, profile, cb) => {
  cb(null, {});
},
);

module.exports = [
  twitterStrategy,
];
