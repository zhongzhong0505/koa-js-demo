const Koa = require('koa')


const app = new Koa()

app.use(async ctx => {
    ctx.body = "hello"
})

app.listen(3000)

console.log("Server listening on port 3000")