"use strict";
(function () {
    // 定义一个表示人的类
    class Person {
        constructor(name, age) {
            this._name = name;
            this._age = age;
        }
        // 定义方法，用来获取name属性
        getName() {
            return this._name;
        }
        // 定义方法，用来设置name属性
        setName(value) {
            this._name = value;
        }
    }
    const per = new Person('孙悟空', 18);
    /**
     * 现在属性是在对象中设置的，属性可以任意的被修改
     *    属性可以任意被修改将会导致对象中的数据变得非常不安全
     * */
    // per._name = '猪八戒';
    // per._age = 20;
    per.setName('猪八戒');
    console.log(per);
})();
