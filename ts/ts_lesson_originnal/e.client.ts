import A from "axios"
const c = A.create()
c.post("http://localhost:9999/app/user2", {
    "a": 3,
    "b": 4,
    "c": 5
}).then(e => console.log(e.data))

c.post("http://localhost:9999/app/user3", {
    "a": 3,
    "b": 4,
    "c": 5
}).catch(e => console.log("post failed "+e.data)) //error一般是undefined，因为user3确实是undefined

//c.post("http://localhost:9999/app/user2").then(e => console.log(e.data))