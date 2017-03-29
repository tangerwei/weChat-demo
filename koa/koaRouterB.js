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

//build下添加build.config.js,将上述两个方法合并,这个方法并不完美,
//因为在文件的获取中其实并不需要解析路径分层，直接读取即可，但是这个方式为接口的分层提供了思考
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
router.put('/login',(ctx,next)=>{
    console.log(ctx.req);
    let data = {
        value:10
    }
    ctx.body = JSON.stringify(data);
    ctx.type = mimetype['json'];
})

app.use(router.routes());
app.use(router.allowedMethods());
app.listen(8080);