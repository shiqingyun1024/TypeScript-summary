// 类型有：number、 string、 boolean、 字面量(其本身)、 any、 unknown(类型安全的any)、 void(空值)、 never(没有值)
// object(任意的js对象)、array(任意js数组)、tuple(元素，TS新增类型，固定长度数组)、enum(枚举，TS中新增类型)

// object表示一个js对象
let a:object;
a = {};
a = function(){

}

// {} 用来指定对象中可以包含哪些属性
// 语法：{属性名:属性值,属性名:属性值}
// 在属性名后边加上?，表示属性是可选的
let b:{name:string,age?:number};
b = {name:'孙悟空',age:18};

// [propName:string]:any 表示任意类型的属性，其中propName可以写成其他的名字，定义对象一般都用这种方式
let c:{name:string,[propName:string]:any};
c = {name:'猪八戒',age:18,gender:'男'}

/*
* 函数声明一般用这种方式
* 设置函数结构的类型声明：
*        语法：(形参:类型, 形参:类型 ....) => 返回值
*/ 
let d: (a:number , b:number) => number;
// 参数的定义是数字类型，传入定义的是字符串类型，所以会报错
// d = function(n1:string, n2: string):number{
//     return 10;
// }


/**
 *  数组的类型声明
 *       类型[]
 *       Array<类型>
 * */ 
// string[] 表示字符串数组
let e: string[];
e = ['a','b','c'];

// number[] 表示数值数组
let f:number[];
let g:Array<number>;
g = [1,2,3];

/*
 * 元组，元组就是固定长度的数组
 *      语法:[类型,类型,类型]
 * */ 
let h:[string,number];
h = ['hello',123]

/*
* 枚举 enum
**/ 
enum Gender{
    Male,
    Female
}

let i:{name:string,gender:Gender};
i = {
    name: '孙悟空',
    gender: Gender.Male
}

// console.log(i.gender === Gender.Male)

// &表示同时
let j: {name:string}&{age:number};
// 表示j既要有name:string，也要有age:number
j = {name:'孙悟空',age:18}

// 类型的别名 使用type来进行定义
type myString = string;
// string的别名是myString，那给变量k定义string类型的时候，可以这样写。
let k:myString

// 用type也可以定义一个对象
type animal = {
    name:string,
    age:number
}
let dog:animal

// 常见的用法
type myType = 1|2|3|4|5;

let l:myType  // 相当于 let l:1|2|3|4|5;
let m:myType
l = 5;
m = 2;
