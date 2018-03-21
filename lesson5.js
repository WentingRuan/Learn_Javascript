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

// 生男生女

    //思路：每次生男生女的概率都是0.5，但是实际上生男生女的是随机事件。本题条件是是：如果生女，则一直生下去，直到生出男孩为止。
    //判断：生女是一个循环，当生女被一个为FALSE的判断中断时，才跳出生女循环。
    //把每次生女的事件抽象为一个[0.1]随机数，如果>0.5，说明是女孩，然后继续生；如果<0.5说明不是女孩，则跳出生女的循环。
    // 或者： 把每次生男生女时间抽象为一个0或1的随机数，如果==1，说明是女孩，然后继续生；如果==0，说明是男孩，跳出循环。
    //把每一次生男生女的过程做一次统计，最后重复生男生女的过程N次，统计最后的男女比例。

 function boy_girl(n){
    
    let g= 0, b = 0, sum_g = 0, sum_b = 0, rate = 0
     
    for(let i=1; i<=n; ++i) {
        let g= 0, b = 0 //, p_girl = Math.round(Math.random())

        while (Math.round(Math.random()) == 1){
            g = g+1
           // console.log(`g：${g}`)
        }
        b = b + 1
        //console.log(`b：${b}`)   
        sum_g = sum_g+g
        sum_b = sum_b+b
        rate =  sum_g / (sum_g + sum_b) 
    }

    console.log({
            "boy_number":sum_b,
            "gir_number":sum_g ,
            "all children":sum_b+sum_g,
            "rate of girl":rate
        })
    }


boy_girl(3)
boy_girl(300)