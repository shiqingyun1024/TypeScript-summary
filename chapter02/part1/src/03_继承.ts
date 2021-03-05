(function(){
    // 定义一个表示动物的类
    class Animal{
        name:string;
        age:number;
        constructor(name:string,age:number){
            this.name = name;
            this.age = age;
        }

        sayHello(){
            console.log('动物')
        }
    }
    /**
     * Dog extends Animal
     *  --此时 Animal被称为父类，Dog被称为子类
     *  --使用继承后，子类将会拥有父类所有的属性和方法
     *  --通过继承可以将多个类中的共有的代码写在一个父类中
     *  --这样只需要写一次即可让所有的子类都同时拥有父类中的属性和方法
     * 
     * 
     * 
     * */ 

    // 定义一个表示狗的类
    class Dog extends Animal{
        
    }
    // 定义一个表示猫的类
    class Cat extends Animal{
        
    }
    const dog = new Dog('旺财',5);
    const cat = new Cat('咪咪',3);
    console.log(dog)
    console.log(cat)
    console.log(dog.sayHello());
    console.log(cat.sayHello());
    
})()