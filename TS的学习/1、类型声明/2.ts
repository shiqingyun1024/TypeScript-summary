// 字面类型
let z:100;
let v:string | number | boolean
v=true

// any和unknown
// any和unknown的区别：类型是any的值可以赋值给其他值（例如是字符串类型）
// 但是类型是unknown的值不可以赋值给其他值（例如是字符串类型），这会报错。
// 
let w1:any;
let w2:unknown;

w1 = 100;
w1 = "hello";
w1 = true;

w2 = 100;
w2 = "hello";
w2 = true;

let q1:string;
let q2:string;
q1 = w1;
q2 = w2;  // 会报错