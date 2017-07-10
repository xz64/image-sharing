const Router = require('koa-router');
const helmet = require('koa-helmet');

const router = new Router({
  prefix: '/api',
});

router.use(helmet({
  noCache: true,
}));

module.exports = router;
