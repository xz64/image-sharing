const Koa = require('koa');
const http = require('http');
const destroyable = require('server-destroy');
const bodyParser = require('koa-bodyparser');

const config = require('./config');
const router = require('./routes');

const app = new Koa();

app.use(bodyParser());

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
