var fs = require("fs")

// cost c = fs.readFileSync("./readfiles.js")
// console.log("%s",new String(c))

const f = (err, result) => {
    if (err) { // if (err != undefined)
        console.log(err)
        return
    }
    console.log(new String(result))
}

fs.readFile("./readfiles_not_existed.js", f) // call back 先往后继续执行，直到readfiles做完再跑f

f(undefined, 3)
console.log("---------------------")


fs.readFile("./readfiles.js", f) 

f(undefined,5)
console.log("===============================")


// todo 
//生男生女的概率计算编程模拟