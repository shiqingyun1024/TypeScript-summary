// 也可以直接使用字面量进行类型声明
let a: 10;
a = 10

//  也可以使用 | 来连接多个类型(也就是联合类型) 表示或的意思
let b:'male'|'female';
b = "male";
b = "female";

let c : boolean|string;
c = true;
c = 'hello';
// c=123   // 123是数字，不属于布尔或者字符串

// any 表示的是任意类型，一个变量设置类型为any后相当于对该变量关闭了TS的类型检查。
// 使用TS时，不建议使用any类型。
// let d:any;

// 声明变量如果不指定类型，则TS解析器会自动判断变量的类型为any（隐式的any）
let d;
d = 10;
d = 'hello';
d = true;

// unknown 表示未知类型的值  那它和any有什么区别呢？请看下面
let e:unknown;
e = 10;
e = "hello";
e = true;

let s:string;
// d的类型是any，它可以赋值给任意变量，这样连带着被赋值的变量s也变成了any类型
// s = d;

// unknown 实际上就是一个类型安全的any
// unknown类型的变量，不能直接赋值给其他变量
e = 'typescript';
e = 123
// s = e;  // 报错了，unknown类型没法赋值给string类型

// 如果非要把e赋值给s，需要先做类型判断
if(typeof e === 'string'){
    s = e;
}

// 也可以通过类型断言进行判断，类型断言，可以用来告诉解析器变量的实际类型
/*
  类型断言语法：
     变量 as 类型
     或者
     <类型>变量
*/ 
s = e as string;
s = <string>e;

// void用来表示空，以函数为例，就表示没有返回值得函数
function fn():void{
    // return 123; // 会报错，因为上面设置的是void，返回的是空值，所以不能返回数字类型了
}

// never 表示永远不会返回结果
function fn2():never{
    throw new Error('报错了！');
}






