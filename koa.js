const path = require('path');
const Koa = require('koa');
const koaRead = require('./koa/koaReadFile');

const mimetypes = require('./server/mimetype.config');
const app = new Koa();

//同步读取文件等待
//const fs = require('fs');
// app.use(ctx => {
//     if(ctx.url == "favicon.ico"){
//         return;
//     }
//     const fileName = ctx.url.slice(1);
//     const _flies = path.resolve(__dirname, './build/' + fileName);
//     const data = fs.readFileSync(_flies);
//     const fileType = fileName.toLocaleLowerCase().split('.');
//     ctx.type = mimetypes[fileType[fileType.length - 1]];
//     ctx.body = data;
// });


//!location文件地址访问,采用async-await的形式

//解析地址，添加头参数设置文件类型
app.use(async(ctx,next) => {
    await next();
    const fileName = ctx.url.slice(1);
    const fileType = fileName.toLocaleLowerCase().split('.');
    ctx.type = mimetypes[fileType[fileType.length - 1]];
});
//读取文件
app.use(async(ctx,next)=>{
    const fileName = ctx.url.slice(1);
    const _flies = path.resolve(__dirname, './build/' + fileName);
    const data = koaRead.readFile(_flies);//fs.readFileSync(_flies);
    ctx.body = await data;
})
app.listen(8888);