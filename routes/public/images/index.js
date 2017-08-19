const Router = require('koa-router');

const User = require('../../../models/User');
const ImageLink = require('../../../models/ImageLink');

const router = new Router({
  prefix: '/images',
});

function formatImageLinks(image) {
  return {
    id: image._id,
    url: image.url,
    caption: image.caption,
    owner: image.owner.username,
  };
}

router.get('/all', async (ctx, next) => {
  const images = await ImageLink.find({}).populate('owner', 'username');
  const responseBody = images.map(formatImageLinks);
  ctx.body = responseBody;
  await next();
});

router.get('/user/:username', async (ctx, next) => {
  const { username } = ctx.params;
  const owner = await User.find({ username });
  const images = await ImageLink.find({ owner }).populate('owner', 'username');
  const responseBody = images.map(formatImageLinks);
  ctx.body = responseBody;
  await next();
});

module.exports = router;
