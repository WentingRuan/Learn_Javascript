export function of<T>(...args: T[]){
    return new Set(args)
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

const c = comprehension(
    t => t+1,
    of(1,2,3, 1)
)

console.log(c)


