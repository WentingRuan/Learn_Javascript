var md5 = require("md5")

console.log("===md5:0===")
console.log(md5("hello world")) //md5 hash
// console.log(md5("5eb63bbbe01eeed093cb22bb8f5acdc3")) # failed

console.log("===md5:1===")
const utils = require("utility")
console.log(utils.md5("hello world")) // md5 base64 format
console.log(utils.md5("hello world", "base64")) // base64 format
console.log(utils.md5("5eb63bbbe01eeed093cb22bb8f5acdc3", "base64")) // base64 format
/**
exports.hash = function hash(method, s, format) {
    var sum = crypto.createHash(method);
    var isBuffer = Buffer.isBuffer(s);
    if (!isBuffer && typeof s === 'object') {
      s = JSON.stringify(sortObject(s));
    }
    sum.update(s, isBuffer ? 'binary' : 'utf8');
    return sum.digest(format || 'hex');
  };
  
  
   md5 hash
   @param {String|Buffer} s
   @param {String} [format] output string format, could be 'hex' or 'base64'. default is 'hex'.
   @return {String} md5 hash string
   @public
  exports.md5 = function md5(s, format) {
    return exports.hash('md5', s, format);
  };
*/

console.log("===base64:0===")
console.log(utils.base64encode("hello world"))
console.log(utils.base64decode("aGVsbG8gd29ybGQ="))

console.log("===base64:1===")
// var b = new Buffer(, 'base64')
var a = new Buffer('hello world')
console.log(a.toString('base64'))
var b = new Buffer("aGVsbG8gd29ybGQ=", "base64")
console.log(b.toString())