class Dog{
    // name = "旺财";
    // age = 3;

    // constructor 被称为构造函数
    // 构造函数会在对象创建是调用
    constructor(){
        console.log('构造函数执行了~~~~');
        
    }

    bark(){
        console.log("汪汪汪");
        
    }
}

const dog = new Dog();
console.log(dog);
