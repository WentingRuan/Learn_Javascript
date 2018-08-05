console.log("hello ts")

function fib(n: number, a0: number =1 , a1: number =1){
    if (n < 1) return 0
    if (n == 1) return a0
    if (n == 2) return a1
    return fib(n-1) + fib(n-2)
}

for (let i=0; i<10; ++i){
    console.log(fib(i))
}

/*
npm init -y
npm install fs-extra --save # install a package and saved in node_modules(an independent developing environment)
npm install typescript ts-node --save-dev # install a package only needed in development
node_modules/.bin/ts-node xxx.ts
*/
























const fib2  =  (n:number, a1:number = 1, a2:number = 1) => {

    if (n < 1) return 0
    if (n == 1) return a1
    if (n == 2) return a2
    else return fib2(n-1) + fib2(n-2)

}

for (let i = 0; i <= 10; i++){
    console.log(fib2(i))
}

