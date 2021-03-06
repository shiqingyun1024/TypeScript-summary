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
})();
