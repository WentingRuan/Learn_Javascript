export function comprehension<VALUE_TYPE, NEW_VALUE>(
    fun: (key: string, value: VALUE_TYPE) => [number|string, NEW_VALUE],
    collection: { [index: string]: VALUE_TYPE },
    selector: (key: string, value: VALUE_TYPE) => boolean = () => true
){
    const ret: any = {}
    for (let k in collection){
        const v = collection[k]
        if (selector(k, v)){
            const [nk, nv] = fun(k, v)
            ret[nk] = nv
        }
    }
    return ret
}

const c = comprehension(
    (k, v) => [Number.parseInt(k)+1, v+1],
    { 1:2, 3:4, 5:6}
)
console.log(c)

const c2 = comprehension(
    (k, v) => [k+1, v],
    { "a":2, "b":4, "c":6}
)

console.log(c2)


