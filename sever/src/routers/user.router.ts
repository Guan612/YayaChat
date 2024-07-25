import Router from "koa-router";
const router = new Router();

router.get('/user', async (ctx, next) => {
    ctx.body = {
        code: 0,
        data: {
            name: 'yaya',
            age: 18,
            gender: 'male'
        }
    }
})

module.exports = router; // 导出router