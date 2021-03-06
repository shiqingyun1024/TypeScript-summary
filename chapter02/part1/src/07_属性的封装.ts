(function () {
    // 定义一个表示人的类
    class Person {
        // TS可以在属性前添加属性的修饰符
        /**
         * public 修饰的属性可以在任意位置访问（修改）同时也是默认值
         * 
         * */ 
        _name: string;
        _age: number;

        constructor(name: string, age: number) {
            this._name = name;
            this._age = age;
        }
    }

    const per = new Person('孙悟空',18);

    /**
     * 现在属性是在对象中设置的，属性可以任意的被修改
     *    属性可以任意被修改将会导致对象中的数据变得非常不安全
     * */ 
    per._name = '猪八戒';
    per._age = 20;
    console.log(per);
    
})()