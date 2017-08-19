const Router = require('koa-router');
const helmet = require('koa-helmet');
const CSRF = require('koa-csrf');

const publicRoutes = require('./public');
const privateRoutes = require('./private');

const router = new Router({
  prefix: '/api',
});

router.use(helmet({
  noCache: true,
}));

router.use(new CSRF());

router.use('', publicRoutes.routes(), publicRoutes.allowedMethods());

router.use('', privateRoutes.routes(), privateRoutes.allowedMethods());

module.exports = router;
