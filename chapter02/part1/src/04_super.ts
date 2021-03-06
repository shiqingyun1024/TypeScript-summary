(function(){
    class Animal{
        name:string;
        constructor(name:string){
            this.name = name;
        }

        sayHello(){
            console.log('动物在叫~~');
        }
    }

    class Dog extends Animal{
        age:number;
        constructor(name:string,age:number){
            // 如果在子类中写了构造函数，在子类的构造函数中必须对父类的构造函数进行调用。
            // 因为如果不调用，就相当于重写constructor构造函数，这个时候就没办法实现继承了。
            super(name); // 调用父类的构造函数
            this.age = age;
        }
        sayHello(){
            // 在类的方法中 super就表示当前类的父类
            super.sayHello();
        }
    }

    let dog = new Dog("旺财",3);
    console.log(dog.sayHello());
    
})()