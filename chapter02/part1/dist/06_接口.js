// 接口用来定义一个类结构，用来定义一个类中应该包含哪些属性和方法
// 同时接口也可以当成类型声明去使用
// interface myInterface{
//     name: String;
//     age:Number;
// }

"use strict";
(function () {
    let obj = {
        name: '努力',
        age: 1
    };
    // 定义接口的时候，可以定义多个同名的,
    // 不过在定义变量的时候，必须把多个同名接口中的定义的属性或者方法都写上，否则会报错
    const obj2 = {
        name: '加油',
        age: 11,
        gender: '男'
    };
    /**
     * 定义类时，可以使类去实现一个接口
     *     实现接口就是使类满足接口的要求，其实说白了，接口就是一个规范或者标准，使用时类满足这个规范即可
     *     也是限制类的实现
     * */
    class MyClass {
        constructor(name) {
            this.name = name;
        }
        sayHello() {
            console.log("接口");
        }
    }
})();
