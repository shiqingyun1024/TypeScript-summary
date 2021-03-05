"use strict";
(function () {
    // 定义一个表示狗的类
    class Dog {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        sayHello() {
            console.log('汪汪汪');
        }
    }
    const dog = new Dog('旺财', 5);
    console.log(dog);
})();
