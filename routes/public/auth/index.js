const passport = require('koa-passport');
const Router = require('koa-router');

const router = new Router({
  prefix: '/auth',
});

router.get('/twitter', passport.authenticate('twitter'));

router.get('/twitter/callback',
  passport.authenticate('twitter', {
    successRedirect: '/',
    failureRedirect: '/unauthorized',
  }),
);

module.exports = router;
