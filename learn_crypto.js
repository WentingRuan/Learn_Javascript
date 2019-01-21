var crypto = require("crypto")
// console.log(`a: ${crypto}`)
var fs = require("fs")
// console.log(`b: ${fs}`)

var sha1 = crypto.createHash('sha1');
sha1.update('hello world');

// console.log(sha1.digest()) // buffer
console.log(sha1.digest("hex"))

var sha2 = crypto.createHash('sha1');
sha2.update('foobar');

console.log(sha2.digest('hex'))
