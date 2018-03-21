let name="wenting"
/// test

console.log(`hello ${name}`) // console.log("hello" + name)

// Math package

console.log(Math.trunc(3.64))
console.log(Math.round(3.64))

const day = "Monday"

// If

if (day === "Monday"){
    console.log("Workday")
} else {
    console.log("Not Monday")
}

// For and while

const a = [1, 2, "12"]

for (let e in a){
    console.log(`${e} ${a[e]}`) //e == key
}

for (let e of a){
    console.log(`${e}`) // the value of e
}

for (let i=0; i<a.length; ++i){
    console.log(`${a[i]}`)
}

var i=0
while (i<a.length) {
    // if (!(i < a.length)) break
    console.log(`${a[i]}`)
    i ++
}

// Function definition

function factorial(n){
    var ret = 1
    for (;n>=1; n--){
        ret *= n
    }
    return ret
}

console.log(`Factorial(5) = ${factorial(5)}`)

function Sum(n){
    let ret = 0
    for (;n>0;n--) {
        ret += factorial(n)
    }
    return ret
}

function facsum(n){
    let s = 0
    for (let i=1; i<=n; i ++) {
        s += factorial(i)
    }
    return s
}

// todo
function facsum(n){
    let s = 0
    let f = 1
    for (let i=1; i<=n; ++i){
        f *= i
        s += f
    }
    return s
}