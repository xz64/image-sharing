const Router = require('koa-router');

const router = new Router();

const authRoutes = require('./auth');

router.use('', authRoutes.routes(), authRoutes.allowedMethods());

module.exports = router;
