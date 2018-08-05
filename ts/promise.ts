import fs from "fs"
import { resolve } from "dns";

import fse from "fs-extra"
import { waitUntil } from "./utils";

function w(){
    const c = fs.readFileSync(__dirname + "/a.ts")
    console.log(c.toString())
}



function w2(){
    fs.readFile(__dirname + "/a.ts", (err, c) => {
        if (!err){
            console.log(c.toString())
        }
    })
}

w2()

function readFileInPromise(filename: string){
    return new Promise( ( resolve, reject) => {
        fs.readFile(filename, (err, c) => {
            if (!err){
                resolve(c)
            } else {
                reject(err)
            }
        })
    })
}

function w4(){
    fse.readFile(__dirname + "/a.ts")
        .then( (c) => {
            console.log(c.toString())
        })
        .catch( (e) =>{
            console.log(e)
        })
}

function tid(a: number){
    return a
}

async function w5(){
    const c = await fse.readFile(__dirname + "/a1.ts")

    const t = await tid(3)
    console.log(c.toString())
    return c.toString()      
}


// python
// w5().then( (c) => {
//     console.log(c)
// }).catch( e=> {
//     console.log(e)
// })

function c(){
    const a = 3
    console.log(a + "4")
    console.log(`${a}4`)
}

w5()
console.log("123")
