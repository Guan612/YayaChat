import path from 'path';
import Koa from 'koa';
import {koaBody} from 'koa-body';
import cors from '@koa/cors';
import koaStatic from 'koa-static';

const router = require('../routers/index');

const app = new Koa();
app.use(
    koaBody({
        multipart: true,
        formidable: {
            maxFileSize: 2000*1024*1024,   // 设置上传文件大小最大限制，默认20M
            uploadDir: path.join(__dirname, '../uploads/img'),  // 设置文件上传目录
            keepExtensions: true    // 保持文件的后缀
        },
        //parsedMethods: ['POST', 'PUT', 'PATCH', 'DELETE'],
    })
)

//app.use(static(path.join( __dirname,'../uploads/')));

app.use(cors());
app.use(router.routes()).use(router.allowedMethods());

module.exports = app;