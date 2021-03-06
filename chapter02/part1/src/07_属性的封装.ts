(function () {
    // 定义一个表示人的类
    class Person {
        name: string;
        age: number;

        constructor(name: string, age: number) {
            this.name = name;
            this.age = age;
        }
    }

    const per = new Person('孙悟空',18);
    console.log(per);
    
})()