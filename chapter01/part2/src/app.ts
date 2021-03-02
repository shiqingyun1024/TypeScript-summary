let a:string = '123';
type myNum = 1|2|3|4;
let b:myNum = 4;

// 下面就是隐式any的情况
// function fn(a,b){
//     return a + b
// }

// 下面是不明确类型的this的情况
// function fn2(){
//     alert(this)
// }


// 下面是严格的检查空值的情况
// let box1 = document.getElementById('box1');
// box1.addEventListener('click',function(){
//     alert("检查空值");
// })
// 上面这种情况，可以用链判断运算符 ?.
let box1 = document.getElementById('box1');
box1?.addEventListener('click',function(){
    alert("检查空值");
})

