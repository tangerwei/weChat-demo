const Koa = require('koa');
const KoaRouter = require('koa-router');
const koaRead = require('../koa/koaReadFile');
const path = require('path');

//注意此函数返回的是相对项目根节点的路径
function getpath(url) {
    return (__dirname, url);
}

let app = new Koa();
let router = new KoaRouter();
//router.get()的第一个参数是严格匹配路径，可以尝试使用正则编写


//用户首页
router.get('/index.html', async (ctx, next) => {
    ctx.body = await koaRead.readFile(getpath('./build/index.html'));
    ctx.type = 'text/html';
});

//导航到管理界面
router.get('/general.htm', async (ctx, next) => {
    //ctx.body = await koaRead.readFile(getpath('../build/index.html'));
    ctx.body = "等待设计";
    ctx.type = 'text/html';
});

//html资源加载，注当url存在两种匹配时，按照第一种匹配执行
router.get(/html\b/, async (ctx, next) => {
    ctx.body = await koaRead.readFile(getpath('./build' + ctx.url));
    ctx.type = 'text/html';
});

//js资源加载
router.get(/\.js\b/, async (ctx, next) => {
    let url = './build' + ctx.url;
    ctx.body = await koaRead.readFile(getpath(url));
    ctx.type = 'text/html';
});

//图片资源加载
router.get(/\.png\b/, async (ctx, next) => {
    let url = './build' + ctx.url;
    ctx.body = await koaRead.readFile(getpath(url));
    ctx.type = 'image/png';
});
router.get(/\.jpg\b/, async (ctx, next) => {
    let url = './build' + ctx.url;
    ctx.body = await koaRead.readFile(getpath(url));
    ctx.type = 'image/jpeg';
});

//数据加载
router.get(/\.json\b/, async (ctx, next) => {
    let url = './build' + ctx.url;
    ctx.body = await koaRead.readFile(getpath(url));
    ctx.type = 'application/json';
});

//重定向功能
// router.get(,(ctx, next) => {
//     console.log('redirect');
//     ctx.status = 301;
//     ctx.redirect('/index.html');
//     ctx.body = 'Redirecting to home page';
// });

//
app.use(router.routes());
app.use(router.allowedMethods());
app.listen(8080);