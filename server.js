const Koa = require('koa');
const http = require('http');
const destroyable = require('server-destroy');
const bodyParser = require('koa-bodyparser');
const session = require('koa-session');
const passport = require('koa-passport');

const config = require('./config');
const router = require('./routes');
const authStrategies = require('./authStrategies');

const app = new Koa();

app.use(bodyParser());

app.keys = [config.get('session_secret')];
app.use(session({}, app));

authStrategies.forEach(passport.use, passport);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser(async (user, done) => {
  done(null, user);
});

app.use(passport.initialize());
app.use(passport.session());

app.use(router.routes());
app.use(router.allowedMethods());

const server = http.createServer(app.callback());

module.exports = {
  start() {
    server.listen(config.get('port'));
    destroyable(server);
  },
  stop() {
    server.destroy();
  },
};
