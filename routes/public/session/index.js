const Router = require('koa-router');

const router = new Router({
  prefix: '/session',
});

router.get('/authentication', async (ctx, next) => {
  ctx.body = { authenticated: !!ctx.state.user, userId: ctx.state.user.username };
  await next();
});

module.exports = router;
