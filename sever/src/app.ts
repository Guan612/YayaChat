import Koa = require("koa");
import index from "./routers/index";

const app = new Koa();

app.use(index.routes());

app.listen(3000, () => {
    console.log("listen 3000 OK");
});
