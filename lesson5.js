function f1(){
    console.log("f1(): Before Exception")
    throw new Error("Error in f1()") //throw exception, exception(异常)可以是字符串、数字、逻辑值或对象。
    console.log("f1(): After Exception")
}

// Ctrl k + Ctrl c : add line comment

// function f11(){ 
//     console.log("f1(): Before Exception")
//     try {
//         f1()
//     } catch(e){
//         console.log(e)
//     }
//     console.log("f1(): After Exception")
// }

function f2(){
    console.log("f2(): Before invoke f1()")
    f1()
    console.log("f2(): After invoke f1()")
}

// function f22(){
//     console.log("f2(): Before invoke f1()")
//     try {
//         f1()
//     } catch(e) {
//         console.log(e)
//     }
//     console.log("f2(): After invoke f1()")
// }

function f3(){
    console.log("f3(): Before invoke f2()")
    try{ // try检测输入变量的值。如果值是错误的，会抛出一个异常（错误）。catch 会捕捉到这个错误，并显示一段自定义的错误消息
        f2()
    } catch (e) {
        console.log(e)
    }
    console.log("f3(): After invoke f2()")
}

function f4(){
    console.log("f4(): Before invoke f3()")
    f3()
    console.log("f4(): After invoke f3()")
}

f4()

//-----------------------------------
function myFunction(x){
    try { 
        var x=x;
            if(x=="")    throw "值为空";
            if(isNaN(x)) throw "不是数字";
            if(x>10)     throw "太大";
            if(x<5)      throw "太小";
    } catch(err) {
        var y="mess";
        console.log("错误：" + err + "。");
    }
}
