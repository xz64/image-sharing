const Router = require('koa-router');
const authRoutes = require('./auth');
const imagesRoutes = require('./images');

const router = new Router();

router.use('', authRoutes.routes(), authRoutes.allowedMethods());

router.use('', imagesRoutes.routes(), imagesRoutes.allowedMethods());

module.exports = router;
