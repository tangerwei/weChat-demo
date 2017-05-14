const Koa = require('koa');
const KoaRouter = require('koa-router');
const koaRead = require('../koa/koaReadFile');
const path = require('path');
const mimetype = require('../server/mimetype.config');

//注意此函数返回的是相对项目根节点的路径
function getpath(url) {
    let result = path.resolve(__dirname, "../build" + url);
    return result;
}

const app = new Koa();
const router = new KoaRouter();

//文件加载
const count = require('../build/build.config').length;
for (let i = 0; i < count; i++) {
    let parentURIArry = '';
    for (let j = 0; j < i; j++) {
        parentURIArry = '/:parentURI' + j;
    }
    let paramsStr = parentURIArry + "/:name.:type";
    router.get(paramsStr, async (ctx, next) => {
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
}

//数据访问接口


//管理帐号
const admin = 'tangerwei';
const password = '111111';

//验证登录权限
router.put('/login', (ctx, next) => {
    let user = ctx.request.body;
    let state = false;
    if (admin == user.username && password == user.password) {
        state = true;
    }
    let data = {
        exist: state
    }
    ctx.body = JSON.stringify(data);
    ctx.type = mimetype['json'];
})

//数据解析
const bodyParser = require('koa-bodyparser');
app.use(bodyParser());

//路由解析
app.use(router.routes());
app.use(router.allowedMethods());
app.listen(8080);

