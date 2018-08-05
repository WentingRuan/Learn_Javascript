import * as b from "./b"
import { w } from "./b"

function a() { console.log("i"); }

// for (var i = 0; i < 10; i++) {
//     setTimeout(a, 10); //瞬间执行function，并没有等待100*i
// }

console.log(`${Date.now()}`)
setTimeout(()=>{
    console.log(`After 3s: ${Date.now()}`)
}, 3000)

console.log(`Hello`)

function sleep(m: number){
    return new Promise( (resolve, reject)=>{
        setTimeout(() => resolve("123"), m)
    })
}

async function work(){
    console.log("Hi====")
    await sleep(3000)
    console.log("Hi====")
}

work()
// sleep(1000).then(e => console.log(`AAA ${e}`))


