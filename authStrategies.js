const TwitterStrategy = require('passport-twitter').Strategy;

const config = require('./config');
const User = require('./models/User');

const twitterStrategy = new TwitterStrategy({
  consumerKey: config.get('twitter_consumer_key'),
  consumerSecret: config.get('twitter_consumer_secret'),
  callbackURL: `${config.get('hosted_domain')}/api/auth/twitter/callback`,
}, (token, tokenSecret, profile, cb) => {
  User.findOrCreate({ twitterId: profile.id, username: profile.username }, (err, result) => {
    cb(null, result);
  });
});

module.exports = [
  twitterStrategy,
];
