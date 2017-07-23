const Router = require('koa-router');

const router = new Router();

router.get('/csrfToken', async (ctx, next) => {
  ctx.body = { csrfToken: ctx.csrf };
  await next();
});

module.exports = router;
