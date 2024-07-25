import Router from 'koa-router';
const router = new Router();

const userRouter = require('./user.router');

router.use('/users',userRouter.routes());

module.exports = router;