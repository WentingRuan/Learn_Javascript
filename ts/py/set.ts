export function of<T>(...args: T[]){
    return new Set(args) //Set 是一个不能有重复数字的集合
}

export function comprehension<VALUE_TYPE, NEW_VALUE_TYPE>(
    fun: (v: VALUE_TYPE) => NEW_VALUE_TYPE,
    collection: Set<VALUE_TYPE>,
    selector: (v: VALUE_TYPE) => boolean = () => true
){
    const ret = new Set() as Set<NEW_VALUE_TYPE>
    for (let v of collection){
        if (selector(v)){
            ret.add(fun(v))
        }
    }
    return ret
}


// const c = comprehension(
//     t => t+1,
//     of(1, 2, 3, 1)
// )

// console.log(c)


function comprehension2<VALUE_TYPE, NEW_VALUE_TYPE>(
    fun: (v: VALUE_TYPE) => NEW_VALUE_TYPE,
    collection: Set<VALUE_TYPE>,
    selector: (v: VALUE_TYPE) => boolean = () => true
){
    const ret = new Set() as Set<NEW_VALUE_TYPE>
    console.log("ret:"+ret)
    console.log("type of ret:"+typeof(ret))
    
    console.log("collection:"+collection)

    for (let v of collection){ //py % for i in collection
        console.log("v:"+v)
        if (selector(v)){
            ret.add(fun(v))
            console.log(ret)
        }
    }
    return ret
}

const c = comprehension2(
    t => t+1,
    of(1, 2, 3, 11))    

console.log(c)

console.log("of(1,2,3,1)"+of(1, 2, 3, 1))

console.log("of(1,2,3,11)"+of(1, 2, 3, 11))
