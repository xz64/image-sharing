const Router = require('koa-router');
const HttpStatus = require('http-status-codes');

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

router.get('/mine', async (ctx, next) => {
  const images = await ImageLink.find({ owner: ctx.state.user }).populate('owner', 'username');
  const responseBody = images.map(formatImageLinks);
  ctx.body = responseBody;
  await next();
});

// create image link
router.post('/', async (ctx, next) => {
  const { url, caption } = ctx.request.body;

  if (!url.startsWith('http')) {
    ctx.status = HttpStatus.BAD_REQUEST;
  } else {
    const imageLink = new ImageLink({
      owner: ctx.state.user,
      url,
      caption,
    });
    await imageLink.save();
    ctx.body = {};
  }

  await next();
});

router.post('/delete', async (ctx, next) => {
  const { id } = ctx.request.body;

  const imageLink = await ImageLink.findById(id);
  await imageLink.remove();
  ctx.body = {};
  await next();
});

module.exports = router;
