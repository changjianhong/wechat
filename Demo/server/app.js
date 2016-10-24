const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const controller = require('./controller')
const rest = require('./rest');

var app = new Koa();

app.use(async(ctx, next) => {
    console.log(`Process ${ctx.request.method} ${ctx.request.url}`);
    await next();
});

app.use(bodyParser());

app.use(rest.restify());

app.use(controller());

app.listen(3000);

console.log('wechat server started at port 3000');