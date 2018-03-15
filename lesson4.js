// schedule

setTimeout( ()=> {
    console.log("hello!")
},
    3000)

var i = 0
const f  = ()=>{
    i ++
    console.log("setInterval()")
    if (i===3) {
        clearInterval(obj)
    }
}

const obj = setInterval(f,3000)

/// ===
const obj = setInterval(()=>{
    i ++
    console.log("setInterval()")
    if (i===3) {
        clearInterval(obj)
    }},3000)

// readfiles
