/*
npm install fs dns utils--save

运行时，Unable to compile TypeScript
b.ts(6,8): error TS1192: Module '"fs"' has no default export
解决：tsc --init => 在tsconfig.json中，修改 "target": "es6",

error TS7016: Could not find a declaration file for module 'fs-extra'
根据界面报错提示，发现缺少安装对应库的 declaration 文件
解决： npm -install @type/fs-extra


最后， npm install typescript-formatter --save-dev 安装一个格式自动纠正的程序
每次编译前，输入：.\node_modules\.bin\tsfmt -r
*/

import fs from "fs"
import { resolve } from "dns"; /* 从dns.ts中引用resolve函数 */

import fse from "fs-extra"

export function w() {
    const c = fs.readFileSync(__dirname + "/b.ts") //强制性先读完文件，再输出
    console.log(c.toString())
    console.log("abcabcadvavarvav") 
}

//w()

function w2() {
    fs.readFile(__dirname + "/b.ts", (err, c) => { //ts自动做了异步处理，先把b.ts底部的console.log(123)输出了，再运行这个程序的下面步骤，并不能对函数本身做异步处理
        if (!err) {
            console.log(c.toString())
            console.log("abc")
            console.log(123)
        }
        else {
            console.log("readFile failed")
        }
    console.log("cba")
    console.log(321)
    })
}

//w2()

/*

Promise函数，将返回值的类型定义为Promise<Buffer>，表示该函数调用后返回的是一个异步结果为Buffer的Promise。

如果传入文件内容 (callback OR ！err)，那么就继续处理下一步; 如果不传入回调(结果)，那么就拒绝err，继续读取文件。

具体实现： “fs.readFile(filename, (err, callback)”

后面用await fse.readFile来实现Promise的用法

*/

function readFileInPromise(filename: string) {
    return new Promise((resolve, reject) => { /* 先设置一个promise*/
        fs.readFile(filename, (err, c) => { /* 这个promise是一个读文件的结果，预期返回err 和 c(内容)*/
            if (!err) { /* 如果读到了内容(不是error)*/
                resolve(c) /*返回c*/
                console.log(c.toString()) //同样，程序先运行了底部的console.log("123")
            } else {
                reject(err) /*没读到内容，就拒绝err，继续读内容。 这就是异步的实现，由于没那么快能读到内容，此处拒绝err继续读文件，CPU可以先跑后面的程序，*/
            }
        })
    })
}

// readFileInPromise(__dirname + "/b.ts")

function w4() {
    fse.readFile(__dirname + "/b.ts")
        .then((c) => {
            console.log(c.toString())
        })
        .catch((e) => {
            console.log(e)
        })
    console.log("w4 done") //异步处理，CPU先跑console.log("w4 done"), readFile在另一个线程跑
}

//w4()

function tid(a: number) {
    return a
}

async function w5() {
    const c = await fse.readFile(__dirname + "/b.ts") //阻塞

    const t = await tid(333) // 阻塞
    console.log(c.toString())
    console.log(`const t : ${t}`)
    console.log(321)
    return c.toString()
}

w5()

// python
// w5().then( (c) => {
//     console.log(c)
// }).catch( e=> {
//     console.log(e)
// })


/* grammer sugar*/
function c() {
    const a = 3
    console.log(a + "4")
    console.log(`${a}4`)
}

/*证明异步运行的语句*/
console.log("123-123-123-123-123-123")
