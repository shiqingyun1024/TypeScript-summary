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
    // 定义一个表示猫的类
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        sayHello() {
            console.log('喵喵喵');
        }
    }
    const dog = new Dog('旺财', 5);
    const cat = new Cat('咪咪', 3);
    console.log(dog);
    console.log(cat);
    console.log(dog.sayHello());
    console.log(cat.sayHello());
})();
