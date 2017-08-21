const Router = require('koa-router');
const authRoutes = require('./auth');
const imagesRoutes = require('./images');
const sessionRoutes = require('./session');

const router = new Router();

router.use('', authRoutes.routes(), authRoutes.allowedMethods());

router.use('', imagesRoutes.routes(), imagesRoutes.allowedMethods());

router.use('', sessionRoutes.routes(), sessionRoutes.allowedMethods());

module.exports = router;
