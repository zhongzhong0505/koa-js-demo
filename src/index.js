const Koa = require('koa')

const Router = require("koa-router")

const app = new Koa()
const router = new Router()

router.all("/", async ctx => {
    ctx.body = "hello"
})

app.use(router.routes())

app.listen(3000)

console.log("Server listening on port 3000")