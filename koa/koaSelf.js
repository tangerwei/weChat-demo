
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

//获取前端传输数据的方式可以自己添加中间件，而实际使用方式如下
app.use(function(req, res, next){
   var dataB = "";
   req.on('data', function(chunk){ dataB += chunk})
   req.on('end', function(err,data){
      req.rawBody = dataB;
      next();
   })
})

//上述翻译如下
app.use(async(ctx,next)=>{
    let data = "";
    req.on('data', function(chunk){ data += chunk});
    ctx.req._self = await new Promise(function(resolve,reject){
        req.on('end',function(){
            resolve(data);
        });
    })
    next();
})

// Your route registration:
app.get('/', function(){// whatever...
});

app.post('/test', function(req, res){
    console.log(req.rawBody);
    res.send("your request raw body is:"+req.rawBody);
});