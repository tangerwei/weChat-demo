app.use(async (ctx, next) => {
    if(ctx.url != '/login'){
        await next();
        return;
    }
    let req = ctx.req || ctx;
    let buffers = [];
    let size = 0;
    req.on('data', (chunk) => {
        buffers.push(chunk);
        size += chunk.length;
    });
    let data = new Promise(function (resolve, reject) {
        return req.on('end', () => {
            resolve(Buffer.concat(buffers,size));
        });
    });
    let str = await data;
    if(ctx.headers['content-type'] && ctx.headers['content-type'].toLowerCase == 'application/json'){
        ctx.request.body = ctx.request.body||JSON.parse(str.toString());
    }else{
        ctx.request.body = {
            mes:'please add a content-type named application/json'
        }
    }
    await next();
});