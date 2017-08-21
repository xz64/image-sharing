const Router = require('koa-router');
const imagesRoutes = require('./images');
const sessionRoutes = require('./session');

const router = new Router();

router.get('/csrfToken', async (ctx, next) => {
  ctx.body = { csrfToken: ctx.csrf };
  await next();
});

router.use('', imagesRoutes.routes(), imagesRoutes.allowedMethods());

router.use('', sessionRoutes.routes(), sessionRoutes.allowedMethods());

module.exports = router;
