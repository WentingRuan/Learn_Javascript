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

    r.get("/user/:id", async ctx => { //路由规则1，如果被监听的app get到了 /user/:id，则按照ctx.body中的步骤运行
        const id = Number.parseInt(ctx.params.id) //ctx = context
        ctx.body = {
            "user id":id
        }
    })

    r.get("/user1/:id", async ctx => { //路由规则2，如果被监听的app get到了/user1/:id,则按照ctx.body中的步骤运行
        const id = Number.parseInt(ctx.params.id) //把id定义为数字
        ctx.response.body = {
            "user1 id": id
        }
    })

    r.post("/user2", async ctx => { //路由规则3，如果post的ctx.request.body不为空，返回ctx.request.body的内容；否则推送{}时，默认返回ctx.body的内容
        console.log("ACK") 
        console.log(ctx.request.body)  //如果post成功，client会输出一个ACK和ctx.body的内容（即使ctx.body的内容为空）
        
        ctx.response.body = {  // 只要发出post，client会返回ctx.response.body的内容给poster
            "a": "hello",
            "sent": ctx.request.body, //获取响应主体
            "msg":"ctx.body runed"
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

/*
 app.listen(...) 方法只是以下方法的语法糖:

const http = require('http');
const Koa = require('koa');
const app = new Koa();
http.createServer(app.callback()).listen(3000);
*/

/*
ctx.body = ctx.response.body， 与 ctx.request.body是对应的

ctx，即context。可以理解为上(request)下(response)沟通的环境，koa中把他们两都封装进了ctx对象方便调用
ctx.req=ctx.request, ctx.res=ctx.response，最终执行还是request和response对象


body是http协议中的响应体，对应的是header，响应头
Header定义了：访问的主体是谁，访问某网站的验证id是xxx，content-type，content-length，Date等等信息
Body定义了：http协议中的正文，可以用xml，html，json格式来写正文的内容
最后，ctx.body = ctx.res.body = ctx.response.body
*/