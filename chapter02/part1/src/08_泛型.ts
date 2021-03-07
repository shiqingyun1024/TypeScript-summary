// function fn(a:any):any{
//     return a;
// }

/**
 * 在定义函数或是类时，如果遇到类型不明确就可以使用泛型
 * 
 * 
 * */ 

// T类型就是传入的变量a的类型，传入什么类型，返回什么类型

 function fn<T>(a:T):T{
     return a;
 }

//  可以直接调用具有泛型的函数
fn(10); // 不指定泛型，TS可以自动对类型进行推断，不过有时候会推断不出来，所以会有下面这种方式
fn<string>('hello'); // 指定泛型

// 可以指定多个泛型
function fn2<T,k>(a:T,b:k):T{
    console.log(b);
    return a;
}

fn2(123,'hello');
// 也可以这样写
fn2<number,string>(123,'hello')

// 使用接口去限制泛型的范围
interface Inter{
    length:number
}

// T extends Inter  表示泛型T必须是Inter实现类（子类）
function fn3<T extends Inter>(a:T):number{
    return a.length;
}

fn3('123')

class MyClass<T>{
    name:T;
    constructor(name:T){
        this.name = name

    }
}

// 上面的这种方式也可以写成下面这种
class MyClass2<T>{
    constructor(public name:T){
    }
}

const mc = new MyClass('孙悟空');
const mc1 = new MyClass2('孙悟空');