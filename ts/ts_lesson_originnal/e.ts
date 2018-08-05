/*
npm install koa @type/koa --save
npm install koa-body --save #自带declaration，不需安装@type/koa-body
npm install koa-router @type/koa-router --save
*/

import koa from "koa"
import kb from "koa-body"
import kr from "koa-router"

function createRouter(){ //定义：创建一个router
    const r = new kr() //定义router中的访问与返回ctx.body的方法

    r.get("/user/:id", async ctx => { //路由规则1，如果路由get到了 /user/:id，则按照ctx.body中的步骤运行
        const id = Number.parseInt(ctx.params.id)
        ctx.body = {
            id
        }
    })

    r.get("/user1/:id", async ctx => { //路由规则2，如果路由get到了/user1/:id,则按照ctx.body中的步骤运行
        const id = Number.parseInt(ctx.params.id)
        ctx.body = {
            id
        }
    })

    r.post("/user2", async ctx => { //路由规则3
        console.log(ctx.request.body)
        ctx.body = {
            "a": "hello",
            "sent": ctx.request.body
        }
    })



    const r1 = new kr()
    r1.use("/app", r.routes()) //新建一个kr，并把 r路由表 归属于 r1路由表

    return r1
}

const app = new koa()
app.use(kb())
app.use(createRouter().routes())
app.listen(9999, () => {
    console.log("Listening at 9999") // 监听端口9999，此时可以在e.clients.ts中尝试 post("http://localhost:9999/app/user") 来查看情况；也可以在网页直接打开
})

