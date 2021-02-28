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
// d的类型是any
s = d;



