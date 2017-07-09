const Koa = require('koa');
const http = require('http');
const destroyable = require('server-destroy');

const config = require('./config');

const app = new Koa();

app.use((ctx) => {
  ctx.body = 'Hello World';
});

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
