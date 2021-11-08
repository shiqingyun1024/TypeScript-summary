# TypeScript-summary
TypeScript的相关总结-- 包括学习笔记和相关的demo

## 接口
```
接口用来定义一个类结构，用来定义一个类中应该包含哪些属性和方法
同时接口也可以当成类型声明去使用
interface myInterface{
     name: String;
     age:Number;
}

接口可以在定义类的时候去限制类的结构
接口中的所有的属性都不能有实际的值
接口只定义对象的结构，而不考虑实际值
接口中所有的方法都是抽象方法
interface myInter{
    name:string;
    sayHello():void;
}

定义类时，可以使类去实现一个接口
实现接口就是使类满足接口的要求 实现的时候一定要用implements这个关键词。
class MyClass implements myInter{
   name: string;
   constructor(name:string){
       this.name = name;
   }
   sayHello(){
       console.log('hello world')
   }
}

```

## 泛型
```
在定义函数或是类时，如果遇到类型不明确就可以使用泛型
function fn<T>(a:T):T{
    return a;
}

可以直接调用具有泛型的函数
fn(10); // 不指定泛型，TS可以自动对类型进行推断。不过有时候会推断不出来，所以需要自己指定
fn<string>('hello'); // 指定泛型

<!-- 可以同时指定多个泛型 -->
function fn2<T,k>(a:T,b:K):T{
    console.log(b);
    return a;
}

fn2(123,'hello')
<!-- 也可以指定 -->
fn2<number,string>(123,'hello');

interface Inter{
    length:number;
}
<!-- T extends Inter 表示泛型T必须是Inter实现类（子类） -->
function fn3<T extends Inter>(a:T):number{
    return a.length;
}
fn3('123')

<!-- 泛型也可以用于类的定义 -->
class MyClass<T>{
    name:T;
    constructor(name:T){
        this.name = name;
    }
}

const mc = new MyClass('孙悟空');
或者可以写成这样
const mc = new MyClass<string>('孙悟空');
```