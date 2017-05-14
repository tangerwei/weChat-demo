var koa = require('koa');
var app = new koa();

// x-response-time

app.use(async (ctx,next) => {
    var start = new Date;
    await next();
    var ms = new Date - start;
    ctx.set('X-Response-Time', ms + 'ms');
});
// logger

app.use(async (ctx,next) => {
    var start = new Date;
    await next();
    var ms = new Date - start;
    console.log('%s %s - %s', ctx.method, ctx.url, ms);
});

// response

app.use(async(ctx,next) => {
    ctx.body = 'Hello World';
});

app.listen(3000);