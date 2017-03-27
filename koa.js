const fs = require('fs');
const path = require('path');
const Koa = require('koa');

const mimetypes = require('./server/mimetype.config');
const app = new Koa();
app.use(ctx => {
    if(ctx.url == "favicon.ico"){
        return;
    }
    const fileName = ctx.url.slice(1);
    const _flies = path.resolve(__dirname, './build/' + fileName);
    const data = fs.readFileSync(_flies);
    const fileType = fileName.toLocaleLowerCase().split('.');
    ctx.type = mimetypes[fileType[fileType.length - 1]];
    ctx.body = data;
});
app.listen(8888);