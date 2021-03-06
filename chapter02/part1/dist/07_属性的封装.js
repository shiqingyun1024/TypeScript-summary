"use strict";
(function () {
    // 定义一个表示人的类
    class Person {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }
    const per = new Person('孙悟空', 18);
    console.log(per);
})();
