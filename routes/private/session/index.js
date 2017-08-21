const Router = require('koa-router');

const router = new Router({
  prefix: '/session',
});

router.post('/logout', async (ctx, next) => {
  ctx.logout();
  ctx.body = {};
  await next();
});

module.exports = router;
