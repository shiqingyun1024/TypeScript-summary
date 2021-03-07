"use strict";
(function () {
    // 定义一个表示人的类
    class Person {
        constructor(name, age) {
            this._name = name;
            this._age = age;
        }
        /**
         * getter 方法用来读取属性
         * setter 方法用来设置属性
         *    - 它们被称为属性的存取器
         *
         * */
        // 定义方法，用来获取name属性
        getName() {
            return this._name;
        }
        // 定义方法，用来设置name属性
        setName(value) {
            this._name = value;
        }
        // 定义方法，用来获取age属性
        getAge() {
            return this._age;
        }
        // 定义方法，用来设置age属性
        setAge(value) {
            if (value >= 0) {
                this._age = value;
            }
        }
        // 以上四种方法都被下面的get set存取器来代替了。
        // TS中设置getter方法的方式
        get name() {
            console.log('get name()执行了！！！');
            return this._name;
        }
        set name(value) {
            this._name = value;
        }
        get age() {
            console.log('get name()执行了！！！');
            return this._age;
        }
        set age(value) {
            if (value >= 0) {
                this._age = value;
            }
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
    per.setAge(-33);
    // 相当于调用的 get name方法
    console.log(per.name);
})();
