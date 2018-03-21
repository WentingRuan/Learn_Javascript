// String

const a = "123456789"
console.log(`slice() ${a.slice(0, 3)} ${a.slice(2, 3)}`) //slice[0,3)
console.log(`substr() ${a.substr(0, 3)} ${a.substr(2, 3)}`)//substr(start,length)

console.log(a.charAt(2)) // a的第二个

console.log(`${"0".concat("12", "345", "678")}`) 
    //test
    console.log("0".concat("12", "345", "678"))

console.log(`${"0"+"12" + "345" + "678"}`) 
    //test
    console.log(`"0"+"123"+"456"+"789"`)
    console.log(a+"1")
    console.log(`a+"1"`) // `${}`才表示引用变量的值，否则直接输出
    console.log(`${a + "1"}`)
    console.log(`${a + 1}`)

console.log(`${"123".repeat(3)}`) 
    // repeat n times
    // test
    console.log(`123.repeat(3)`)
    console.log("123".repeat(3))
    //Invalidi token: console.log(123.repeat(3)) 
    
// Return html lable

console.log("123".big())
console.log("123".bold())
console.log("123".fixed())
console.log("123".fontcolor("blue"))
console.log("123".fontsize(3))
console.log("123".italics())


// string search
console.log("123".charCodeAt()) //Returns the Unicode value of the character at the specified location.

console.log(`${a.startsWith("123")}`) 
    //test
    console.log(a.startsWith("123"))
    //print words directly
    console.log("a.startsWith(a)") 
    console.log(`a.startsWith("a")`)
    // wrong one :console.log("a.startsWith("a")") 

    // try "endsWith"
    console.log(a.endsWith("789"))

console.log("123123".includes("1", 5)) // 第6个是不是“1”
console.log("123123".includes("1", 3,4))// 第4个到第5个之间有没有1
console.log("1234567".indexOf("9")) //若没有则返回-1,若indexof of "",则返回0
console.log("1234567654321".indexOf("6")) // lastIndexOf,从后往前找
console.log(`${a.length}`)

// oop object-orientd programming

// f(a, b, c)
// a.f(b, c)

class Person{
    
    constructor(_name){
        this.name = _name
    }
    
    say(p){
        console.log(`Hello from ${this.name} to ${p.name}`)
    }

    toString(){ 
        this.say(this) 
        return `[name=${this.name}]`
    }

}

//function say(p1, p2){
  //  console.log(`${p1.name} to ${p2.name}`)
//}

const EL = new Person("EL")
const K = new Person("K")

EL.say(K)

// String <=> Number

    
Number.isInteger(3)
    //isTnter是适用于Number这个对象的函数（属性）
console.log(Number.parseInt("0xF", 16)) //以0x开头的数字表示16进制
    //Convert a string into a number
    console.log(Number.parseInt("0x13", 16)) // 1*16^1+3*16^0 = 19
console.log(Number.parseInt("13xF", 10))
console.log(Number.parseInt("13", 10))

const n = 10000
console.log("" + n) // `${n}`

console.log(n.toString(2))
console.log(n.toString(16))

// a
arr = [1,2,3]
p = {
    b:3,
    t:{
        a:1
    },
    "3": 4,
    3: 5
}

// p["t"]
// p.t

const t = JSON.stringify(p)
console.log(t)
console.log(JSON.parse(t))

const t1 = {
    "id": 123,
    "compoents": {
        "flgith": 1,
        "c": 2
    }
}

