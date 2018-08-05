/* 安装大法
npm init -y
npm install fs-extra --save # install a package and saved in node_modules(an independent developing environment)
npm install typescript ts-node node --save-dev # install a package only needed in development
node_modules/.bin/ts-node xxx.ts
*/


console.log("hello ts")

function fib(n: number, a0: number = 1, a1: number = 1): number {
    if (n < 1) return 0
    if (n == 1) return a0
    if (n == 2) return a1
    return fib(n - 1) + fib(n - 2)
}

for (let i = 0; i < 10; ++i) {
    console.log(fib(i))
}

/*
fib函数虽然已经定义了参数的类型number，但是fib函数隐式地可以返回any类型。
因为所以这个函数的return 直接或者间接地引用了自身，需要特别声明函数return的类型
function(arg : type, arg1 : type): type

fib2作为错误提示的例子。
*/

const fib2 = (n: number, a1: number = 1, a2: number = 1) => {

    if (n < 1) return 0
    if (n == 1) return a1
    if (n == 2) return a2
    else return fib2(n - 1) + fib2(n - 2)

}

for (let i = 0; i <= 10; i++) {
    console.log(fib2(i))
}

