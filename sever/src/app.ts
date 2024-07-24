import * as Koa from 'koa';
import * as Router from 'koa-router';

const koa = new Koa();
const router = new Router();

router.get('/', async (ctx) => { ctx.body = 'Hello World' });
koa.listen(3000, () => console.log('Server is running on http://localhost:3000'));