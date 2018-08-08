export function of<T>(...args: T[]){
    return args
}

export function comprehension<VALUE_TYPE, NEW_VALUE_TYPE>(
    fun: (v: VALUE_TYPE, i: string) => NEW_VALUE_TYPE,
    collection: Array<VALUE_TYPE>,
    selector: (v: VALUE_TYPE, i: string) => boolean = () => true
){
    const ret = [] as NEW_VALUE_TYPE[]
    for (let i in collection){
        const v = collection[i]
        if (selector(v, i)){
            ret.push(fun(v, i))
        }
    }
    return ret
}

const c = comprehension(
    t => t+1,
    of(1,2,3)
)

//console.log(c)

// test

function comprehension2<VALUE_TYPE, NEW_VALUE_TYPE>(
    fun: (v: VALUE_TYPE, i: string) => NEW_VALUE_TYPE,
    collection: Array<VALUE_TYPE>,
    selector: (v: VALUE_TYPE, i: string) => boolean = () => true
){
    const ret = [] as NEW_VALUE_TYPE[]
    console.log("type of ret:"+typeof(ret))

    console.log("collection:"+collection+"\n")
    
    for (let i in collection){ // == py % let i in range(len(collection)) 区别 let i of collection
        const v = collection[i]
        console.log("i:"+i)
        console.log("v:"+v)
        console.log("type of i:"+typeof(i))
        console.log("type of v:"+typeof(v))
        console.log("selector(v, i):"+selector(v, i))
        if (selector(v, i)){
            console.log("fun(v,i"+fun(v,i))
            ret.push(fun(v, i))
        }
    }
    console.log("ret")
    return ret
}


const c3 = comprehension2(
    t => Number.parseInt(t)+3,
    of("1","4","3")
)

console.log(c3)

// test

// function sum(a:number[]){
//     let ret = 0
//     for (let v of a){
//         ret += v
//     }
//     return ret
// }

// function sum1(...a:number[]){
//     let ret = 0
//     for (let v of a){
//         ret += v
//     }
//     return ret
// }

// console.log(sum([1,2,3]))
// console.log(sum1(1, 2, 6, 8))

// const arr = [1,2,6,8]

// console.log(sum( arr ))
// console.log(sum1( ...arr )) // deconstruction


// function identity<T>(t: T){
//     return t
// }

// const c1 = identity(3)
// const c2 = c1 + 12

// console.log(of(1,2,3))