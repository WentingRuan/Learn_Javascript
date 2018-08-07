/*
npm install axios --save
*/
import A from "axios"
/*
axios库默认返回axios.default函数
==
import * as axios from "axios"
const A = axios.default

*/

async function dingsend(response_id: number) {
    let url_hook = "https://oapi.dingtalk.com/robot/send?access_token=3ca153b52d6f5186d9f7c29ffcb9d56440ac090f1f7dd6987573972324050faf"
    let authen_msg = {
            "actionCard": {
                "title": "ID验证登陆", 
                "text": `请验证是否通过此ID的登陆\nID: ${response_id}`, 
                "btnOrientation": "1", 
                "btns": [
                    {
                        "title": "通过", 
                        "actionURL": `http://localhost:9999/accept/${response_id}`
                    }, 
                    {
                        "title": "拒绝", 
                        "actionURL": `http://localhost:9999/reject/${response_id}`
                    }
                ]
            }, 
            "msgtype": "actionCard"
        }
    
    const client = A.create()
    client.interceptors.response.use( //声明不论拿到什么数据，都要response
        response => response,
        response => response
    )
    
    const r1 = await client.post( //发出命令
        url_hook,
        authen_msg
    )
    console.log(r1.status)
    console.log(r1.data)
    console.log("Sended")
}


async function work(){
    let response_id = Math.round(Math.random() * 100000000)
    console.log(`response id: ${response_id}`)
       
    await dingsend(response_id)
    // const r = await client.get("https://www.baidu.com123")
    // console.log(r.status)
    // console.log(r.data)

    // r.headers

    
}

//work().catch(e => console.log(e)) //如果有error，返回error



async function work2(){
    const client2 = A.create()
    client2.interceptors.response.use( //声明不论拿到什么数据，都要response
        response => response,
        response => response
    )
    
    const r2 = await client2.post( //发出命令
        "https://www.baidu.com"
    )

    const r3 = await client2.post(
        "http://www.baidu3.com"
    )
    console.log(r2.status)
    console.log(r2.data)
    
    console.log(r3.status)
    console.log(r3.data)

    console.log("Sended")
}

work2().catch(e => console.log(e)) //如果有error，返回error
