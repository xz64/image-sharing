const Koa = require('koa');
const http = require('http');
const destroyable = require('server-destroy');
const bodyParser = require('koa-bodyparser');
const session = require('koa-session');
const passport = require('koa-passport');
const serve = require('koa-static');

const db = require('./db');
const config = require('./config');
const router = require('./routes');
const authStrategies = require('./authStrategies');
const User = require('./models/User');

const app = new Koa();

app.use(bodyParser());

app.keys = [config.get('session_secret')];
app.use(session({}, app));

authStrategies.forEach(passport.use, passport);

passport.serializeUser((user, done) => {
  done(null, user.twitterId);
});

passport.deserializeUser(async (twitterId, done) => {
  const user = await User.findOne({ twitterId });
  done(null, user);
});

app.use(passport.initialize());
app.use(passport.session());

app.use(router.routes());
app.use(router.allowedMethods());

app.use(serve('public'));

app.use(async (ctx, next) => {
  await next();

  if (ctx.status === 404) {
    ctx.redirect('/');
  }
});

const server = http.createServer(app.callback());

module.exports = {
  start() {
    db.start().then(() => {
      server.listen(config.get('port'));
      destroyable(server);
    });
  },
  stop() {
    server.destroy();
    db.stop();
  },
};
