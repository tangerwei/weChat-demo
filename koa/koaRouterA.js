const Koa = require('koa');
const KoaRouter = require('koa-router');
const koaRead = require('../koa/koaReadFile');
const path = require('path');
const mimetype = require('../server/mimetype.config');

//注意此函数返回的是相对项目根节点的路径
function getpath(url) {
    let result = path.resolve(__dirname, "../build" + url);
    console.log(result);
    return result;
}

const app = new Koa();
const router = new KoaRouter();
// //all使用结果
// router.all('/:url',(ctx)=>{
//     console.log(ctx.params.url);
// })

// 合并资源获取方法,build 根目录下
router.get('/:name.:type', async (ctx, next) => {
    let name = ctx.params.name;
    let type = ctx.params.type;
    //判断后缀名是否支持,throw 404相当于return，后续的代码不会执行
    if (!mimetype[type]) {
        ctx.throw(404);
    } else {
        let fileurl = ctx.url;
        ctx.body = await koaRead.readFile(getpath(fileurl));
        ctx.type = mimetype[type];
    }
});

// 合并资源获取方法 build 二级目录下
router.get('/:parentURI/:name.:type', async (ctx, next) => {
    let name = ctx.params.name;
    let type = ctx.params.type;
    if (!mimetype[type]) {
        ctx.throw(404);
    } else {
        let fileurl = ctx.url;
        ctx.body = await koaRead.readFile(getpath(fileurl));
        ctx.type = mimetype[type];
    }
});

app.use(router.routes());
app.use(router.allowedMethods());
app.listen(8080);