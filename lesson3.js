
// 函数 作为 值

function w1(a){
    console.log(`w1(): ${a}+1`)
}

w1(1)

const w2 = function(a) {
    console.log(`${"w2():"+a+1}`)
}

w2(2)
w2(3)


const w3 = (a) => {
    console.log(`w3(): ${a}+1`)
}

w3(3)

var ws = [w1, w2, w3]

for (let e of ws) {
    e(8)
}

const wd = {
    "method1": w1,
    "method2": w2,
    "method3": w3
    }

wd["method1"](9)

//------------------------------------------------

// test how w1 works

console.log(`${w1(1)}+1`) // print undefined



function w11(a) {
    a = `${a}`.concat("1")
    console.log("split w1:" + `w1():${a}`)
}

function w111(a){
    
    console.log("original w1:    " + `w1(): ${a}+1`)        
    console.log("w1+1:   "+`${"w1(): " + a + "+1"}`)
        }
    
w111(1)

function w22 (a) {
    console.log(`${"w2():"+a+1}`)
    console.log(`${"w2():"+a+"1"}`)
}

w22(2)