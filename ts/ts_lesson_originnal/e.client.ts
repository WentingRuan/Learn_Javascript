import A from "axios"
const c = A.create()
c.post("http://localhost:9999/app/user2", {
    "a": 3
}).then(e => console.log(e.data))